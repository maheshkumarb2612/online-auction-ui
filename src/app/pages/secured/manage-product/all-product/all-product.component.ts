import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  constructor() { }

  numberOfRecord = ELEMENT_DATA.length;

  displayedColumns: string[] = ['proId', 'proName', 'cateory', 'basePrice', 'startDate', 'endDate', 'deleteId'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  proName: string;
  proId: number;
  cateory: string;
  basePrice: any;
  startDate: any;
  endDate: any;
  deleteId: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {proId: 1, proName: 'Hydrogen', cateory: 'H', basePrice: 123, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 2, proName: 'Helium', cateory: 'He', basePrice: 25, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 3, proName: 'Lithium', cateory: 'Li', basePrice: 250, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 4, proName: 'Beryllium', cateory: 'Be', basePrice: 123, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 5, proName: 'Boron', cateory: 'B', basePrice: 33, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 6, proName: 'Carbon', cateory: 'C', basePrice: 589, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 7, proName: 'Nitrogen', cateory: 'N', basePrice: 89, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 8, proName: 'Oxygen', cateory: 'O', basePrice: 45, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 9, proName: 'Fluorine', cateory: 'F', basePrice: 85, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 10, proName: 'Neon', cateory: 'Ne', basePrice: 12, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 11, proName: 'Sodium', cateory: 'Na', basePrice: 66, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 12, proName: 'Magnesium', cateory: 'Mg', basePrice: 58, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 13, proName: 'Aluminum', cateory: 'Al', basePrice: 75, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 14, proName: 'Silicon', cateory: 'Si', basePrice: 34, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
  {proId: 15, proName: 'Phosphorus', cateory: 'P', basePrice: 669, startDate: '12-02-20', endDate: '15-02-20', deleteId : 1},
];
