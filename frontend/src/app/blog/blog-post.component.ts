import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AppColorsService } from '../app-colors.service';

import { BlogPost } from './blog-post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: BlogPost
  posts: BlogPost[]
  content: SafeHtml
  loading: boolean

  private selectedPostName: string;

  constructor(
    private http: HttpClient,
    private colors: AppColorsService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loading = true;
    this.posts = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedPostName = params.get('name');
      this.http.get('http://localhost:4000/api/blog/posts').subscribe(data => {
        this.posts = data["data"];
        for (let post of this.posts) {
          if (this.router.isActive(post.link, false)) {
            this.post = post;
            this.content = this.sanitizer
              .bypassSecurityTrustHtml(this.post.content);
            this.loading = false;
          }
        }
      });
    })
  }

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
