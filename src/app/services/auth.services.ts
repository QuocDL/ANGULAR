import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, userRes } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private URI_AUTH = 'http://localhost:3000/'
  constructor(
    private http: HttpClient
  ) { }


  signUpuser(user: User): Observable<User>{
    return this.http.post<User>(`${this.URI_AUTH}user/register`, user)
  }
  signInuser(user: User): Observable<userRes>{
    return this.http.post<userRes>(`${this.URI_AUTH}login`, user)
  }

}
