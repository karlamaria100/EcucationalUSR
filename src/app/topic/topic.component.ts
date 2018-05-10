import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  public id:any;
  public topicDetails: any;
  public comments: any[] = [];
  public text: any;
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

  constructor(public shared: SharedService,public  route: ActivatedRoute, public router: Router) {
    if(localStorage.getItem('username'))
      this.shared.username = localStorage.getItem('username');
    else this.router.navigate(['/']);

    this.route.params.subscribe((params:Params)=>{
      this.id = params['topicId'];
    });

    this.shared.getTopicById(this.id).subscribe((value) => {
      this.topicDetails = value;
    })

    // this.shared.getCommentsForTopic(this.id).subscribe((value) => {
    //   this.comments = value;
    // })
  }

  ngOnInit() {
  }

  addComment() {
    var timeStampInMs = Date.now()
    console.log(Math.floor(timeStampInMs/1000));
    this.shared.addComment(this.shared.username, this.text, this.id, Math.floor(timeStampInMs/1000)).subscribe((value) => {
        this.text = null;

      var date = new Date(value.timestamp*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var month = date.getMonth();
      var day = date.getUTCDay();
      var year = date.getFullYear();

      // console.log(month + ' ' + day +' '+ year+' ')
      value.timestamp = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '  ' + day + ' '+this.months[month]+' '+year;
        this.comments.push(value);
    })
  }

  signOut() {
    localStorage.setItem('username',null);
    localStorage.setItem('type',null);
    this.router.navigate(['/']);
  }
}
