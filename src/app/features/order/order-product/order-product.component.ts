import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

import * as products from '../../../fakeResponse/products.json';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  _summaryProduct: any;
  productsList: any = (products as any).default;

  constructor(private route: Router) { }

  @Output() product = new EventEmitter();
  @Output() nextProduct = new EventEmitter();
  @Input() set
    summaryProduct(summaryProduct: any) {
    if (summaryProduct) {
      this._summaryProduct = summaryProduct;
      this.productsList.forEach(product => {
        if (product.id == this._summaryProduct.idProduct) {
          product.variation.forEach(variation => {
            if (variation.id == this._summaryProduct.id) {
              variation.imageCheck = "../../../assets/icons/checked.svg";
              variation.status = true;
            }
          });
        }
      });
    }
  }

  ngOnInit(): void {
  }

  detail(variation) {
    this.product.emit(variation);
  }

  nextPage() {
    this.nextProduct.emit(true);     
  }
}
