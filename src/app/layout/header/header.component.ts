import { Component, OnInit, OnChanges } from '@angular/core';
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
    /*if (sessionStorage.getItem('token')) {
      this.isUserLoggedIn = this.authService.isUserLoggedIn();
      this.user = sessionStorage.getItem('username');
    } else {
      this.isUserLoggedIn = false;
    }*/
    this.authService.isLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });

  }

  ngOnInit() {
  }

}
