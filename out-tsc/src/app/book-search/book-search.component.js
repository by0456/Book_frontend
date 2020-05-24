import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BookSearchComponent = class BookSearchComponent {
    constructor(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    addSearch(newSearch) {
        if (newSearch != '') {
            this.data.get(`${newSearch}`).subscribe(data => {
                this.books = data;
            });
        }
    }
    addFavourite(bid, title, description) {
        //console.log(bid+", "+title+", "+authors+", "+description);
        this.data.addFavourite(bid, title, description).subscribe((favourite) => {
            console.log(favourite);
        });
    }
};
BookSearchComponent = __decorate([
    Component({
        selector: 'app-book-search',
        templateUrl: './book-search.component.html',
        styleUrls: ['./book-search.component.scss']
    })
], BookSearchComponent);
export { BookSearchComponent };
//# sourceMappingURL=book-search.component.js.map