import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';



@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
   datasource:any[] = GLOBAL._DB.membres;
  
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createdDate','action'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
