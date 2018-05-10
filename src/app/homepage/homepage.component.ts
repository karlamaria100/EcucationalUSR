import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public latestTopics: any[] = [];
  public comments: any[] = [];
  public allTopics: any[] = [];
  public todayTopics: any[] = [];
  public nume: any;
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
  constructor(public shared: SharedService, private route: Router) {
    if(localStorage.getItem('username'))
      this.shared.username = localStorage.getItem('username');
    else this.route.navigate(['/']);

    this.shared.getAllTopics().subscribe((value) => {
        this.latestTopics = Array.from(value);
        this.allTopics = value;
        this.latestTopics.sort(function(a,b){return b.timestamp - a.timestamp});
        this.latestTopics = this.latestTopics.slice(0,20);
        value.forEach((value)=>{
          // get today topics
          var date = new Date(value.timestamp*1000);
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();

          value.timestamp = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        })

    });
    console.log(this.shared.username);
    this.shared.getAllComments().subscribe((value) => {
        this.comments = value;
        this.comments.sort(function(a, b){return b.timestamp - a.timestamp});
        this.comments.slice(0,20);
      this.comments.forEach((value)=>{
        var date = new Date(value.timestamp*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var month = date.getMonth();
        var day = date.getDay();
        var year = date.getFullYear();

        // console.log(month + ' ' + day +' '+ year+' ')
        value.timestamp = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '  ' + day + ' '+this.months[month]+' '+year;
      })
    });
  }

  ngOnInit() {

  }

  openTopic(topic){
    this.route.navigate(['/'+topic.id+'/'+topic.topic_title.replace(' ','').toLowerCase()]);
  }


  openAddModal(id){
    const myModal = document.getElementById(id);
    myModal.style.visibility = 'true';
  }

  saveTopic(){
    console.log(this.nume);
    var timestamp = Math.floor(Date.now() / 1000);
    this.shared.addTopic(this.nume, timestamp, this.shared.username).subscribe((value) => {

      var date = new Date(value.timestamp*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();

      value.timestamp = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      var arr = Array.from(this.latestTopics);
      // if(arr.length == 20)
        arr.pop();
      arr.reverse();
      arr.push(value);
      this.latestTopics = arr.reverse();
      // this.latestTopics.push( value);
      // this.latestTopics.sort(function(a, b){return b.timestamp - a.timestamp})

      this.allTopics.push(value);
      const myModal = document.getElementById('addModal');
      myModal.style.visibility = 'false';
    })
  }

  signOut() {
    localStorage.setItem('username',null);
    localStorage.setItem('type',null);
    this.route.navigate(['/']);
  }
}
