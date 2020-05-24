import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
const routes = [
    { path: 'bookSearch', component: BookSearchComponent },
    { path: 'favouriteView', component: FavouriteViewComponent },
    { path: 'favouriteView/:favouriteId', component: FavouriteDetailsComponent },
    { path: 'favouriteView/:favouriteId/addComment', component: AddCommentComponent },
    { path: 'favouriteView/:favouriteId/editComment/:commentId', component: EditCommentComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map