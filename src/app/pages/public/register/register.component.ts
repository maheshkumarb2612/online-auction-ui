import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/auth/auth.service';
import { ResponseModel } from 'src/app/common/model/response.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  chide = true;

  username: string = null;
  email: string = null;
  password: string = null;
  confirmPassword: string = null;

  response: ResponseModel;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.username, this.email, this.password, this.confirmPassword)
      .subscribe((data: ResponseModel) => this.response = {
        ...data
      });
    console.log(this.response);
    this.authService.redirectToLogin();
  }

}
