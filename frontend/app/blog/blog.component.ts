import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AppColorsService } from '../app-colors.service';
import { BlogService } from './blog.service';
import { BlogPost } from './blog-post';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post: BlogPost
  posts: BlogPost[]
  errors: string[]
  editor: boolean
  loading: boolean

  private link: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colors: AppColorsService,
    private service: BlogService) { }

  ngOnInit() {
    this.loading = true;
    this.editor = false;
    this.errors = [];
    this.posts = this.service.posts;

    this.service.subscribePost(post => {
      this.post = post;
      this.loading = false;
    })

    this.service.subscribePosts(posts => {
      this.posts = posts;
    });

    this.service.subscribeEditor(editor => {
      this.editor = editor;
    })

    this.service.subscribeSaved(saved => {
      if (saved) {
        this.router.navigateByUrl(this.service.link);
        this.errors = [];
      } else {
        this.errors = this.service.errors;
      }
    })

    // Subscribe to router parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Set the active link according to the route parameters
      if (params.has('post')) {
        this.link = "/blog/" + params.get('post');
      } else {
        this.link = "/blog"
      }
      // Activate the active link
      this.service.link = this.link;
      this.service.activate();
    })
  }

  createPost() {
    this.service.new();
    this.router.navigate(['/blog', 'untitled']);
  }

  showEditor(): boolean {
    return (!this.loading) && this.editor;
  }

  showContent(): boolean {
    return (!this.loading) && (!this.editor);
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
