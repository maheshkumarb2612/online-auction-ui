import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  Date_time: any;
  Bid_price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', Date_time: '2020-04-06 12:02:30', Bid_price: 10 },
  { position: 2, name: 'Helium', Date_time: '2020-04-06 12:02:30', Bid_price: 50 },
  { position: 3, name: 'Lithium', Date_time: '2020-04-06 12:02:30', Bid_price: 100 },
  { position: 4, name: 'Beryllium', Date_time: '2020-04-06 12:02:30', Bid_price: 111 },
  { position: 5, name: 'Boron', Date_time: '2020-04-06 12:02:30', Bid_price: 150 },
  { position: 6, name: 'Carbon', Date_time: '2020-04-06 12:02:30', Bid_price: 170 },
  { position: 7, name: 'Nitrogen', Date_time: '2020-04-06 12:02:30', Bid_price: 189 },
  { position: 8, name: 'Oxygen', Date_time: '2020-04-06 12:02:30', Bid_price: 197 },
  { position: 9, name: 'Fluorine', Date_time: '2020-04-06 12:02:30', Bid_price: 250 },
  { position: 10, name: 'Neon', Date_time: '2020-04-06 12:02:30', Bid_price: 335 }
];


@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.css']
})
export class LiveAuctionComponent implements OnInit {

  panelOpenState = false;

  displayedColumns = ['position', 'name', 'Bid_price', 'Date_time'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}


