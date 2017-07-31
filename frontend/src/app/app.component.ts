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
      text: "Contact",
      target: "/contact"
    }
  ];

  constructor(
    private colors: AppColorsService,
    private router: Router) { }

  navStyle() {
    return {'width': "100%"};
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
      'display': 'inline-block',
      'margin': '0px',
      'padding': '20px',
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

  titleStyle() {
    return {
      'color': this.colors.foregroundPrimary,
      'padding': '20px',
      'margin': '0px',
      'font-family': 'Poiret One'
    };
  }

  sectionStyle(name) {
    var style = {};

    if (this.router.isActive("/", true)) {
      style['position'] = 'absolute';

      if (name == "top") {
        style['bottom'] = 0;
      } else if (name == "bottom") {
        style['top'] = 0;
      }
    } else {
      style['width'] = '100%';
      style['height'] = '100%';
    }

    return style;
  }

  sectionWrapperStyle(name) {
    var style = {
      'width': "100%"
    };

    if (this.router.isActive("/", true)) {
      style['height'] = "50%";
      style['position'] = "relative";
    }

    if (name == "top") {
      style['background-color'] = this.colors.backgroundPrimary;
    } else if (name == "bottom") {
      style['background-color'] = this.colors.backgroundComplement;
    }

    return style;
  }

  containerStyle() {
    return {
      'height': '100%',
      'background-color': this.colors.backgroundComplement
    };
  }
}
