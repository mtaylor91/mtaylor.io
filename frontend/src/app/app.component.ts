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
      target: "/contact"
    }
  ];

  constructor(
    private colors: AppColorsService,
    private router: Router) { }

  navStyle = {'width': "100%"};

  titleLinkStyle = {'text-decoration': 'none'};

  containerStyle() {
    return {
      'height': '100%',
      'background-color': this.colors.backgroundComplement
    };
  }

  titleStyle(name) {
    var style = {
      'display': 'inline-block',
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
      'display': 'inline-block',
      'position': 'absolute',
      'right': 0
    }
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

  sectionWrapperStyle(name) {
    var style = {
      'width': '100%',
      'display': 'block',
      'position': 'relative'
    };

    if (this.router.isActive("/", true)) {
      style['height'] = "50%";
    } else {
      style['height'] = "5em";
    }

    if (name == "top") {
      style['background-color'] = this.colors.backgroundPrimary;
    } else if (name == "bottom") {
      style['background-color'] = this.colors.backgroundComplement;
    }

    return style;
  }

  sectionStyle() {
    var style = {
      'width': '100%',
      'height': '100%'
    };

    return style;
  }
}
