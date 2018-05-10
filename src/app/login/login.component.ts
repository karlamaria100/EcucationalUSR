import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import { Router} from "@angular/router";
import {SharedStylesHost} from "@angular/platform-browser/src/dom/shared_styles_host";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public email:any;
  public password:any;

  constructor(private loginService: LoginService, private route: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.email);
    this.email = (<HTMLInputElement>document.getElementById('exampleInputEmail1')).value;
    this.password = (<HTMLInputElement>document.getElementById('exampleInputPassword1')).value;
    this.loginService.login(this.email, this.password).subscribe((value) => {
      if (value.type !== 'undefined') {
        if(value.type == 'Admin'){
          console.log(value);
          this.sharedService.username = value.username;
          localStorage.setItem('username',value.username);
          localStorage.setItem('type',value.type);
          this.route.navigate(['/admin']);
        }
        else if(value.type == 'User'){
          console.log(value);
          this.sharedService.username = value.username;
          localStorage.setItem('username',value.username);
          localStorage.setItem('type',value.type);
          this.route.navigate(['/home']);
        }
      }
    });
  }
}
