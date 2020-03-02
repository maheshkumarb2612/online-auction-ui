import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullname = "Maheshkumar Savita";
  role = "Seller or Bidder";
  username = "mahesh";
  firstname ="abc";
  lastname = "xyz";
  email = "maheshkumarb2612@gmail.com";
  phoneno = 9724462436;
  gender = "Male";
  address ="Address";
  createdate = "12-06-2019";
  postproduct = 5;
  buyingproduct = 9;
  bio = "Bio";

  tenp = this.firstname + this.lastname;

  constructor() { }

  ngOnInit() {
  }
}
