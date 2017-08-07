import { Injectable } from '@angular/core';
import { Channel } from 'phoenix';
import { Observable } from 'rxjs';

import { BlogPost } from './blog-post';
import { SocketService } from '../socket.service';


@Injectable()
export class BlogChannelService {
  private channel: Channel;
  posts: Observable<BlogPost>;

  constructor(private socket: SocketService) {
    this.channel = this.socket.channel("blog:*", {});
    this.posts = Observable.create(observer => {
      this.channel.on("update", data => {
        observer.next(new BlogPost(data));
      });
    });
    this.channel.join()
      .receive("ok", (messages) => {
        console.log("Joined blog channel", messages);
      })
      .receive("error", (reason) => {
        console.log("Failed to join blog channel", reason)
      })
      .receive("timeout", () => {
        console.log("Networking issue. Still waiting...")
      })
  }

  save(post: BlogPost) {
    return this.channel.push("save", post);
  }
}
