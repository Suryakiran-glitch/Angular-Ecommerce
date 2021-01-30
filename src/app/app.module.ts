import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

//Angular Material Modules
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    BrowserAnimationsModule,
    ProductsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    CartModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
