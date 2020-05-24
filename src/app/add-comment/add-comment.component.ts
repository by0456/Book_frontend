import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';
import { BookComment } from 'src/app/models/bookComment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  favouriteId: string;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.favouriteId = params.favouriteId;
      }
    )
    console.log(this.favouriteId);
  }

  addComment(comment: string){

    this.data.addComment(comment, this.favouriteId).subscribe((newBookComment: BookComment) => {
      console.log(newBookComment);
      this.router.navigate(['../'], { relativeTo: this.route});

    })
  }

}
