import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { QueryParamsBuilder } from './query-params';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public _http: Http, private _queryParams: QueryParamsBuilder) {
    //console.log('Hello AuthenticationProvider Provider');
  }

  login(loginCredentials){
    let queryString = this._queryParams.queryString(loginCredentials)
    let headers      = new Headers({ 
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/javascript, */*; q=0.01'
    }); 
    let headerOptions      = new RequestOptions({ headers: headers });
    return this._http.post('https://smartermobile.esndemo.de/syncservice/login', queryString, headerOptions)
      .map(this.processLoginResponse)
      .catch(this.handleError);
  }

  private processLoginResponse(data: Response){
    if(data.status==200){ 
      window.localStorage.setItem('sm_user',JSON.stringify(data.json()));
      return {logged_in: true, i18n_message: "LOGIN_SUCCESS"}
    }else{
      return {logged_in: false, i18n_message: "SERVER_ERROR"}
    }
    
  }

  private handleError(error: any){
    if(error.status== 401){
      return Observable.throw({logged_in: false, i18n_message: "LOGIN_ERROR", response_message: JSON.parse(error._body)})
    }else{
      return Observable.throw({logged_in: false, i18n_message: "SERVER_ERROR", response_message: JSON.parse(error._body)})
    }
    
  }

  static logout(){
    window.localStorage.removeItem('sm_user');
    return true;
  }

  static isAuthorized(): boolean {
    return !!window.localStorage.getItem('sm_user');
  }
  
}
