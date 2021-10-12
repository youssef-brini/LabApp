import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/services/member.service';
import { GLOBAL } from '../app-config';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  datasource:Member[] = [];
  
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createdDate','action'];
  

  constructor(private MS : MemberService) {
    this.datasource = this.MS.tab;
   }

  ngOnInit(): void {
  }

}
