import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public  tab:any[] = GLOBAL._DB.membres;;

  constructor() {
    
   }
}
