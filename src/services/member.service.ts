import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/Models/Member';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public  tab:any[] = GLOBAL._DB.membres;

  constructor(private httpClient : HttpClient) {
    
   }
  saveMember(member : Member) : Promise<Member> {
    //return this.httpClient.post<Member>('linkToAPI'? member).toPromise();
    const memberToSave = {
      ...member , 
      
    }
    memberToSave.id = member.id ?? Math.ceil(Math.random ()* 10000).toString();
    memberToSave.createdDate = member.createdDate ?? new Date().toISOString();
    this.tab = [memberToSave, ...this.tab.filter(item => item.id != memberToSave.id )]
    return new Promise (resolve => resolve(memberToSave))
  }
}
