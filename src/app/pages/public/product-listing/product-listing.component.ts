import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

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
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
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

  //this.startDate = new Date("this.startDate 11:26:16").getHours();
  //this.endDate = new Date("this.endDate 12:26:16").getHours();

  // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  constructor() {

  }

  ngOnInit() {
  }
}
