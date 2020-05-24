import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model'

@Component({
  selector: 'app-favourite-view',
  templateUrl: './favourite-view.component.html',
  styleUrls: ['./favourite-view.component.scss']
})
export class FavouriteViewComponent implements OnInit {

  favourites: Favourite[];
  selectedFavouriteId: string;


  constructor(private data: DataService, private route:ActivatedRoute, private router: Router) { }

  favouriteId: string

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.favouriteId = params._id;   
          console.log(params._id);
      }
    )

    this.data.getFavourite().subscribe((favourite: Favourite[]) => {
      this.favourites = favourite;

    })
  }




}
