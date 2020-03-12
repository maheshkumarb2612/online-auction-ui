import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/common/product/product.service';
import { Category } from 'src/app/common/model/category.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  urls = [];
  noOfImg: any = 0;
  maxImg: any = 10;

  productName = '';

  selectedCategory: any;

  startDate = '';
  endDate = '';
  startTime = '';
  endTime = '';
  price = 1;

  categories: any = [];

  constructor(private produstService: ProductService) {
    this.getCategories();
  }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.urls = [];
    this.noOfImg = event.target.files.length;

    if (this.noOfImg <= this.maxImg) {
      for (let i = 0; i < this.noOfImg; i++) {
        if (event.target.files && event.target.files[i]) {
          const reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]); // read file as data url
          reader.onload = (event) => { // called once readAsDataURL is completed
            this.urls[i] = (event.target as FileReader).result;
          };
        }
      }
    }
  }

  getCategories() {
    this.produstService.getCategories().subscribe(data => this.categories = data);
    //  this.categories.push({ id: 1, name: 'hhhd', description: 'dgdfdfdf' });
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  startDateChange(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value.toLocaleDateString();
  }

  endDateChange(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value.toLocaleDateString();
  }
  postProduct() {
    debugger;
  }
}
