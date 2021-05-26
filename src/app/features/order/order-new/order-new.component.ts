import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as products from '../../../fakeResponse/products.json';
import * as simpleClients from '../../../fakeResponse/simpleClients.json';
import * as client from '../../../fakeResponse/simpleClients.json';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css'],
})
export class OrderNewComponent implements OnInit {
  productsList: any = (products as any).default;
  oldClientsList: any = (simpleClients as any).default;

  resetProduct: any = (products as any).default;
  resetClient: any = (client as any).default;

  productSelected: any;

  summaryProduct: any;
  nextProduct: boolean = false;
  clientSelected: Array<any> = [];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.load();
  }

  back() {
    this.route.navigateByUrl('home');
  }

  receiveProduct(variation) {
    this.productSelected = variation;
  }

  receiveproductObservation(productObservation) {
    this.createSummaryProduct(productObservation);
  }

  createSummaryProduct(productObservation) {
    const summary = {
      id: productObservation.id,
      idProduct: productObservation.idProduct,
      description:
        productObservation.quantity + ' x ' + productObservation.description,
      image: productObservation.image,
      observation: productObservation.observation,
      price: productObservation.total,
      quantity: productObservation.quantity,
    };

    this.summaryProduct = summary;
  }

  receiveNextProduct(nextProduct) {
    this.nextProduct = nextProduct;
  }

  receiveNextClient(clientSelected) {
    let count = 0;
    const newListClient: Array<any> = [];
    clientSelected.forEach((c) => {
      let oldClient = this.oldClientsList.filter(
        (oldClient) => oldClient.id === c.id
      )[0];
      newListClient.push(oldClient);
    });
    this.clientSelected = newListClient;
  }

  load() {
    this.resetProduct.forEach((p) => {
      p.variation.forEach((v) => {
        v.status = false;
      });
    });
    this.resetClient.forEach((c) => {
      c.imageCheck = c.image;
    });
  }
}
