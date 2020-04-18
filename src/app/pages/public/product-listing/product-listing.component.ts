import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Product} from '../../../common/model/product.model';
import {ProductService} from '../../../common/product/product.service';
import {Pagination} from '../../../common/model/pagination.model';
import {ActivatedRoute, Router} from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  providers: [DatePipe]
})
export class ProductListingComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  ];

  typesOfShoes: string[] = ['Antique', 'Art', 'Books', 'Coins', 'Electronics', 'Painting', 'Other'];

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;


  startDate = '12/12/1999';
  startTime = '03:45:12';
  endDate = '13/12/1999';
  endTime = '03:45:45';


  myDate = new Date();
  today = Date.now();

  // this.startDate = new Date('this.startDate 11:26:16').getHours();
  // this.endDate = new Date('this.endDate 12:26:16').getHours();

  // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  pagination: Pagination;
  products: Product[];
  errorMessage: string;
  searchValue = '';

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.errorMessage = '';
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['searchValue'];
    });
    console.log(this.searchValue);

    this.productService.getProducts(this.searchValue, true, true, true).subscribe(data => {

      if (data.products && data.products instanceof Array && data.products.length > 0) {
        this.products = data.products;
        this.pagination = data.pagination;
      } else {
        this.errorMessage = 'No products posted by any user';
      }
    });
  }
}
