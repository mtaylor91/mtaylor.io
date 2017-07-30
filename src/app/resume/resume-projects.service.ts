import { ResumeProjectSummary } from './resume-projects';

const PROJECTS: ResumeProjectSummary[] = [
  {
    name: "Testing Framework (Ericsson)",
    description: "Proprietary testing framework for components of a router OS",
    features: [
      "Test cases implemented in Python for rapid prototyping",
      "Provided ability for tests to impersonate arbitrary IPC endpoints",
      "Provided ability for tests to mock out the underlying C data-types",
      "Simplified testing by obviating the need to spin up service dependencies"
    ],
    technologies: [
      "C",
      "Python",
      "SWIG",
      "Proprietary IPC Library (C)"
    ]
  },
  {
    name: "Telecommunications Data-Entry Client",
    description: "Data entry client for completing responses for number porting requests",
    features: [
      "Read port requests from an SQL database and prepared them for processing by representatives",
      "Provided a streamlined UI for representatives to process port request orders",
      "Employed Selenium to load completed orders to the downstream service to circumvent access limitations"
    ],
    technologies: [
      "Java",
      "Swing",
      "Selenium",
      "MySQL"
    ]
  },
  {
    name: "Personal Media Management Solution",
    description: "Media storage solution, server and player",
    features: [
      "Redundant LVM/RAID storage array for media and backups",
      "Media playback with remote control",
      "Media sharing via NFS, SMBD, and UPNP"
    ],
    technologies: [
      "Linux",
      "VLC",
      "TCP",
      "Telnet",
      "Ruby on Rails"
    ]
  },
  {
    name: "Home Server/Workstation/Router",
    description: "Personal computer/server/router",
    features: [
      "Linux Hypervisor",
      "Native GPU performance on Desktop VMs",
      "Windows 10 Desktop VM",
      "Linux Mint Desktop VM",
      "Debian Linux Server VM",
      "NAT Firewall/Router",
      "Traffic Shaping",
      "Metrics and Monitoring",
      "Centralized log collection"
    ],
    technologies: [
      "Arch Linux",
      "Debian Linux",
      "QEMU",
      "VFIO",
      "SystemD",
      "FireHOL",
      "FireQOS",
      "Netdata",
      "FluentD",
      "Elasticsearch",
      "Kibana"
    ]
  }
]

export class ResumeProjectsService {
  getProjects(): ResumeProjectSummary[] {
    return PROJECTS;
  }
}
