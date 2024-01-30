import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServices } from '../../services/auth.services';
import { User, userRes } from '../../interfaces/user';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.scss'
})
export class FormAuthComponent {
  user: User = {
    accessToken:'',
    email: '',
    lastname:'',
    password: '',
    age: 0,
    firstname: '',
  }
  formState: boolean = false

  constructor(
    private servicesAuth: AuthServices,
    private router: Router
  ){}

  ngOnInit(){
   
  }
  login(parameter: boolean){
    this.formState = parameter
     console.log(this.formState);
  }
  submitForm(){
     if(this.formState){
      this.servicesAuth.signUpuser(this.user).subscribe((result)=>{
        console.log(result);
      })
    }else{
      this.servicesAuth.signInuser(this.user).subscribe((result: userRes)=>{
          localStorage.setItem('result', JSON.stringify(result))
         this.router.navigate(['/'])
      })
    }
  }
}
