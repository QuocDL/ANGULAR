import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.scss'
})
export class ProductAdminComponent {
  products!: Product[]
  productMessage: undefined | string
  constructor(
    private service: ProductService
  ){}
  ngOnInit(){
    this.loadProducts()
  }

  deleteProduct(id: any){
    if(id){
      if(confirm('are you sure to delete?')){
          this.service.removeProduct(id).subscribe((result)=>{
            if(result){
            this.loadProducts()
            }
          })
      }
    }
  }

  loadProducts(){
    this.service.getProducts().subscribe((data)=>{
      this.products = data
    })
  }
  
}
