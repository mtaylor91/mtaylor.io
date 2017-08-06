import { Component } from '@angular/core';

import { AppColorsService } from './app-colors.service';
import { AppBackendService } from './app-backend.service';

@Component({
  selector: 'app-login',
  templateUrl: 'app-login.component.html'
})
export class AppLoginComponent {
  constructor(
    private api: AppBackendService,
    private colors: AppColorsService) { }

  showControls = false
  loggedIn = false
  usernameInput = ""
  passwordInput = ""

  attemptLogin() {
    var params = {};
    var data = JSON.stringify(params);
    this.api.put('/login/token', data)
      .subscribe(response => {
        this.loggedIn = true
        this.usernameInput = ""
        this.passwordInput = ""
        console.log(response)
      })
  }

  attemptLogout() {
    this.loggedIn = false
  }

  showLoginControls() {
    this.showControls = true;
  }

  hideLoginControls() {
    this.showControls = false;
  }

  style() {
    return {
      'display': 'block',
      'position': 'relative',
    }
  }

  buttonStyle() {
    return {
      'border': 'none',
      'margin': '0px',
      'outline': 'none',
      'background': 'none',
      'font-size': '1em',
      'font-family': 'Poiret One',
      'padding-top': '1em',
      'padding-bottom': '1em',
      'padding-left': '0.5em',
      'padding-right': '0.5em',
      'color': this.colors.foregroundAccent
    }
  }

  usernameInputStyle() {
    return {
      'font-size': '0.75em',
      'font-family': 'Poiret One',
      'position': 'relative',
      'border': 'none',
      'outline': 'none',
      'padding-top': '0.25em',
      'padding-bottom': '0.25em',
      'padding-left': '0.5em',
      'padding-right': '0.5em',
      'background': 'none',
      'color': this.colors.foregroundAccent
    }
  }

  passwordInputStyle() {
    return {
      'font-size': '0.75em',
      'font-family': 'Poiret One',
      'position': 'relative',
      'border': 'none',
      'outline': 'none',
      'padding-top': '0.25em',
      'padding-bottom': '0.25em',
      'padding-left': '0.5em',
      'padding-right': '0.5em',
      'background': 'none',
      'color': this.colors.foregroundAccent
    }
  }
}
