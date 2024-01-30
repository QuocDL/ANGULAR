import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss'
})
export class AsideBarComponent {
  constructor(
    private router: Router
  ){}


  logOut(){
    if(confirm('Log Out?')){
      localStorage.removeItem('result')
      this.router.navigate([''])
    }
  }
}
