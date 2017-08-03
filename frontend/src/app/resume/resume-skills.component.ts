import { Component, OnInit } from '@angular/core';

import { ResumeSkillGroup } from './resume-skills';
import { ResumeSkillsService } from './resume-skills.service';

@Component({
  selector: 'resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeSkillsComponent implements OnInit {
  groups: ResumeSkillGroup[]

  constructor(private service: ResumeSkillsService) {}

  ngOnInit() {
    this.groups = this.service.getSkillGroups()
  }

  skillsStyle() {
    return {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'space-between'
    }
  }

  skillGroupStyle() {
    return {
      'min-width': '260px'
    }
  }
}
