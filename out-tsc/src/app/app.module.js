import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            BookSearchComponent,
            FavouriteViewComponent,
            FavouriteDetailsComponent,
            AddCommentComponent,
            EditCommentComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map