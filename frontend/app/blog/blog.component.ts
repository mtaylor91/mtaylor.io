import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Converter } from 'showdown';

import { AppColorsService } from '../app-colors.service';
import { BlogPostsService } from './blog-posts.service';
import { BlogPost } from './blog-post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post: BlogPost
  posts: BlogPost[]
  content: SafeHtml
  loading: boolean
  editable: boolean

  private activeLink: string;
  private converter: Converter;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colors: AppColorsService,
    private service: BlogPostsService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loading = true;
    this.editable = false;
    this.posts = this.service.getPosts();
    this.converter = new Converter();
    this.converter.setOption('tables', true);

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('post')) {
        this.activeLink = "/blog/" + params.get('post');
      } else {
        this.activeLink = "/blog"
      }

      this.updatePost();
    })

    this.service.posts.subscribe(posts => {
      this.posts = posts;
      this.updatePost();
    });
  }

  createPost() {
    this.editable = true;
    this.setPost(new BlogPost({
      name: "Untitled Post",
      link: "/blog/untitled",
      content: "",
    }));
  }

  updatePost() {
    if (this.activeLink == "/blog") {
      if (this.posts.length > 0) {
        this.setPost(this.posts[0]);
      }
    } else {
      for (let post of this.posts) {
        if (this.activeLink == post.link) {
          this.setPost(post);
        }
      }
    }
  }

  setPost(post) {
    this.post = post;
    this.loading = false;

    if (!this.editable) {
      var html = this.converter.makeHtml(post.content);
      this.content = this.sanitizer.bypassSecurityTrustHtml(html);
    } else {
      this.content = post.content;
    }
  }

  setPostContent(text) {
    this.post.content = text;
  }

  toggleEditable() {
    this.editable = ! this.editable;
    this.setPost(this.post);
  }

  editableButtonText() {
    if (this.editable) {
      return "View";
    } else {
      return "Edit";
    }
  }

  navigationListColors() {
    return {
      'color': this.colors.foregroundComplement,
      'background-color': this.colors.backgroundComplement
    }
  }

  navigationPostColors(post) {
    var color;

    if (!this.loading && post.name == this.post.name) {
      return {'color': this.colors.foregroundComplement};
    } else {
      return {'color': this.colors.foregroundAccent};
    }
  }
}
