import { Component, OnInit ,Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 @Input() user!: { name: string; age: any; };
 users = [{name:"",age:""}];
 
  constructor(private UserserviceService:UserserviceService) {
    this.users=this.UserserviceService.getdata();
   }
   updatelist(name:string,age:any){
    this.UserserviceService.adduser(name,age);
    this.dataSource = new MatTableDataSource<any>(this.users);
  }
  public dataSource = new MatTableDataSource<any>([])
  displayedColumns: string[]=['name','age'];
  ngOnInit(): void {
  }

}
