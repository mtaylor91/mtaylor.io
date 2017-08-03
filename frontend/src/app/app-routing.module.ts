import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
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
