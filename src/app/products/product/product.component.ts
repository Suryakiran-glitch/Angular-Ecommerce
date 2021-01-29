import { product } from './../../../utils/interfaces';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit , OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: string;
  private sub: any;
  prod = [];

  constructor(
    private route: ActivatedRoute,
    private products: ProductsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.products.getProduct(this.id).subscribe(data =>{
      console.log(data);
      this.prod.push(data);
    })

  }

  OnDestroy(): void {
    this.sub.unsubscribe();
  }

}
