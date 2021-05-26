import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-product-data',
  templateUrl: './order-product-data.component.html',
  styleUrls: ['./order-product-data.component.css'],
})
export class OrderProductDataComponent implements OnInit {
  @Input() productSelected: any;
  @Output() productObservation = new EventEmitter();

  activePasta: any;
  quantity: number = 1;
  observation: string;
  totalOrder: number;
  total: number;

  constructor() {}

  ngOnInit(): void {
    this.totalOrder = this.quantity * this.productSelected.value;
    this.total = this.totalOrder;
  }

  remove() {
    if (this.quantity != 1) {
      this.quantity--;
      this.calculeTotal();
    }
  }

  add() {
    this.quantity++;
    this.calculeTotal();
  }

  calculeTotal() {
    this.total = this.totalOrder * this.quantity;
  }

  select() {
    const select = {
      id: this.productSelected.id,
      idProduct: this.productSelected.idProduct,
      image: this.productSelected.image,
      description: this.productSelected.name,
      quantity: this.quantity,
      total: this.total,
      pasta: this.activePasta,
      observation: this.observation,
    };

    this.productObservation.emit(select);
  }
}
