import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  favouriteId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.favouriteId = params['id'];
      }
    )
  }

  addComment(comment: string){

    this.data.addComment(comment, this.favouriteId).subscribe((newComment: Task) => {
      this.router.navigate(['../'], { relativeTo: this.route});

    })
  }

}
