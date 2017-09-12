import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token:string;

  constructor(private http:Http, private router:Router, private authHttp: AuthHttp) {



   }

 refreshToken(){

   return this.authHttp.get('http://localhost:8000/api/v1/refresh')
   .map((response: Response) => {

      let token = response.json().token;

      console.log("auth.service#Response: " + response.json().object);
      console.log("New token:" + token);


      if (token) {
        this.token = token;
        localStorage.setItem('token', JSON.stringify(this.token));
        return true;
      } else {
        return false;
      }

    })
    .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}))


 }

  loggedIn() {
  //This helper method is used to check whether there is a non-expired JWT in local storage
  console.log("auth.service@loggedIn: " + tokenNotExpired());

  if(tokenNotExpired){

      this.refreshToken().subscribe((response: Response) => {});
  }

  return tokenNotExpired();
  }



  login (user: Object): Observable<any> {
  return this.http.post('http://localhost:8000/api/v1/login', user)
    .map((response: Response) => {
      let token = response.json().token;

      console.log("auth.service#Response: " + response.json().object);
      console.log("Response token:" + token);


      if (token) {
        this.token = token;
        localStorage.setItem('token', JSON.stringify(this.token));
        return true;
      } else {
        return false;
      }

    })
    .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
}

  register (user: Object): Observable<any> {

  return this.http.post('http://localhost:8000/api/v1/register', user)
    .map((response: Response) => response.json())
    .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
}

logout(): void {
  this.token = null;
  localStorage.removeItem('token');
  console.log("you are logged out!");
  this.router.navigate(['/']);
}
}

