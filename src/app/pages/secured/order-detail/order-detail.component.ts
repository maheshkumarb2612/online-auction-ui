import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../common/product/product.service';
import {CartProduct} from '../../../common/model/cart.product.model';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  cartProducts: CartProduct[];

  username: any;

  errorMessage: any;

  subTotal = 0;
  total = 0;
  shippingCharge = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.getCartProducts();
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
