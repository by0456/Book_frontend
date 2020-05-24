import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  favouriteId: string;
  commentId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.favouriteId = params.favouriteId;  
          this.commentId = params.commentId; 
      }
    )
  }

  updateComment(comment: string){

    console.log(this.favouriteId);
    console.log(this.commentId);
    console.log(comment);

    this.data.updateComment(this.favouriteId, this.commentId, comment).subscribe(() => {
      this.router.navigate(['/favouriteView', this.favouriteId]);
    })
  }

}
