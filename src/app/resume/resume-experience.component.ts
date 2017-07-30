import { Component, OnInit } from '@angular/core';

import { ResumeExperienceEmployer } from './resume-experience';
import { ResumeExperienceService } from './resume-experience.service';

@Component({
  selector: 'resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeExperienceComponent implements OnInit {
  employers: ResumeExperienceEmployer[]

  constructor(private service: ResumeExperienceService) {}

  ngOnInit() {
    this.employers = this.service.getEmployers()
  }

  positionNameStyle(position) {
    return {
      'display': 'inline-block'
    }
  }

  positionDatesStyle(position) {
    return {
      'float': 'right',
      'display': 'inline-block'
    }
  }
}
