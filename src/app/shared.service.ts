import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharedService {
  username: any;
  url = 'https://usr-teodorescusebi.c9users.io/';

  constructor(private _http: HttpClient) { }

  getAllStudents():Observable<any> {
    return this._http.get(this.url + 'student/selectAll/');
  }

  getAllAsociations():Observable<any> {
    return this._http.get(this.url + 'asociatii/selectAll/');
  }

  getAllFacultati(): Observable<any>{
    return this._http.get(this.url + 'facultate/selectAll/');
  }

  getAllTopics():Observable<any> {
    return this._http.get(this.url + 'topics/selectAll/');
  }

  getAllComments() :Observable<any>{
    return this._http.get(this.url + 'comments/selectAll/');
  }

  getAllUniversitati(): Observable<any> {
    return this._http.get(this.url + 'universitate/selectAll/');
  }

  getInfoAboutUser(username): Observable<any> {
    return this._http.post(this.url + 'student/profil/', {username: username});
  }

  getTopicById(id: any): Observable<any> {
    return this._http.post(this.url + 'topics/byId/', {id: id});
  }

  getCommentsForTopic(id: any): Observable<any> {
    return this._http.post(this.url + 'comments/byId/', {topic_id: id});
  }

  getCommentsForUser(username: string):Observable<any> {
    return this._http.post(this.url + 'comments/byId/', {topic_id: username})
  }

  addStudent(username, nume, prenume, fed, aso, consiliu, senat, consAdm):Observable<any> {
    return this._http.post(this.url + 'student/selectAll/',{username: username, nume: nume, prenume: prenume, asociatie: aso, federatie: fed, id_facultate: null, consiliu: consiliu, senat: senat, consiliu_administratie: consAdm, admin:0,password:'12345678' });
  }

  addAsociatie(email: string, nume: string, prenume: string):Observable<any> {
    return this._http.post(this.url + 'asociatii/selectAll/', {denumire: nume, oras: prenume, jurisdictie:email});
  }

  addUniversity(email: string, nume: string, prenume: string, federatie: string, asociatie: string, fac: any, senat: any):Observable<any> {
    return this._http.post(this.url + 'universitate/selectAll/', {});
  }

  addComment(username, text, id, time):Observable<any> {
    return this._http.post(this.url + 'comments/selectAll/', {author: username, author_email:username, content: text, topic_id:id, timestamp: time});
  }

  addTopic(nume: any, timestamp: number, username: any):Observable<any> {
    return this._http.post(this.url + 'topics/selectAll/', {topic_title: nume, timestamp: timestamp, author: username});
  }
}
