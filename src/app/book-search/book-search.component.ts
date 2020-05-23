import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  books: Object;

  constructor(private data: DataService, private route:ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  addSearch(newSearch: string) {
    if (newSearch != '') {
      this.data.get(`${newSearch}`).subscribe(data => {

        this.books = data;
      })
    }
  }

  

}
