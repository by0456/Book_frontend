import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FavouriteDetailsComponent = class FavouriteDetailsComponent {
    constructor(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.hasComment = false;
        this.hasScore = false;
        this.route.params.subscribe((params) => {
            this.selectedFavouriteId = params.favouriteId;
            console.log(this.selectedFavouriteId);
            this.data.getFavouriteDetails(this.selectedFavouriteId).subscribe((favourite) => {
                this.favourites = favourite;
                console.log(this.favourites);
            });
            this.data.getComment(this.selectedFavouriteId).subscribe((comment) => {
                if (comment.length > 0) {
                    this.hasComment = true;
                    this.comments = comment;
                    console.log(this.comments);
                    //console.log(this.hasComment);
                }
                else {
                    this.hasComment = false;
                    //console.log(this.hasComment);
                }
            });
            this.data.getScore(this.selectedFavouriteId).subscribe((score) => {
                if (score.length > 0) {
                    this.hasScore = true;
                    this.scores = score;
                    console.log(this.scores);
                    //console.log(this.hasComment);
                }
                else {
                    this.hasScore = false;
                    //console.log(this.hasComment);
                }
            });
        });
    }
    deleteFavourite(favouriteId) {
        this.data.deleteFavourite(favouriteId).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/favouriteView']);
        });
    }
    deleteComment(commentId) {
        console.log(commentId);
        console.log(this.selectedFavouriteId);
        this.data.deleteComment(this.selectedFavouriteId, commentId).subscribe((res) => {
            this.comments = this.comments.filter(val => val._id !== commentId);
            this.hasComment = false;
            console.log(res);
        });
    }
};
FavouriteDetailsComponent = __decorate([
    Component({
        selector: 'app-favourite-details',
        templateUrl: './favourite-details.component.html',
        styleUrls: ['./favourite-details.component.scss']
    })
], FavouriteDetailsComponent);
export { FavouriteDetailsComponent };
//# sourceMappingURL=favourite-details.component.js.map