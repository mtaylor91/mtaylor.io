import { Component, OnInit } from '@angular/core';

import { ResumeProjectSummary } from './resume-projects';
import { ResumeProjectsService } from './resume-projects.service';

@Component({
  selector: 'resume-projects',
  templateUrl: './resume-projects.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeProjectsComponent implements OnInit {
  projects: ResumeProjectSummary[]

  constructor(private service: ResumeProjectsService) {}

  ngOnInit() {
    this.projects = this.service.getProjects()
  }
}
