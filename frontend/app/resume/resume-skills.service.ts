import { ResumeSkillGroup } from './resume-skills';

const GROUPS: ResumeSkillGroup[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Elixir" },
      { name: "Erlang" },
      { name: "Golang" },
      { name: "Python" },
      { name: "C/C++" },
      { name: "Java" },
      { name: "Bash" },
      { name: "Elm" },
      { name: "Javascript" }
    ]
  },
  {
    name: "Development Tooling",
    skills: [
      { name: "Git" },
      { name: "Vim" },
      { name: "Atom" },
      { name: "Sublime" },
      { name: "Eclipse" },
      { name: "Visual Studio" }
    ]
  },
  {
    name: "Operating Systems",
    skills: [
      { name: "Debian and derivatives" },
      { name: "RedHat and derivatives" },
      { name: "Misc. Linux (Arch, Gentoo, etc.)" },
      { name: "Mac OS X" },
      { name: "Windows" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQLite" }
    ]
  },
  {
    name: "Infrastructure",
    skills: [
      { name: "RunC" },
      { name: "SystemD" },
      { name: "ZFS" },
      { name: "Squid" },
      { name: "Exim4" }
    ]
  },
  {
    name: "Build and Test",
    skills: [
      { name: "Make" },
      { name: "ExUnit" },
      { name: "Mix" },
      { name: "Brunch" },
      { name: "Maven" },
      { name: "Gradle" }
    ]
  }
]

export class ResumeSkillsService {

  getSkillGroups(): ResumeSkillGroup[] {
    return GROUPS;
  }
}
