import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { ResumeSkillsComponent } from './resume-skills.component';
import { ResumeSkillsService } from './resume-skills.service';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeSkillsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ResumeSkillsService]
})
export class ResumeModel {}
