import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';
import { BookComment } from 'src/app/models/bookComment.model';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.scss']
})
export class FavouriteDetailsComponent implements OnInit {

  favourites: Favourite[];
  selectedFavouriteId: string;
  comments: BookComment[];
  hasComment: boolean;


  constructor(private data: DataService, private route:ActivatedRoute, private router: Router) { }

  favouriteId: string
  

  ngOnInit(): void {
    this.hasComment = false;
    this.route.params.subscribe(
      (params: Params) => {

          this.selectedFavouriteId = params.favouriteId;
          console.log(this.selectedFavouriteId);
          this.data.getFavouriteDetails(this.selectedFavouriteId).subscribe((favourite: Favourite[]) => {
            this.favourites = favourite;
            console.log(this.favourites);
          })

          this.data.getComment(this.selectedFavouriteId).subscribe((comment: BookComment[]) => {
            if(comment.length>0){
              this.hasComment = true;
              this.comments = comment;
              console.log(this.comments);
              //console.log(this.hasComment);
            }else{
              this.hasComment = false;
              //console.log(this.hasComment);
            }
            
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

  deleteComment(commentId: string){
    console.log(commentId);
    console.log(this.selectedFavouriteId);
    this.data.deleteComment(this.selectedFavouriteId, commentId).subscribe((res:any) => {
      this.comments = this.comments.filter(val => val._id !== commentId);
      this.hasComment = false;
      console.log(res);
    });

  }

  

}
