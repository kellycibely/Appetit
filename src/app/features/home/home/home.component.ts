import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import * as orders from '../../../fakeResponse/orders.json';
import * as products from '../../../fakeResponse/products.json';
import * as client from '../../../fakeResponse/simpleClients.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName = 'Kelly Cibely';
  private sub: any;
  id: number;

  ordersList: any = (orders as any).default;
  resetProduct: any = (products as any).default;
  resetClient: any = (client as any).default;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      if (this.id == 2) {
        this.load();
      }
    });
  }

  ngOnInit(): void {
  }

  detail(id) {
    this.route.navigateByUrl('sale/detail/' + id);
  }

  new() {
    this.route.navigateByUrl('sale/new');
  }

  load() {
    this.resetProduct.forEach(p => {
      p.variation.forEach(v => {
        v.status = false;
      });
    });
    this.resetClient.forEach(c => {
      c.imageCheck = c.image;
    });
  }
}
