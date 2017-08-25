import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://api.vialidad.tk/";
/*
 Generated class for the AuthServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  signup(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl + "register", JSON.stringify(data), { headers }).subscribe(res => {
        console.log(res);
        resolve(res.json());
      }), (err) => {
        reject(err);
      }
    });
  }

  login(data){
    //console.log(data);
    return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post(apiUrl + "authenticate", JSON.stringify(data), { headers }).subscribe(res => {
            // console.log(res.json().data.user_id);
            try {
              window["plugins"].OneSignal.sendTag("userID", res.json().data.user_id);
            } catch (e) {
              console.log(e)
            }

        resolve(res.json());
      }), (err) => {
        reject(err);
      }
    });
  }

}
