import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
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
      { path: 'register', component: RegistrationComponent },
    );
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
    if (this.authenticateService.getUserId()){

      if (this.authenticateService.getUserId().length>0) {

        this.navbarService.updateLoginStatus(true);
        this.navbarService.clearAllItems();
        
      }else{
  
        this.navbarService.updateLoginStatus(false);  
        
      }
    }   

  }

  logout() {
    window.alert("Logout successful !");
    this.navbarService.updateLoginStatus(false);
    this.authenticateService.logoutOnClick();
  }
}
