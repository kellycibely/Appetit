import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClientsComponent } from './order-clients.component';

describe('OrderClientsComponent', () => {
  let component: OrderClientsComponent;
  let fixture: ComponentFixture<OrderClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
