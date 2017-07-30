import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostComponent } from './blog-post.component';
import { BlogPostService } from './blog-post.service';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule
  ],
  providers: [BlogPostService]
})

export class BlogModel {}
