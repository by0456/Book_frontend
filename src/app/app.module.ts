import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    FavouriteViewComponent,
    FavouriteDetailsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
