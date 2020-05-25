import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';
import { AuthenticateService } from 'src/app/authenticate.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  favourite: Favourite[];

  books: Object;
  id: Array<boolean>;
  found: string;

  constructor(private authenticateService: AuthenticateService, private data: DataService, private route: ActivatedRoute, private router: Router, private navbarService: NavbarService) { }

  ngOnInit(): void {

  }

  addSearch(newSearch: string) {
    if (newSearch != '') {
      this.data.get(`${newSearch}`).subscribe(data => {

        this.books = data;
        this.found = "Found in \' " + newSearch + " \'";
      })
    }
  }


  addFavourite(event, bid: string, title: string, description: string) {
    //console.log(bid+", "+title+", "+authors+", "+description);
    if (this.authenticateService.hasLogin()) {
      this.data.addFavourite(bid, title, description).subscribe((favourite: Favourite) => {
        event.srcElement.classList.add("addFavourite");
        console.log(favourite);
      });
    } else {
      this.router.navigate(['/login']);
    }

  }



}
