import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {
  url = 'https://usr-teodorescusebi.c9users.io/';

  constructor(private _http: HttpClient) { }

  login(user: string, pass: string): Observable<any> {
    return this._http.post(this.url + 'login/', {username: user, password: pass});
  }

}
