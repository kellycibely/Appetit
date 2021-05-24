import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './features/features.component';
import { LoginModule } from './login/login.module';

import { MenuListItemComponent } from './features/ui/menu-list-item/menu-list-item.component';
import { MenuListItemChildComponent } from './features/ui/menu-list-item-child/menu-list-item-child.component';
import { MyCommonModule } from './ui/myCommon.module';

import { httpInterceptorProviders } from './interceptors/httpInterceptorProviders';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    MenuListItemComponent,
    MenuListItemChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MyCommonModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
