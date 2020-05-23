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

  

  
}
