import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  
  status: any;
  date = new Date();
  test = "#ff8822";
  
  constructor() { }

  ngOnInit(): void {
  }

}
