import { ResumeExperienceEmployer } from './resume-experience';

const EMPLOYERS: ResumeExperienceEmployer[] = [
  {
    name: "Synopsys",
    positions: [
      {
        name: "Senior Software Engineer I",
        dates: "2017/07 - Present"
      },
      {
        name: "Software Engineer II",
        dates: "2016/07 - 2017/07"
      },
      {
        name: "Software Engineer I",
        dates: "2015/07 - 2016/06"
      },
      {
        name: "Junior Software Engineer",
        dates: "2014/07 - 2015/07"
      }
    ],
    responsibilities: [
      "Developed infrastructure and tools to improve automation and monitoring of AWS cloud environments.",
      "Carried out deploys, upgrades, maintenance, debugging, and various other operational tasks as required."
    ]
  },
  {
    name: "Best Buy (Geek Squad)",
    positions: [
      {
        name: "Technical Support Agent",
        dates: "2013/10 - 2014/07"
      }
    ],
    responsibilities: [
      "Provided Remote Desktop Assistance to Geek Squad customers; performing virus removals, setup/troubleshooting of software and peripherals, and other tasks as required."
    ]
  },
  {
    name: "Shaw",
    positions: [
      {
        name: "Carrier Services Representative",
        dates: "2012/04 - 2012/08"
      },
      {
        name: "Technical Support Representative",
        dates: "2011/10 - 2012/04"
      }
    ],
    responsibilities: [
      "Processed telephone service porting orders submitted by other carriers on behalf of customers in accordance with Local Number Portability guidelines set forth by the CRTC.",
      "Developed a tool to automate several unnecessary manual steps in the existing process, significantly increasing throughput.",
      "Provided phone support for Shaw's cable television, phone, and internet services.",
      "Developed a reputation for solving tough problem and often took escalations from teammates."
    ]
  },
  {
    name: "Ericsson",
    positions: [
      {
        name: "Software Engineering Co-op",
        dates: "2011/01 - 2011/08"
      }
    ],
    responsibilities: [
      "Assisted with writing tests for several Unix daemons implemented in C.",
      "Co-developed a testing framework and IPC harness which greatly increased the ease and speed of iterating on unit tests."
    ]
  }
]

export class ResumeExperienceService {
  getEmployers(): ResumeExperienceEmployer[] {
    return EMPLOYERS;
  }
}
