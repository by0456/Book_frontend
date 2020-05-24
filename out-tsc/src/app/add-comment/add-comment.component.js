import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddCommentComponent = class AddCommentComponent {
    constructor(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.favouriteId = params.favouriteId;
        });
        console.log(this.favouriteId);
    }
    addComment(comment) {
        this.data.addComment(comment, this.favouriteId).subscribe((newBookComment) => {
            console.log(newBookComment);
            this.router.navigate(['../'], { relativeTo: this.route });
        });
    }
};
AddCommentComponent = __decorate([
    Component({
        selector: 'app-add-comment',
        templateUrl: './add-comment.component.html',
        styleUrls: ['./add-comment.component.scss']
    })
], AddCommentComponent);
export { AddCommentComponent };
//# sourceMappingURL=add-comment.component.js.map