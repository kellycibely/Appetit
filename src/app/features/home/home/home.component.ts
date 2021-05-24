import { Component, OnInit } from '@angular/core';
import * as clients from '../../../fakeResponse/clients.json';
import * as orders from '../../../fakeResponse/orders.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName = 'Kelly Cibely';

  clientsList: any = (clients as any).default;
  ordersList: any = (orders as any).default;
  constructor() {}

  ngOnInit(): void {
    console.log(this.ordersList);
  }

  teste(id) {
    console.log(id);
  }
}
