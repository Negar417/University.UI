import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';
import { UnilistingComponent } from './unilisting/unilisting.component';
import { UniaddComponent } from './uniadd/uniadd.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'login',component:LoginComponent},
  {path:'University',component:UniversityComponent,children:[
    {path:'',component:UnilistingComponent},
    {path:'create',component:UniaddComponent},
    {path:'edit/:id',component:UniaddComponent},
  ]},
//  {path:'',component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
