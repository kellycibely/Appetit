import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inf-order',
  templateUrl: './inf-order.component.html',
  styleUrls: ['./inf-order.component.css']
})
export class InfOrderComponent implements OnInit {

  size = 33.3;

  productSelected: string;
  _nextProduct: any;

  @Output() product = new EventEmitter();
  _summaryProduct: any;

  @Output() nextProduct = new EventEmitter();

  @Input()
  set summaryProduct(summaryProduct: string) {
    if (summaryProduct) {
      this._summaryProduct = summaryProduct;
    } 
  }

    constructor() { }

    ngOnInit(): void {
    }

    receiveProduct(variation) {
      this.productSelected = variation;
      this.product.emit(variation);
    }

    receiveNextProduct(nextProduct) {
      this._nextProduct = nextProduct;
      this.nextProduct.emit(nextProduct);
    }

  }
