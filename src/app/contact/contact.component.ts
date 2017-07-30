import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactStyle() {
    return {
      'margin': '10px',
      'padding': '10px'
    }
  }

  nameInputStyle() {
    return {
      'margin': '5px',
      'border': '2px',
      'padding': '2px'
    }
  }

  emailInputStyle() {
    return {
      'margin': '5px',
      'border': '2px',
      'padding': '2px'
    }
  }

  messageInputStyle() {
    return {
      'margin': '5px',
      'border': '2px',
      'padding': '2px',
      'resize': 'none'
    }
  }

}
