import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FavouriteViewComponent = class FavouriteViewComponent {
    constructor(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.favouriteId = params._id;
            console.log(params._id);
        });
        this.data.getFavourite().subscribe((favourite) => {
            this.favourites = favourite;
        });
    }
};
FavouriteViewComponent = __decorate([
    Component({
        selector: 'app-favourite-view',
        templateUrl: './favourite-view.component.html',
        styleUrls: ['./favourite-view.component.scss']
    })
], FavouriteViewComponent);
export { FavouriteViewComponent };
//# sourceMappingURL=favourite-view.component.js.map