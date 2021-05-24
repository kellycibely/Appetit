import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './sale/order.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'detail' },
  {
    path: 'detail/:id',
    component: OrderComponent,
    data: {
      breadcrumb: 'Detail',
    },
  },
];

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
