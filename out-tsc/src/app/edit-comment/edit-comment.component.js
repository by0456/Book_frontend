import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditCommentComponent = class EditCommentComponent {
    constructor(route, data, router) {
        this.route = route;
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.favouriteId = params.favouriteId;
            this.commentId = params.commentId;
        });
    }
    updateComment(comment) {
        console.log(this.favouriteId);
        console.log(this.commentId);
        console.log(comment);
        this.data.updateComment(this.favouriteId, this.commentId, comment).subscribe(() => {
            this.router.navigate(['/favouriteView', this.favouriteId]);
        });
    }
};
EditCommentComponent = __decorate([
    Component({
        selector: 'app-edit-comment',
        templateUrl: './edit-comment.component.html',
        styleUrls: ['./edit-comment.component.scss']
    })
], EditCommentComponent);
export { EditCommentComponent };
//# sourceMappingURL=edit-comment.component.js.map