import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {UserLogin} from "./login/userLogin";

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  restApiUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  myFunc() {
    return alert('clicked');
  }
  testRest(){
    return this.http.get('https://reqres.in/api/users')
  }
  loginAuth(loginRequest: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.restApiUrl, loginRequest)
  }
}
