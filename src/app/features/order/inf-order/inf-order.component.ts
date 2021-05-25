import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inf-order',
  templateUrl: './inf-order.component.html',
  styleUrls: ['./inf-order.component.css']
})
export class InfOrderComponent implements OnInit {

  size= 33.3;

  productSelected: string;

  @Output() product = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  receiveProduct(variation) {
    this.productSelected = variation;
    this.product.emit(variation);
  }

}
