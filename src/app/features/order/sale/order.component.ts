import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as clients from '../../../fakeResponse/clients.json';
import { Client } from '../../model/client';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id: number;
  private sub: any;
  client: Client;
  
  clientsList: any = (clients as any).default;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.client = this.clientsList.filter(client => client.id == this.id)[0]
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('home');
  }

}
