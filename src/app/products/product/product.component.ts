import { product , simeplChanges } from './../../../utils/interfaces';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private id: string;
  price: number;
  prod: product[] = [];
  quantity: number = 0;
  totalPrice: number

  constructor(
    private route: ActivatedRoute,
    private products: ProductsService,
    private cookie: CookieService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.products.getProduct(this.id).subscribe(data => {
      console.log(data);
      this.prod.push(data);
      this.price = data.price;
    })

  }

  increaseQuantity(): void {
    if (this.quantity <= 0) {
      this.quantity = 0;
    }
    this.quantity++;
  }

  decreaseQuantity(): void{
    if (this.quantity <= 0) {
      this.quantity = 0;
    }
    this.quantity--;
  }

  calcTotal(): number {
    this.totalPrice = this.quantity * this.price || this.price;
    return this.quantity * this.price || this.price;
  }

  addToCart(): void {
    this.cookie.set('id' , this.id.toString());
    this.cookie.set('totalPrice', this.totalPrice.toString());
    this.router.navigateByUrl('/cart');
  }


}
