import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  name!: any;
  age: any;
  constructor(private userserviceservice:UserserviceService) { }

  ngOnInit(): void {
  }
  onAdduser(){
      this.userserviceservice.adduser(this.name,this.age)
  }
}
