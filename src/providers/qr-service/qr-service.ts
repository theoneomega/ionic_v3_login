import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://api.vialidad.tk/";
/*
 Generated class for the QrProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class QrServiceProvider {
  token: any;

  constructor(public http: Http) {
    console.log('Hello QrProvider Provider');
  }

  getQR() {
    console.log(JSON.parse(localStorage.getItem('userData')).auth_token);

    this.token = JSON.parse(localStorage.getItem('userData')).auth_token;
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + this.token);
      headers.append('Content-Type', 'application/json');

      this.http.get(apiUrl + "last_qr", {headers}).subscribe(res => {
        console.log(res);
        resolve(res.json());
      }), (err) => {
        reject(err);
      }
    });
  }

}
