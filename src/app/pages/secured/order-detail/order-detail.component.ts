import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../common/product/product.service';
import { CartProduct } from '../../../common/model/cart.product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  paymentMethod = 'Paytem';
  bankName = 'ICICI';
  currency = 'Rupees';

  contactPerson = 'Deepak';
  contactNumber = '9885568899';
  emailId = 'deepakb3080@gmail.com';
  address = 'Kismat Nagar, Kubernagar, Ahmedabad - 382340';

  date: any = '21/10/2020';

  cartProducts: CartProduct[];

  username: any;

  errorMessage: any;

  subTotal = 0;
  total = 0;
  shippingCharge = 0;

  orderId: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    // this.getCartProducts();


    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
    console.log(this.orderId);
  }

  getCartProducts() {
    this.errorMessage = '';
    this.subTotal = 0;
    this.total = 0;
    this.shippingCharge = 0;


    this.productService.getCartProducts().subscribe(response => {

      if (response.success && response.data && response.data instanceof Array && response.data.length > 0) {
        this.cartProducts = response.data;

        for (const product of this.cartProducts) {
          this.subTotal = this.subTotal + product.totalPrice;
        }
        this.total = this.subTotal;
      } else {
        this.errorMessage = 'Cart is empty';
      }
    });
  }

}
