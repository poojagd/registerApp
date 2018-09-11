import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   ngOnInit() {
     this.onLogout();
  }

  constructor(public loginService : LoginService, public http : HttpClient,public router:Router, private cookieService: CookieService){  
  }


  
  onLogout(){
    this.loginService.onLogout();
  }
}
