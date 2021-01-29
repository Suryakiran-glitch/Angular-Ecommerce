import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {product} from '../../utils/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id) {
    return this.http.get<product>(`https://fakestoreapi.com/products/${id}`);
  }
}
