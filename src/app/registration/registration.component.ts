import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
  }

  registerAccount(email: string, password: string) {
    this.authenticateService.register(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.navbarService.updateLoginStatus(true);
      this.navbarService.clearAllItems();
      this.router.navigate(['/bookSearch']);
    });
  }

}