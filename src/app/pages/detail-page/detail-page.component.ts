import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
  Product!: Product
  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ){
    this.Product = {} as Product
  }
  
  ngOnInit():void{
    this.loadProducts()
  }

  loadProducts():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getDetailProduct(id).subscribe((e)=>{
      this.Product = e
    })
  }
}
