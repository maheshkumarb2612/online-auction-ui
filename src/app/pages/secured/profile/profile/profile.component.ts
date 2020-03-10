import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  is_edit = true;
  show = false;

  role: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneno: number;
  gender: string;
  address: string;
  createdate: string;
  postproduct: number;
  PurchasedProduct: number;
  bio: string;
  fullname: string;

  constructor() { }

  ngOnInit() {
    this.role = "Seller or Bidder";
    this.username = "mahesh";
    this.firstname = "Maheshkumar";
    this.lastname = "Savita";
    this.email = "maheshkumarb2612@gmail.com";
    this.phoneno = 9724462436;
    this.gender = "Male";
    this.address = "Address";
    this.createdate = "12-06-2019";
    this.postproduct = 5;
    this.PurchasedProduct = 9;
    this.bio = "TYBCA Project";

    this.fullname = this.firstname + " " + this.lastname;

  }
}
