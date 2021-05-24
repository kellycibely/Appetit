import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as orders from '../../../fakeResponse/orders.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName = 'Kelly Cibely';

  ordersList: any = (orders as any).default;
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log(this.ordersList);
  }

  teste(id) {
    this.route.navigateByUrl('sale/detail/' + id);
    console.log(id);
  }
}
