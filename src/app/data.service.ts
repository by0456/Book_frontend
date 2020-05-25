import { Injectable } from '@angular/core';

import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private webRequestService:WebRequestService) { }


  get(title: string) {
    return this.webRequestService.get(`bookSearch?q=${title}`);
  }

  addFavourite(bid:string, title:string, description:string) {

    return this.webRequestService.post(`favourite`, {bid, title, description});
  }

  getFavourite(){
    return this.webRequestService.getFavoutite(`favourite`);
  }

  getFavouriteDetails(id: string){
    return this.webRequestService.getFavoutite(`favourite/${id}`);
  }

  deleteFavourite(id: string){
    return this.webRequestService.deleteFavoutite(`favourite/${id}`);
  }

  addComment(comment: string, id: string){
    return this.webRequestService.addComment(`favourite/${id}/comment`, {comment});
  }

  getComment(id: string){
    return this.webRequestService.getComment(`favourite/${id}/comment`);
  }

  deleteComment(id: string, commentId: string){
    return this.webRequestService.deleteComment(`favourite/${id}/comment/${commentId}`);
  }

  updateComment(id: string, commentId: string, comment: string){
    return this.webRequestService.updateComment(`favourite/${id}/comment/${commentId}`, {comment});
  }

  addScore(score: number, id: string){
    return this.webRequestService.addScore(`favourite/${id}/bookScore`, {score});
  }

  getScore(id: string){
    return this.webRequestService.getScore(`favourite/${id}/bookScore`);
  }

  deleteScore(id: string, bookScoreId: string){
    return this.webRequestService.deleteScore(`favourite/${id}/bookScore/${bookScoreId}`);
  }

  updateScore(id: string, bookScoreId: string, score: number){
    return this.webRequestService.updateScore(`favourite/${id}/bookScore/${bookScoreId}`, {score});
  }

  checkUserExists(email: string, password: string){
    return this.webRequestService.checkUserExists(`users`, {email, password});
  }

  checkEmailExists(email: string){
    return this.webRequestService.checkEmailExists(`users/email`, {email});
  }

  

  
}
