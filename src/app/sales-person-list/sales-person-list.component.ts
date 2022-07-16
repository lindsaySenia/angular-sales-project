import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';


@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "jd@gmail.com", 100),
    new SalesPerson("Jane", "Buck", "jb@aol.com", 10000),
    new SalesPerson("Billy", "Goat", "billg@yahoo.com", 500),
    new SalesPerson("Darth", "Vader", "darkside@msn.com", 1000000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
