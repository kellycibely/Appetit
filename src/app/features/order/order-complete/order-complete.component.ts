import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  list() {
    this.router.navigateByUrl('/home/2');
  }

  new() {
    this.router.navigateByUrl('/sale/new');
  }

}
