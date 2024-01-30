import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userState:string = 'default'
  userName: string = ''
  constructor(
    private route: Router
  ){}

  ngOnInit(){
     this.route.events.subscribe(()=>{
       if(localStorage.getItem('result')){
          const result = localStorage.getItem('result')
          const userData = result && JSON.parse(result)
          if(userData.user.userRole === 'Admin'){
            this.userState = 'admin'
            const admindata = userData.user
            this.userName = admindata.lastname
            // console.log(admindata.lastname);
          }else if(userData.user.userRole === 'user'){
            this.userState = 'user'
            const admindata = userData.user
            this.userName = admindata.lastname
            this.userName = admindata.firstname
          }else{
            this.userState = 'default'
          }
       }
        }
    )
  }

  logOut(){
    localStorage.removeItem('result')
    this.userState = 'default'
  }

}
