import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../common/auth/auth.service';
import { ResponseModel } from 'src/app/common/model/response.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  chide = true;

  username : string;
  email : string;
  password : string;
  confirm_password : string;

  response : ResponseModel;

  constructor(private authRegService: AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  register() {
    this.authRegService.registerAuthenticate(this.username, this.email, this.password, this.confirm_password)
      .subscribe((data: ResponseModel) => this.response = {
        ...data

      });
    console.log(this.response);
    if (sessionStorage.getItem('token')) {
      this.authRegService.redirectToHome();
    }
  }

}
