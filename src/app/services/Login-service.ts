import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({

    providedIn:'root'
})

export class LoginService{

private  url="https://localhost:5001/User";

    constructor(private http:HttpClient) {

    }

    
}