import { map } from 'rxjs/operators';
import { loginUser } from './loginUser';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   ngOnInit() {
  }
  email : String;
  password : String;
  LoggedInUser = {} as loginUser;
  token : string;
    
  constructor(public loginService : LoginService,public http : HttpClient,public router:Router, private cookieService: CookieService){  
  }
  onLogin(){
    
    this.LoggedInUser.email = this.email; 
    this.LoggedInUser.password = this.password;
    this.loginService.authenticate(this.LoggedInUser)
    .subscribe(
    (response) => {
          console.log(response);
          this.token = response.token;
           localStorage.setItem('token', response.token);
          this.cookieService.set('token',response.token);
          this.loginService.token = response.headers;
          this.router.navigate(['dashboard']);
       },
      err => {
        console.log(err); 
      });
  }
  onhome(){
    this.router.navigate(['home']);
  }
  
}
