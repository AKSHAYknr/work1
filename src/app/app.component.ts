import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserserviceService],
})
export class AppComponent {
  title = 'work1';
  users : {name:any,age:any}[] = [];
  constructor(public userserviceService:UserserviceService) {}
  ngOnInit(){

    //this.users= this.userserviceService.users;
    this.userserviceService.users.subscribe(user =>this.users.push(user));
  }
}
