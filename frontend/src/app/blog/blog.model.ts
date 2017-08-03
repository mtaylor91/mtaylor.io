import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostComponent } from './blog-post.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule
  ],
})
export class BlogModel {}
