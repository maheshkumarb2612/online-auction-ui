import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/common/model/product.model';
import {ProductService} from 'src/app/common/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {APP_URL} from 'src/app/common/app-urls';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productId: any;

  images = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    console.log(this.productId);
    this.getProductDetail(this.productId);*/
  }

  getProductDetail(productId: any) {
    this.productService.getProductDetail(productId).subscribe(data => {

      this.product = data;
      console.log(this.product);

      if (data.imageIds) {
        this.images = [];
        for (const imgId of data.imageIds) {
          this.images.push(APP_URL.getDownlodImageUrl(imgId));
        }
      }

    });
  }

}
