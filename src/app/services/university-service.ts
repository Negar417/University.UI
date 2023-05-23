import {Injectable} from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({

    providedIn:'root'
})

export class UniversityService{

private  url="https://localhost:5001/University";

    constructor(private http:HttpClient) {

    }

     getCourse(){
      return this.http.get(this.url);
    }
    removeCourse(id:any){
      return this.http.delete(this.url+'/'+id);
    }
    saveCourse(inputdata:any){
      return this.http.post(this.url,inputdata);
    }
    GetCourseById(id:any){
      return this.http.get(this.url+'/'+id);
    }
}