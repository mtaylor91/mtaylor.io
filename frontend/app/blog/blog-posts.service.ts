import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogChannelService } from './blog-channel.service';
import { BlogPost } from './blog-post';


@Injectable()
export class BlogPostsService {
  private _posts: BlogPost[];
  posts: Observable<BlogPost[]>;

  constructor(private channel: BlogChannelService) {
    this._posts = []
    this.posts = Observable.create(observer => {
      this.channel.posts.subscribe(post => {
        var index = this._posts.findIndex(p => p.name == post.name);
        if (index < 0) {
          this._posts.push(post);
        } else {
          this._posts[index] = post;
        }
        observer.next(this._posts);
      })
    })
  }

  getPosts() {
    return this._posts;
  }
}
