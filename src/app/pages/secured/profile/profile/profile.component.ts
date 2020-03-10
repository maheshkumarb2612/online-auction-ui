import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/user/user.service';

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
  purchasedProduct: number;
  bio: string;
  fullname: string;
  totalBids: number;

  constructor(private userService: UserService) { }

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
    this.purchasedProduct = 9;
    this.bio = "TYBCA Project";

    this.fullname = this.firstname + " " + this.lastname;

    this.userService.getProfile().subscribe(apiResponse => {
      this.firstname = apiResponse.data.firstname;
      this.lastname = apiResponse.data.lastname;
      this.gender = apiResponse.data.gender;
      this.email = apiResponse.data.email;
      this.username = apiResponse.data.username;
      this.address = apiResponse.data.address;
      this.createdate = apiResponse.data.
      this.createdate = apiResponse.data.accountCreatedOn;
      this.purchasedProduct = apiResponse.data.totalPurchasedProducts;
      this.bio = apiResponse.data.bio;
      this.totalBids = apiResponse.data.totalBids;
    });

  }
}
