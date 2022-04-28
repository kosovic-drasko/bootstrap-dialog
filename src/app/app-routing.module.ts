import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {component:HomeComponent,path:""},
  {component:AboutComponent,path:"About"},
  {component:EmployeeComponent,path:"Employee"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
