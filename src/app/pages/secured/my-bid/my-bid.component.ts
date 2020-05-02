import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  no: number;
  product: any;
  name: string;
  category: any;
  startingDate: any;
  status: string;
  baseAmount: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, product: '../../../../assets/3.jpg', name: 'Test', category: 'H', startingDate: '12-03-2020', status: 'Past Auction', baseAmount: 156, action: 2 }
];

@Component({
  selector: 'app-my-bid',
  templateUrl: './my-bid.component.html',
  styleUrls: ['./my-bid.component.css']
})
export class MyBidComponent implements OnInit {

  displayedColumns: string[] = ['no', 'product', 'name', 'category', 'startingDate', 'status', 'baseAmount', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
