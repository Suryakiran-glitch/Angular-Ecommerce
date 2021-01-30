import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id:number
  totalPrice:number
  cart:any = []
  fullPrice:number

  constructor(
    private cookie: CookieService,
    private product: ProductsService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.cookie.get('id'));
    this.totalPrice = parseInt(this.cookie.get('totalPrice'))

    this.product.getCartProduct(this.id).subscribe(data => {
      this.cart.push(data);
    })
  }

  checkOut(): void {
    this.cookie.delete('id');
    this.cookie.delete('totalPrice');
  }

}
