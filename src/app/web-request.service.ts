import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3050';
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object){
    //console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  getFavoutite(uri: string){
    //console.log(uri);
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  deleteFavoutite(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  addComment(uri: string, payload: Object){
    //console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  getComment(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  deleteComment(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
