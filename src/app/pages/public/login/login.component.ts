import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../common/auth/auth.service';
import { ResponseModel } from 'src/app/common/model/response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  response : ResponseModel;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  login(){
    this.authService.authenticate(this.username, this.password)
    .subscribe((data: ResponseModel) => this.response = {
       ...data

    });
    console.log(this.response);
    if(sessionStorage.getItem('token')){
        this.authService.redirectToHome();
    }
  }

}
