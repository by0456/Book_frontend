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

  

  
}
