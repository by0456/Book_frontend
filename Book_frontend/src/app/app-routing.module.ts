import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent} from './book-search/book-search.component';
import { FavouriteViewComponent} from './favourite-view/favourite-view.component';
import { FavouriteDetailsComponent} from './favourite-details/favourite-details.component';
import { AddCommentComponent} from './add-comment/add-comment.component';
import { EditCommentComponent} from './edit-comment/edit-comment.component';
import { AddScoreComponent} from './add-score/add-score.component';
import { EditScoreComponent} from './edit-score/edit-score.component';
import { RegistrationComponent } from './registration/registration.component';
import { WebRequestInterceptor } from './web-request.interceptor';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/bookSearch', pathMatch: 'full' },
  { path: 'bookSearch', component:BookSearchComponent },
  { path: 'favouriteView', component:FavouriteViewComponent },
  { path: 'favouriteView/:favouriteId', component:FavouriteDetailsComponent },
  { path: 'favouriteView/:favouriteId/addComment', component:AddCommentComponent },
  { path: 'favouriteView/:favouriteId/editComment/:commentId', component:EditCommentComponent},
  { path: 'favouriteView/:favouriteId/addScore', component:AddScoreComponent },
  { path: 'favouriteView/:favouriteId/editScore/:bookScoreId', component:EditScoreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
