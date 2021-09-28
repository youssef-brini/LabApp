import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
export interface PeriodicElement {
  id: string;
  cin: string;
  name: string;
  createdDate: string;
  cv: string;
  type: string;

}


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  datasource:PeriodicElement[] = GLOBAL._DB.membres;
  
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createdDate','action'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
