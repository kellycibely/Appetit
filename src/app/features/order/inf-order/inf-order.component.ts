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
  _clientSelected: Array<any> = [];

  @Output() product = new EventEmitter();
  _summaryProduct: any;

  @Output() nextProduct = new EventEmitter();

  @Output() clientSelected = new EventEmitter();

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
      this.size = 66.6 ;
      this.nextProduct.emit(nextProduct);
    }

    receiveNextClient(clientSelected) {
      this._clientSelected = clientSelected;
      this.size = 100 ;
      this.clientSelected.emit(clientSelected);
    }

  }
