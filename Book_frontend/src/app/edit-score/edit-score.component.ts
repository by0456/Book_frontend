import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.scss']
})
export class EditScoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  favouriteId: string;
  bookScoreId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.favouriteId = params.favouriteId;  
          this.bookScoreId = params.bookScoreId; 
      }
    )
  }

  updateScore(score: number){

    console.log(this.favouriteId);
    console.log(this.bookScoreId);
    console.log(score);

    this.data.updateScore(this.favouriteId, this.bookScoreId, score).subscribe(() => {
      this.router.navigate(['/favouriteView', this.favouriteId]);
    })
  }

}
