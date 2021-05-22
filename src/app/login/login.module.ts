import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login/login.component';
import { RouterModule } from '@angular/router';

export const routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
