import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  Bid_price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', Bid_price: 10},
  {position: 2, name: 'Helium', Bid_price: 50},
  {position: 3, name: 'Lithium', Bid_price: 100},
  {position: 4, name: 'Beryllium', Bid_price: 111},
  {position: 5, name: 'Boron', Bid_price: 150},
  {position: 6, name: 'Carbon', Bid_price: 170},
  {position: 7, name: 'Nitrogen', Bid_price: 189},
  {position: 8, name: 'Oxygen', Bid_price: 197},
  {position: 9, name: 'Fluorine', Bid_price: 250},
  {position: 10, name: 'Neon', Bid_price: 335}
];


@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.css']
})
export class LiveAuctionComponent implements OnInit {

  displayedColumns = ['position', 'name', 'Bid_price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}


