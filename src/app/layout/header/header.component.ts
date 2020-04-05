import {Component, OnInit, OnChanges} from '@angular/core';
import {AuthenticationService} from 'src/app/common/auth/auth.service';
import {Router} from '@angular/router';
import {APP_URL} from "../../common/app-urls";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isUserLoggedIn: boolean;
  user: any;

  searchValue = '';

  constructor(private authService: AuthenticationService, private router: Router) {
    /*if (localStorage.getItem('token')) {
      this.isUserLoggedIn = this.authService.isUserLoggedIn();
      this.user = localStorage.getItem('username');
    } else {
      this.isUserLoggedIn = false;
    }*/
    this.authService.isUserLoggedIn().subscribe(value => {
      this.isUserLoggedIn = value;
    });

  }

  ngOnInit() {
  }


  search() {

    this.router.navigateByUrl(APP_URL.getUiProductSearchUrl(this.searchValue));
  }
}
