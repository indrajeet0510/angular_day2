import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'msg-cmp',
  templateUrl: './message.component.html',
  styles: [
    ``
  ]
})
export class MessageComponent implements OnInit {
  public message: String;
  public name: String;

  constructor() {
    this.message = 'Hello World';
    this.name = 'Indra Jeet';
  }

  ngOnInit() {
    setTimeout(() => {
      this.message = 'Welcome to Deloitte';
      this.name = 'Ritwik';
    }, 5000);
  }

  public changeMessage() {
    this.message = 'Hi Guys!';
  }
}
