import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URI = 'http://localhost:3000/products'
  constructor( 
    private http: HttpClient
  ) {}

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.URI)
  }
  getDetailProduct(id: any): Observable<Product>{
    return this.http.get<Product>(`${this.URI}/${id}`)
  }
  removeProduct(id: any): Observable<Product>{
    return this.http.delete<Product>(`${this.URI}/${id}`)
  }
  addProduct(data: object): Observable<Product>{
    return this.http.post<Product>(`${this.URI}`, data)
  }
}
