import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppColorsService } from '../app-colors.service';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogPostComponent {
  title = "Test Post"

  constructor(
    private colors: AppColorsService,
    private router: Router) { }

  posts = [
    {
      name: "Test Post",
      link: '/blog/test'
    },
    {
      name: "Second Post",
      link: '/blog/second'
    },
    {
      name: "Programming",
      link: '/blog/programming'
    }
  ];

  postTitleStyle() {
    return {
      'margin': '0px',
      'padding': '0px'
    }
  }

  postContentStyle() {
    return {
      'top': 0,
      'left': 0,
      'width': '70%',
      'display': 'block',
      'position': 'absolute',
      'margin-left': '20px',
      'margin-right': '20px'
    }
  }

  navigationStyle() {
    return {
      'top': 0,
      'right': 0,
      'width': '30%',
      'display': 'block',
      'position': 'absolute',
      'color': this.colors.foregroundComplement,
      'background-color': this.colors.backgroundComplement
    }
  }

  navigationPostStyle(post) {
    var active = this.router.isActive(post.link, false);
    var color;

    if (active) {
      color = this.colors.foregroundComplement;
    } else {
      color = this.colors.foregroundAccent;
    }

    return {
      'color': color,
      'text-decoration': 'none'
    }
  }
}
