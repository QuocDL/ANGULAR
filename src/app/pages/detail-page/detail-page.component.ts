import { Component } from '@angular/core';
import { Product, systemType } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
  Product!: Product
  SystemProduct:systemType =  {
     medium: {
        System_Play: "Medium",
        cpu: '',
        ram: '',
        card: '',
        card_ram: '',
        os: '',
        freedisk: ''
      },
      playgood: {
        System_Play: "Play Good",
        cpu: '',
        ram: '',
        card: '',
        card_ram: '',
        os: '',
        freedisk: ''
      }
  }
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
      this.SystemProduct = e.system_requirements_medium
      this.Product = e
    })
  }
}
