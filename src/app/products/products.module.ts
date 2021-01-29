import { AppLayoutModule } from './../app-layout/app-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppLayoutModule
  ],
  exports : [ProductsComponent, ProductComponent]
})
export class ProductsModule { }
