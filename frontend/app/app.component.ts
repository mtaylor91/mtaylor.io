import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppColorsService } from './app-colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Mike Taylor';

  links = [
    {
      text: "Blog",
      target: "/blog"
    },
    {
      text: "Resume",
      target: "/resume"
    },
    {
      text: "GitHub",
      target: "https://github.com/mtaylor91"
    },
    {
      text: "LinkedIn",
      target: "https://www.linkedin.com/in/michael-taylor-2a766b43/"
    },
    {
      text: "Contact",
      target: "mailto:mike.charles.taylor@gmail.com"
    }
  ];

  constructor(
    private colors: AppColorsService,
    private router: Router) { }

  titleLinkStyle = {'text-decoration': 'none'};

  external(link):boolean {
    return link.target.startsWith('http') || link.target.startsWith('mailto:')
  }

  containerStyle() {
    return {
      'height': '100%',
      'display': 'flex',
      'flex-wrap': 'wrap',
      'flex-direction': 'column',
      'background-color': this.colors.backgroundComplement
    };
  }

  titleStyle(name) {
    var style = {
      'display': 'flex',
      'position': 'absolute'
    };

    if (this.router.isActive("/", true)) {
      if (name == "top") {
        style['bottom'] = 0;
      } else if (name == "bottom") {
        style['top'] = 0;
      }
    }

    return style;
  }

  titleHeadingStyle() {
    return {
      'color': this.colors.foregroundPrimary,
      'padding': '20px',
      'margin': '0px',
      'font-family': 'Poiret One'
    };
  }

  loginStyle() {
    return {
      'display': 'flex',
      'position': 'absolute',
      'right': 0
    }
  }

  navStyle() {
    return {
      'width': '100%',
      'display': 'flex',
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-direction': 'row'
    };
  }

  navlinkStyle(link) {
    var active = this.router.isActive(link.target, false);
    var color;

    if (active) {
      color = this.colors.backgroundComplement;
    } else {
      color = this.colors.backgroundComplement;
    }

    return {
      'margin': '0px',
      'padding': '20px',
      'flex-grow': 0,
      'flex-shrink': 0,
      'background-color': color
    };
  }

  navlinkHeadingStyle(link) {
    var active = this.router.isActive(link.target, false);
    var color;

    if (active) {
      color = this.colors.foregroundComplement;
    } else {
      color = this.colors.foregroundAccent;
    }

    return {
      'margin': '0px',
      'padding': '0px',
      'color': color,
      'font-family': 'Poiret One'
    };
  }

  sectionWrapperStyle(name) {
    var style = {
      'width': '100%',
      'display': 'flex',
      'position': 'relative',
      'flex-shrink': 0
    };

    if (this.router.isActive("/", true)) {
      style['height'] = "50%";
    } else {
      style['height'] = "5em";

      if (name == "top") {
        style['flex-grow'] = 0;
      } else {
        style['flex-grow'] = 100;
      }
    }

    if (name == "top") {
      style['background-color'] = this.colors.backgroundPrimary;
    } else if (name == "bottom") {
      style['background-color'] = this.colors.backgroundComplement;
    }

    return style;
  }

  sectionStyle(name) {
    var style = {
      'width': '100%',
      'display': 'flex',
      'flex-wrap': 'wrap',
    };

    if (name == 'bottom') {
      style['justify-content'] = 'center'
    } else if (name == 'top') {
      style['justify-content'] = 'left'
    }

    return style;
  }
}
