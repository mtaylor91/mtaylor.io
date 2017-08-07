import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post.component';
import { BlogEditorComponent } from './blog-editor.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogChannelService } from './blog-channel.service';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogEditorComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    BlogChannelService,
    BlogService
  ]
})
export class BlogModel {}
