import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfOrderComponent } from './inf-order.component';

describe('InfOrderComponent', () => {
  let component: InfOrderComponent;
  let fixture: ComponentFixture<InfOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
