import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';

import { ResumeSkillsComponent } from './resume-skills.component';
import { ResumeSkillsService } from './resume-skills.service';

import { ResumeProjectsComponent } from './resume-projects.component';
import { ResumeProjectsService } from './resume-projects.service';

import { ResumeExperienceComponent } from './resume-experience.component';
import { ResumeExperienceService } from './resume-experience.service';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeSkillsComponent,
    ResumeProjectsComponent,
    ResumeExperienceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ResumeSkillsService,
    ResumeProjectsService,
    ResumeExperienceService
  ]
})
export class ResumeModel {}
