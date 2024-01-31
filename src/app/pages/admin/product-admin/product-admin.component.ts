import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.scss'
})
export class ProductAdminComponent {
  products!: Product[]
  productMessage: undefined | string
  constructor(
    private service: ProductService,
    private router: Router,
    
  ){}
  ngOnInit(){
    
    try {
      const token = localStorage.getItem('result')
      const checkPermission = token && JSON.parse(token)
      if(!checkPermission){
        this.router.navigate(['/'])
      }else if(checkPermission.user.userRole !== "Admin"){
          this.router.navigate(['/'])
      }
    } catch (error) {
       console.log('Not Found Token');
    }
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
