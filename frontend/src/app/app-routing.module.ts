import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: "resume", component: ResumeComponent }
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
