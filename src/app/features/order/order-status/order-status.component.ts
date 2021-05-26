import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  status: any;
  date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigateByUrl('/sale/complete');
  }

}
