import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('username') && localStorage.getItem('token')) {
      /*req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token')
        }
      });*/
      req = req.clone({
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        })
      });
    }
    return next.handle(req);
  }
}
