import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['catId', 'catName', 'description', 'deleteId'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  catName: string;
  catId: number;
  description: string;
  deleteId: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { catId: 1, catName: 'Hydrogen', description: 'H', deleteId: 1 },
  { catId: 2, catName: 'Helium', description: 'He', deleteId: 1 },
  { catId: 3, catName: 'Lithium', description: 'Li', deleteId: 1 },
  { catId: 4, catName: 'Beryllium', description: 'Be', deleteId: 1 },
  { catId: 5, catName: 'Boron', description: 'B', deleteId: 1 },
  { catId: 6, catName: 'Carbon', description: 'C', deleteId: 1 },
  { catId: 7, catName: 'Nitrogen', description: 'N', deleteId: 1 },
  { catId: 8, catName: 'Oxygen', description: 'O', deleteId: 1 },
  { catId: 9, catName: 'Fluorine', description: 'F', deleteId: 1 },
  { catId: 10, catName: 'Neon', description: 'Ne', deleteId: 1 },
  { catId: 11, catName: 'Sodium', description: 'Na', deleteId: 1 },
  { catId: 12, catName: 'Magnesium', description: 'Mg', deleteId: 1 },
  { catId: 13, catName: 'Aluminum', description: 'Al', deleteId: 1 },
  { catId: 14, catName: 'Silicon', description: 'Si', deleteId: 1 },
  { catId: 15, catName: 'Phosphorus', description: 'P', deleteId: 1 },
];

