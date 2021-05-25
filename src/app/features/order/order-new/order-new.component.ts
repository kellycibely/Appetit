import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as products from '../../../fakeResponse/products.json';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {

  productsList: any = (products as any).default;

  productSelected: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.productsList)
  }

  back() {
    this.route.navigateByUrl('home');
  }

  receiveProduct(variation) {
    this.productSelected = variation;
    console.log(variation);
  }

}
