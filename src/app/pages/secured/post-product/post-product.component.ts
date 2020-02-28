import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  urls = [];
  noOfImg: any = 0;
  maxImg: any = 0;

  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.urls = [];
    this.noOfImg = event.target.files.length;

    if (this.noOfImg <= 10) {
      for (let i = 0; i < this.noOfImg; i++) {
        if (event.target.files && event.target.files[i]) {
              const reader = new FileReader();
              reader.readAsDataURL(event.target.files[i]); // read file as data url
              reader.onload = (event) => { // called once readAsDataURL is completed
              this.urls[i] = event.target.result; }
        }
      }
    }
  }
}
