import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAccount(email:string, password:string){
    this.authenticateService.login(email, password).subscribe((res: HttpResponse<any>) => {

      if(res.status === 200){
        this.router.navigate(['/']);

      }
      console.log(res);
    });

  }

}
