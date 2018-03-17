import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDeshboardComponent implements OnInit {

  studenti: any[] = [];
  constructor() {
    this.studenti.push({id: 1, username: "karla"});
    this.studenti.push({id: 2, username: "rares"});
  }

  ngOnInit() {
  }

}
