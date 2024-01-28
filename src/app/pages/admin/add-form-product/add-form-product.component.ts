import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form-product',
  templateUrl: './add-form-product.component.html',
  styleUrl: './add-form-product.component.scss'
})
export class AddFormProductComponent {
  constructor(private product: ProductService,
    private router: Router){}

  ngOnInit(){}

  submit(data: object){
    this.product.addProduct(data).subscribe((r)=>{
      this.router.navigate(['admin/product'])
    })
  }
}
