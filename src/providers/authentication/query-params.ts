import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QueryParamsBuilder {

  constructor() {
    //console.log('Hello AuthenticationProvider Provider');
  }

  queryString(queryJson: any){
    let queryString = new URLSearchParams();
    for (let key in queryJson) {
        queryString.append(key, queryJson[key]);
    }
    return queryString.toString();
  }
}
