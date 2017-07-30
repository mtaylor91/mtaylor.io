import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';

import { ResumeSkillsComponent } from './resume-skills.component';
import { ResumeSkillsService } from './resume-skills.service';

import { ResumeProjectsComponent } from './resume-projects.component';
import { ResumeProjectsService } from './resume-projects.service';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeSkillsComponent,
    ResumeProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ResumeSkillsService,
    ResumeProjectsService
  ]
})
export class ResumeModel {}
