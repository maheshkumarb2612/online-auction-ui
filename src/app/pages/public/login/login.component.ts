import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../common/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  response : Response;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  login(){
    this.authService.authenticate(this.username, this.password)
    .subscribe((data: Response) => this.response = {
       ...data
      
    });
    console.log(this.response);
  }

}
