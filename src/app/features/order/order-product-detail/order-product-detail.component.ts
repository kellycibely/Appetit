import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-product-detail',
  templateUrl: './order-product-detail.component.html',
  styleUrls: ['./order-product-detail.component.css'],
})
export class OrderProductDetailComponent implements OnInit {
  @Input() productSelected: any;
  @Output() productObservation = new EventEmitter();
  active_pasta: string;
  observaton: string;

  constructor() {}

  ngOnInit(): void {}

  receiveproductObservation(productObservation) {
    this.productObservation.emit(productObservation);
  }
}
