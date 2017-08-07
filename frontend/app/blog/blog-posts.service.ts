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
        this.updatePostInternal(post);
        observer.next(this._posts);
      })
    })
  }

  updatePost(post: BlogPost) {
    this.channel.push(post);
  }

  updatePostInternal(post: BlogPost) {
    var index = this._posts.findIndex(p => p.id == post.id);
    if (index < 0) {
      this._posts.push(post);
    } else {
      this._posts[index] = post;
    }
  }

  getPosts() {
    return this._posts;
  }
}
