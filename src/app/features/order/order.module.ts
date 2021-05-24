import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { OrderNewComponent } from './order-new/order-new.component';

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
  declarations: [OrderComponent, OrderNewComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
