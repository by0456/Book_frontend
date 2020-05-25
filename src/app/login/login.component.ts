import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { DataService } from '../data.service';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  loginSuccessful = false;

  constructor(private data: DataService, private authenticateService: AuthenticateService, private router: Router, private navbarService: NavbarService) {
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {


    this.authenticateService.login(email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.loginSuccessful = true;
        this.navbarService.updateLoginStatus(true);
        this.navbarService.clearAllItems();
        window.alert('Login successful');
        this.router.navigate(['/']);

      }
      console.log(res);

    });
  }

  loginAccount(email: string, password: string) {
    if (email.length > 0 && password.length > 0) {

      this.data.checkUserExists(email, password).subscribe((object: any) => {
        if (object) {
          this.login(email, password);

        }else{
          window.alert('Account not exists !');
        }
      });
    } else {
      window.alert('Please enter the correct email and password !');
    }
  }


}
