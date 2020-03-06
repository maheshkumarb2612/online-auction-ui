import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isUserLoggedIn: boolean;
  user: any;

  constructor(private authService: AuthenticationService) {
    if (sessionStorage.getItem('token')) {
      this.isUserLoggedIn = true;
      this.user = this.authService.isUserLoggedIn();
    } else {
      this.isUserLoggedIn = false;
    }
  }

  ngOnInit() {

  }

}
