import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_URL } from '../app-urls';
import { ResponseModel } from '../model/response.model';
import { Router } from '@angular/router';


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
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  authenticate(username, password) {
    sessionStorage.setItem('username', username);
    return this.httpClient.post<ResponseModel>(APP_URL.LOGIN, { username, password })
      .pipe(
        map(
          userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.data.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
          }
        )
      );
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    // console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  redirectToHome() {
    this.router.navigate([APP_URL.HOME]);
  }

  redirectToLogin() {
    this.router.navigate([APP_URL.LOGIN]);
  }

  register(username, email, password, confirmPassword) {

    return this.httpClient.post<ResponseModel>(APP_URL.REGISTER, { username, email, password, confirmPassword })
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
