

export class ResumeExperiencePosition {
  name: string
  dates: string
  responsibilities: string[]
}

export class ResumeExperienceEmployer {
  name: string
  positions: ResumeExperiencePosition[]
}
