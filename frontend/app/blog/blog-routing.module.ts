import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent }    from './blog.component';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:post', component: BlogComponent },
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
