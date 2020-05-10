import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../common/user/user.service';
import {ProfileUserBid} from '../../../common/model/profile.user.bid.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

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
  {
    no: 1,
    product: '../../../../assets/3.jpg',
    name: 'Test',
    category: 'H',
    startingDate: '12-03-2020',
    status: 'Past Auction',
    baseAmount: 156,
    action: 2
  }
];

@Component({
  selector: 'app-my-bid',
  templateUrl: './my-bid.component.html',
  styleUrls: ['./my-bid.component.css']
})
export class MyBidComponent implements OnInit {

  userBids: ProfileUserBid[];

  displayedColumns: string[] = ['productId', 'productName', 'categoryName', 'productStartDateTime', 'productEndDateTime',
    'productStatus', 'basePrice', 'bidPrice', 'bidDateTime', 'viewDetails'];

  dataSource: MatTableDataSource<ProfileUserBid>;

  totalUserBids=0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.getUserBids();
  }

  getUserBids() {
    this.userService.getUserBids().subscribe(data => {

      this.userBids = data;
      this.totalUserBids = this.userBids.length;
      this.dataSource = new MatTableDataSource(this.userBids);
      //this.dataSource.paginator = this.paginator;

    });
  }

  refreshPage() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  }

}
