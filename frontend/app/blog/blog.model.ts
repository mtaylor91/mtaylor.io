import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostsService } from './blog-posts.service';
import { BlogChannelService } from './blog-channel.service';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    BlogPostsService,
    BlogChannelService
  ]
})
export class BlogModel {}
