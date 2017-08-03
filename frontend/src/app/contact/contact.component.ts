import { Component, OnInit } from '@angular/core';

import { AppColorsService } from '../app-colors.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private colors: AppColorsService) { }

  ngOnInit() {
  }

  contactStyle() {
    return {
      'margin': '10px',
      'padding': '10px',
      'width': '100%',
      'display': 'flex',
      'flex-direction': 'column',
    }
  }

  nameInputStyle() {
    return {
      'width': '100%',
      'margin': '5px',
      'border': '2px',
      'padding': '2px',
      'box-sizing': 'border-box',
      'background-color': this.colors.backgroundComplement
    }
  }

  emailInputStyle() {
    return {
      'width': '100%',
      'margin': '5px',
      'border': '2px',
      'padding': '2px',
      'box-sizing': 'border-box',
      'background-color': this.colors.backgroundComplement
    }
  }

  messageInputStyle() {
    return {
      'width': '100%',
      'margin': '5px',
      'border': '2px',
      'padding': '2px',
      'resize': 'none',
      'box-sizing': 'border-box',
      'background-color': this.colors.backgroundComplement
    }
  }

}
