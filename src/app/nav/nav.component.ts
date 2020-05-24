import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  appTitle = 'Bookshop';
  hasLogin = false;
  authenticate: AuthenticateService;

  constructor(private authenticateService: AuthenticateService, private router: Router) {
    this.authenticate = authenticateService;
  }

  ngOnInit() {
    if (this.authenticate.hasLogin()) {
      this.hasLogin = true;
      console.log(this.hasLogin);
    } else {
      this.hasLogin = false;
      console.log(this.hasLogin);
    }

  }

  ngOnChanges() {
    this.hasLogin = true;
    console.log(this.hasLogin);
  }

  login() {
    
    this.router.navigate(['/login']);
  }

  logout() {
    this.hasLogin = false;
    console.log(this.hasLogin);
    this.authenticate.logout();
  }

}

