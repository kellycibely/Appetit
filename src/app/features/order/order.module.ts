import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCommonModule } from '../../ui/myCommon.module';

import { RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { InfOrderComponent } from './inf-order/inf-order.component';
import { OrderProductDetailComponent } from './order-product-detail/order-product-detail.component';
import { OrderProductDataComponent } from './order-product-data/order-product-data.component';


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
  declarations: [OrderComponent, OrderNewComponent, OrderProductComponent, InfOrderComponent, OrderProductDetailComponent, OrderProductDataComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes), MyCommonModule],
})
export class OrderModule { }
