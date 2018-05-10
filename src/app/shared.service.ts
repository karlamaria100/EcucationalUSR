import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharedService {
  userData: any;
  url = 'https://usr-teodorescusebi.c9users.io/';

  constructor(private _http: HttpClient) { }

  getAllStudents():Observable<any> {
    return this._http.get(this.url + 'student/selectAll/');
  }

  getAllAsociations():Observable<any> {
    return this._http.get(this.url + 'asociatii/selectAll/');
  }
}
