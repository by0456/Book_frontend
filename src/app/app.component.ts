import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { LoginComponent } from './login/login.component';
import { NavbarService } from './navbar.service';
import { AuthenticateService } from 'src/app/authenticate.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookFrontEnd';

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;
 
  constructor(private authenticateService: AuthenticateService, private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'favouriteView', component: FavouriteViewComponent },
    );
  }
 
  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }
 
  logout() {
    this.navbarService.updateLoginStatus(false);
    this.authenticateService.logoutOnClick();
  }
}
