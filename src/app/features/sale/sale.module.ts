import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale/sale.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'detail' },
  {
    path: 'detail/:id',
    component: SaleComponent,
    data: {
      breadcrumb: 'Add Contact',
    },
  },
];

@NgModule({
  declarations: [SaleComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class SaleModule {}
