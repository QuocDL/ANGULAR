import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products!: Product[]
  constructor(
    private services: ProductService
  ){}

  ngOnInit():void{
    this.loadProducts()
  }

  loadProducts():void{
    this.services.getProducts().subscribe((e)=>{
      this.products = e
    })
  }
}
