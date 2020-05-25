import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { NavbarService } from '../navbar.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private data: DataService, private authenticateService: AuthenticateService, private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
  }

  register(email: string, password: string) {
    this.authenticateService.register(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.navbarService.updateLoginStatus(true);
      this.navbarService.clearAllItems();
      window.alert( 'Sign up successful');
      this.router.navigate(['/bookSearch']);
    });
  }

  registerAccount(email: string, password: string){
    if (email.length > 0 && password.length > 7){

      this.data.checkEmailExists(email).subscribe((object: any) => {
        console.log(object);

        if (object.length>0) {
          window.alert('This email has benn used !');

        }else{
          this.register(email, password);
        }
      });

    }else{

      window.alert('Please enter the email and password, the length of password at least has 8 !');
    }
  }

  

}