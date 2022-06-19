import { Component, OnInit ,Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users = [{name:"",age:""}]
 
  constructor(private UserserviceService:UserserviceService,private route:Router) {
    
   }

 
  ngOnInit(): void {
    this.UserserviceService.receiveuser().subscribe((data)=>{
      this.users.push(data);
      this.dataSource = new MatTableDataSource<any>(this.users);
    });
  }
  displayedColumns: string[] = ['name','age'];
  public dataSource= new MatTableDataSource<any>([]);

  add(){
    this.route.navigate(['add-user'])
  }

}
export interface Element{
  name:any;
  age:any;
}
