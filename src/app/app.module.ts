import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FavouriteDetailsComponent } from './favourite-details/favourite-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { AddScoreComponent } from './add-score/add-score.component';
import { EditScoreComponent } from './edit-score/edit-score.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WebRequestInterceptor } from './web-request.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    FavouriteViewComponent,
    FavouriteDetailsComponent,
    AddCommentComponent,
    EditCommentComponent,
    AddScoreComponent,
    EditScoreComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent,
    FavouriteViewComponent,
    RegistrationComponent
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
