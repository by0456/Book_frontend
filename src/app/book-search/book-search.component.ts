import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  favourite: Favourite[];

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

  addFavourite(bid: string, title: string, description: string){
    //console.log(bid+", "+title+", "+authors+", "+description);
    this.data.addFavourite(bid, title, description).subscribe((favourite: Favourite) => {
      console.log(favourite);
    });
  }

  

}
