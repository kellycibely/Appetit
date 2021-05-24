import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import * as clients from '../fakeResponse/clients.json';

@Injectable()
export class Interceptor implements HttpInterceptor {
  clientsList: any = (clients as any).default;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    if (req.url.endsWith('api/clients.json') && req.method == 'GET') {
      return new Observable((observer) => {
        observer.next(
          new HttpResponse<any>({
            body: { clients },
            status: 200,
          })
        );
        observer.complete();
      });
    }
    return next.handle(req);
  }
}
