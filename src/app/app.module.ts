import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';
import { UniaddComponent } from './uniadd/uniadd.component';
import { UnilistingComponent } from './unilisting/unilisting.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UniversityComponent,
    UniaddComponent,
    UnilistingComponent,
  
 
 
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
