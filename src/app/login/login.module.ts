import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login/login.component';
import { RouterModule } from '@angular/router';
import { MyCommonModule } from '../ui/myCommon.module';

export const routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MyCommonModule],
})
export class LoginModule {}
