import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit() {
  }

}
