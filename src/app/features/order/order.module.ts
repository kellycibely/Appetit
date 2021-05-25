import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCommonModule } from '../../ui/myCommon.module';

import { RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { InfOrderComponent } from './inf-order/inf-order.component';


export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new' },
  {
    path: 'detail/:id',
    component: OrderComponent,
    data: {
      breadcrumb: 'Detail',
    },
  },
  {
    path: 'new',
    component: OrderNewComponent,
    data: {
      breadcrumb: 'new',
    },
  },
];

@NgModule({
  declarations: [OrderComponent, OrderNewComponent, OrderProductComponent, InfOrderComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes), MyCommonModule],
})
export class OrderModule { }
