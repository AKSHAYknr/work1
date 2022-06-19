import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'add-user',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingcomponents=[UserComponent]