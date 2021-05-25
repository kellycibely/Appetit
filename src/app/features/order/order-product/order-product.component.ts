import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

import * as products from '../../../fakeResponse/products.json';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  productsList: any = (products as any).default;

  constructor(private route: Router) { }

  @Output() product = new EventEmitter();

  ngOnInit(): void {
  }
  
  detail(variation) {
    this.product.emit(variation);
  }
}
