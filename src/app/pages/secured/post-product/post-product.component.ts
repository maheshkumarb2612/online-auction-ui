import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    urls = [];
    noOfImg: number =0;
      onFileChanged(event){
        this.urls=[];
        this.noOfImg = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
          if (event.target.files && event.target.files[i]) {
            const reader = new FileReader();

            reader.readAsDataURL(event.target.files[i]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
              this.urls[i] = event.target.result;
             }
          }
        }
      }
}
