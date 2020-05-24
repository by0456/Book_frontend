import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Favourite } from 'src/app/models/favourite.model';
import { BookScore } from 'src/app/models/bookScore.model';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.scss']
})
export class AddScoreComponent implements OnInit {

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

  addScore(score: number){

    this.data.addScore(score, this.favouriteId).subscribe((newBookScore: BookScore) => {
      console.log(newBookScore);
      this.router.navigate(['../'], { relativeTo: this.route});

    })
  }

}