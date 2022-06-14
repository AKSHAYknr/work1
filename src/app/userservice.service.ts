import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = [{name:"",age:""}];
  getdata(){
   return this.users;
  }


    adduser(name:string,age:any){
      this.users.push({name,age})
    }

  constructor() { }
}
