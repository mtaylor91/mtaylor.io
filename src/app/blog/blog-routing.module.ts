import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPostComponent }    from './blog-post.component';

const blogRoutes: Routes = [
  { path: 'blog', redirectTo: 'blog/test' },
  { path: 'blog/:post', component: BlogPostComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
