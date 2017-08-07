import { Injectable } from '@angular/core';

import { BlogChannelService } from './blog-channel.service';
import { BlogPost } from './blog-post';
import { Observer, Observable } from 'rxjs';


@Injectable()
export class BlogService {
  link:     string
  post:     BlogPost
  posts:    BlogPost[]
  errors:   string[]
  editor:   boolean

  private postObservers: Observer<BlogPost>[];
  private postsObservers: Observer<BlogPost[]>[];
  private editorObservers: Observer<boolean>[];
  private savedObservers: Observer<boolean>[];

  constructor(
    private channel: BlogChannelService) {
    this.link = "/blog";
    this.posts = [];
    this.editor = false;
    this.postObservers = [];
    this.postsObservers = [];
    this.editorObservers = [];
    this.savedObservers = [];

    // Subscribe to post updates from backend
    this.channel.posts.subscribe(post => {
      this.updatePosts(post);
    })
  }

  updatePosts(post: BlogPost) {
    var index = this.posts.findIndex(p => p.id == post.id);

    if (index < 0) {
      this.posts.push(post);
    } else {
      this.posts[index] = post;
    }

    for (let observer of this.postsObservers) {
      observer.next(this.posts);
    }

    if (post.link == this.link) {
      this.activate()
    }
  }

  activate() {
    var activated = false;
    if (this.link == "/blog") {
      if (this.posts.length > 0) {
        this.post = this.posts[0];
        activated = true;
      }
    } else {
      for (let post of this.posts) {
        if (this.link == post.link) {
          this.post = post;
          activated = true;
        }
      }
    }

    if (activated) {
      for (let observer of this.postObservers) {
        observer.next(this.post);
      }
    } else {
      this.post = null;
    }
  }

  new() {
    this.post = new BlogPost({
      id: -1,
      name: "Untitled Post",
      link: "/blog/untitled",
      content: "",
    })
    this.posts = this.posts.filter(p => p.id > 0);
    this.updatePosts(this.post);
    this.edit();
  }

  edit() {
    this.editor = true;
    for (let observer of this.editorObservers) {
      observer.next(this.editor);
    }
  }

  save(post: BlogPost) {
    this.post = post;
    this.channel.save(post)
      .receive("ok", (result) => {
        this.post = new BlogPost(result);
        this.editor = false;
        this.errors = [];
        this.link = this.post.link;
        this.posts = this.posts.filter(p => p.id > 0);
        this.updatePosts(this.post);
        this.editorObservers.map(o => o.next(this.editor));
        this.savedObservers.map(o => o.next(true));
      })
      .receive("error", (error) => {
        this.errors = error.errors;
        this.savedObservers.map(o => o.next(false));
      })
      .receive("timeout", () => {
        this.errors = ["Save failed: timeout"];
        this.savedObservers.map(o => o.next(false));
      });
  }

  subscribePost(f) {
    return Observable.create((observer) => {
      this.postObservers.push(observer);
    }).subscribe(f);
  }

  subscribePosts(f) {
    return Observable.create((observer) => {
      this.postsObservers.push(observer);
    }).subscribe(f);
  }

  subscribeEditor(f) {
    return Observable.create((observer) => {
      this.editorObservers.push(observer);
    }).subscribe(f);
  }

  subscribeSaved(f) {
    return Observable.create((observer) => {
      this.savedObservers.push(observer);
    }).subscribe(f);
  }
}
