import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class UserService {

  //http (without Token ) authHttp (with Token) /// see modules/auth.module.ts
  constructor(private http:Http, private authHttp:AuthHttp) {
  }

  addUser(user: Object): Observable<User[]> {
    return this.authHttp.post('http://localhost:8000/api/v1/users', user)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }

  getUsers(): Observable<User[]> {

      return this.authHttp.get('http://localhost:8000/api/v1/users')
       .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }
}
