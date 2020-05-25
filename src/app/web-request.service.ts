import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'https://book-back-end-assignment.herokuapp.com';
  }

  login(email: string, password: string){
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email,
      password
    }, {
      observe: 'response'
    });
  }

  checkUserExists(uri: string, payload: Object){

    console.log(payload);
    return this.http.post(`${this.ROOT_URL}/users/checkUser`, payload);
  }

  checkEmailExists(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/users/email`, payload);
  }
  
  register(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
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
  updateComment(uri: string, payload: Object){
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }
  
  addScore(uri: string, payload: Object){
    //console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  getScore(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  deleteScore(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
  updateScore(uri: string, payload: Object){
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }
}
