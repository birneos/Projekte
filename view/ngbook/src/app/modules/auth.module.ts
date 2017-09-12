/***
 *
 * Sending Token with every Request, the normal Http-Service will improved by AuthHttp
 *
 * Inject this in your Service
 *
 * import { AuthHttp } from "angular2-jwt";
 * constructor(private auth:AuthHttp){}
 *
 * this.yourservice.auth.get('')....
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule {}
