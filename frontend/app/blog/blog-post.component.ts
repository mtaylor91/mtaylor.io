import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Converter } from 'showdown';

import { BlogService } from './blog.service';
import { BlogPost } from './blog-post';


@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() post: BlogPost

  private converter: Converter

  constructor(
    private service: BlogService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.converter = new Converter();
    this.converter.setOption('tables', true);
  }

  content(): SafeHtml {
    var html = this.converter.makeHtml(this.post.content);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  loaded(): boolean {
    return !(this.post == null);
  }

  edit() {
    return this.service.edit();
  }
}
