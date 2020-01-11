import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
