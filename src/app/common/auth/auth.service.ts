import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_URL } from '../app-urls';
import { ResponseModel } from '../model/response.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


export class User {
  constructor(public status: string) { }
}

export class JwtResponse {
  constructor(public jwttoken: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  authenticate(username, password) {
    sessionStorage.setItem('username', username);
    return this.httpClient.post<ResponseModel>(APP_URL.BACKEND_LOGIN, { username, password })
      .pipe(
        map(
          userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.data.token;
            sessionStorage.setItem('token', tokenStr);
            this.isLoggedIn.next(true);
            return userData;
          }
        )
      );
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    if (user && user != null) {
      // console.log(!(user === null))
      this.isLoggedIn.next(true);
    }
    return this.isLoggedIn;
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }

  redirectToHome() {
    this.router.navigateByUrl(APP_URL.HOME);
  }

  redirectToHost() {
    this.router.navigateByUrl(APP_URL.HOST);
  }

  redirectToLogin() {
    this.router.navigateByUrl(APP_URL.LOGIN);
  }

  register(username, email, password, confirmPassword) {

    return this.httpClient.post<ResponseModel>(APP_URL.BACKEND_REGISTER, { username, email, password, confirmPassword })
      .pipe(
        map(
          userData => {
            console.log(userData);
            return userData;
          }
        )
      );
  }

}
