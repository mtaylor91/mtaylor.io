import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: "blog", component: BlogComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
