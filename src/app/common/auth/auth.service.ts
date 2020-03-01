import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {APP_URL} from '../app-urls';


export class User{
  constructor(
    public status:string,
     ) {}
}
export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private httpClient:HttpClient
  ) { 
     }
     authenticate(username, password) {
       debugger;
       sessionStorage.setItem('username',username);
      return this.httpClient.post<Response>(APP_URL.LOGIN, {username,password});
      /*.pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
      );*/
    }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}