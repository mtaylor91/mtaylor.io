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
      text: "GitHub",
      target: "/github"
    },
    {
      text: "Resume",
      target: "/resume"
    },
    {
      text: "Contact",
      target: "/contact"
    }
  ];

  constructor(
    private colors: AppColorsService,
    private router: Router) {}

  navlinkBackground(link) {
    return this.colors.getColor("background",
      this.router.isActive(link.target, true));
  }

  navlinkColor(link) {
    return this.colors.getColor("foreground", true);
  }
}
