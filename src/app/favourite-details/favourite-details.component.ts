import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model'

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.scss']
})
export class FavouriteDetailsComponent implements OnInit {

  favourites: Favourite[];
  selectedFavouriteId: string;
  comment: string;


  constructor(private data: DataService, private route:ActivatedRoute, private router: Router) { }

  favouriteId: string

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {

          this.selectedFavouriteId = params.favouriteId;
          console.log(this.selectedFavouriteId);
          this.data.getFavouriteDetails(this.selectedFavouriteId).subscribe((favourite: Favourite[]) => {
            this.favourites = favourite;
            console.log(this.favourites);
          })
 
      }
    )

    
  }
  deleteFavourite(favouriteId: string){
    this.data.deleteFavourite(favouriteId).subscribe((res:any) => {
      console.log(res);
      this.router.navigate(['/favouriteView']);
    });
  }

  

}
