import { Component, Input } from '@angular/core';

import { BlogService } from './blog.service';
import { BlogPost } from './blog-post';


@Component({
  selector: 'blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css', './blog-post.component.css']
})
export class BlogEditorComponent {
  @Input() post: BlogPost
  @Input() errors: string[]

  constructor(private service: BlogService) {}

  save() {
    this.service.save(this.post);
  }
}
