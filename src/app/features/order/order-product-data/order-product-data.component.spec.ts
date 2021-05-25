import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductDataComponent } from './order-product-data.component';

describe('OrderProductDataComponent', () => {
  let component: OrderProductDataComponent;
  let fixture: ComponentFixture<OrderProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
