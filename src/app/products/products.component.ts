import { ProductsService } from './../services/products.service';
import { product } from './../../utils/interfaces';
import { Component, OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: product[];

  constructor(
    private product: ProductsService
  ) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
