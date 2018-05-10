import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public username: string;
  public userData: any;

  constructor(public shared: SharedService, public route: ActivatedRoute, public router:Router) {
    if(localStorage.getItem('username'))
      this.shared.username = localStorage.getItem('username');
    else this.router.navigate(['/']);

    this.route.params.subscribe((params:Params)=>{
      this.username = params['username']
    });

    this.shared.getInfoAboutUser(this.username).subscribe((value) => {
      this.userData = value;
    })


    // this.shared.getCommentsForUser(this.username).subscribe((value) => {
    //   this.userData = value;
    // })
  }

  ngOnInit() {
  }

  signOut() {
    localStorage.setItem('username',null);
    localStorage.setItem('type',null);
    this.router.navigate(['/']);
  }
}
