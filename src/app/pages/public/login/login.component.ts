import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/auth/auth.service';
import { ResponseModel } from 'src/app/common/model/response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  responseModel: ResponseModel;
  errorArray: string[];

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe((res: ResponseModel) => {
        this.responseModel = res;
        // console.log(this.responseModel);
        if (res.success && res.success) {
          if (sessionStorage.getItem('token')) {
            this.authService.redirectToHome();
          }
        } else if (res.success && !res.success) {
          this.errorArray = res.message.split('|');
        }
      }, error => {
        this.errorArray = [];
        if (error.error) {
          this.errorArray = error.error.message.split('|');
        } else {
          this.errorArray.push(error.message);
        }
      });
  }

}
