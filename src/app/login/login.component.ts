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

  constructor(private loginService: LoginService, private route: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  doLogin() {
    this.route.navigate(['/admin']);
    // this.loginService.login(username, password).forEach((value) => {
    //   if (value.status === 'ACCEPTED') {
    //     this.route.navigate(['/admin']);
    //     this.sharedService.userData.username = value.username;
    //     this.sharedService.userData.email = value.email;
    //   }
    // });
  }
}
