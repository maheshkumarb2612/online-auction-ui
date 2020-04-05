import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../common/product/product.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  address: string;
  city: string;
  contactNo: number;
  contactPerson: string;
  country: string;
  email: string;
  pincode: number;
  state: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  payment() {
    this.productService.payment(this.contactPerson, this.contactNo, this.email, this.address, this.city,
      this.pincode, this.state, this.country);/*.subscribe(response => {
      console.log(response);
    });*/
  }

}
