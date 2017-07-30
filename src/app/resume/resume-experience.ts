

export class ResumeExperiencePosition {
  name: string
  dates: string
}

export class ResumeExperienceEmployer {
  name: string
  positions: ResumeExperiencePosition[]
  responsibilities: string[]
}
