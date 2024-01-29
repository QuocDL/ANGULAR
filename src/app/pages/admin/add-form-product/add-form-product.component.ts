import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-add-form-product',
  templateUrl: './add-form-product.component.html',
  styleUrl: './add-form-product.component.scss'
})
export class AddFormProductComponent {
  product: Product ={
    title: '',
    short_description: '',
    thumbnail: '',
    genre: '',
    game_url: '',
    freetogame_profile_url: '',
    gameplay: '',
    developer: '',
    publisher: '',
    platform: '',
    release_date: '',
    system_requirements_medium: {
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
    
  }
  editMode: boolean = false
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(){
    const id = this.route.snapshot.params['id']
    if(id){
      this.editMode = true
      this.service.getDetailProduct(id).subscribe((result)=>{
        console.log('Result Detail',result);
        this.product = result
        // console.log(result.system_requirements_medium.medium.cpu);
      })
    }
  }
  submit(){
    if(this.editMode){
      this.service.updateProduct(this.product).subscribe((e)=>{
        this.product = e
        this.router.navigate(['/admin/product'])
        // console.log(e);
      })
    }else{
      this.service.addProduct(this.product).subscribe((e)=>{
          this.product = e
          this.router.navigate(['/admin/product'])
      })
    }
  }
}
