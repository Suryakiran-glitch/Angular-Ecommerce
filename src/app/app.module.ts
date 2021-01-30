import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';
import {ToastrModule} from 'ngx-toastr';
import {firebaseConfig} from '../config';
import {RouterModule} from '@angular/router';

//Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

//Angular Material Modules
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CheckoutComponent,
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
    CartModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
