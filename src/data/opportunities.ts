export interface Opportunity {
  id: string;
  title: string;
  company: string;
  category: "Internship" | "Full-time" | "Grant" | "Fellowship" | "Open Source" | "Campus";
  location: string;
  type: "Remote" | "Hybrid" | "On-site";
  stipendOrSalary: string;
  deadline: string;
  skills: string[];
  description: string;
  applyUrl: string;
  featured: boolean;
}

export const opportunitiesData: Opportunity[] = [
  {
    id: "opp-1",
    title: "Systems Software Engineer Intern (Rust / Go)",
    company: "CloudMesh Distributed",
    category: "Internship",
    location: "Bengaluru, India",
    type: "Hybrid",
    stipendOrSalary: "₹45,000 / month",
    deadline: "October 15, 2026",
    skills: ["Rust", "Go", "Distributed Systems", "Linux"],
    description:
      "Join the core network proxy team to build high-throughput eBPF telemetry pipelines and low-latency packet routing daemons.",
    applyUrl: "https://careers.catalystxcrew.in/cloudmesh-systems",
    featured: true,
  },
  {
    id: "opp-2",
    title: "AI Agent Engineering Fellow (Fall 2026)",
    company: "Catalyst Research Lab",
    category: "Fellowship",
    location: "Global",
    type: "Remote",
    stipendOrSalary: "₹1,20,000 Total Grant + Mentorship",
    deadline: "October 25, 2026",
    skills: ["Python", "LangChain", "OpenAI / Claude APIs", "Vector DBs"],
    description:
      "A 12-week funded cohort for student researchers building autonomous agent architectures with real-world tool use capabilities.",
    applyUrl: "https://fellowships.catalystxcrew.in/ai-agent-2026",
    featured: true,
  },
  {
    id: "opp-3",
    title: "Fullstack Product Engineer (Founding Team)",
    company: "Kairo Tools",
    category: "Full-time",
    location: "Bengaluru, India",
    type: "Remote",
    stipendOrSalary: "₹14 - 20 LPA + Equity",
    deadline: "November 01, 2026",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    description:
      "Own the entire web app surface for our collaborative developer documentation and interactive API testing workbench.",
    applyUrl: "https://careers.catalystxcrew.in/kairo-founding-eng",
    featured: true,
  },
  {
    id: "opp-4",
    title: "Open Source Contributor Stipend (Season 4)",
    company: "HyperScale Foundation",
    category: "Open Source",
    location: "Global",
    type: "Remote",
    stipendOrSalary: "$1,500 Micro-Grant",
    deadline: "October 30, 2026",
    skills: ["Rust", "WebAssembly", "C++", "Technical Writing"],
    description:
      "Solve curated open issues across the WebAssembly runtime repository under 1-on-1 guidance of core maintainers.",
    applyUrl: "https://hyperscale.org/grants",
    featured: false,
  },
  {
    id: "opp-5",
    title: "Campus Lead & Community Evangelist",
    company: "Catalyst Crew Chapters",
    category: "Campus",
    location: "Tier 1 & Tier 2 Engineering Colleges",
    type: "Remote",
    stipendOrSalary: "Exclusive Swag + Travel Sponsorship + Bounties",
    deadline: "Rolling Admissions",
    skills: ["Leadership", "Public Speaking", "Event Organizing", "Git"],
    description:
      "Lead the Catalyst Crew builder chapter on your college campus. Organize monthly build nights, hackathons, and study groups.",
    applyUrl: "https://chapters.catalystxcrew.in/apply",
    featured: false,
  },
  {
    id: "opp-6",
    title: "Backend Microservices Intern",
    company: "Veloce Payments",
    category: "Internship",
    location: "Mumbai / Remote",
    type: "Remote",
    stipendOrSalary: "₹35,000 / month",
    deadline: "November 10, 2026",
    skills: ["Go", "gRPC", "Docker", "Kafka"],
    description:
      "Work on high-concurrency transaction reconciliation engines and payment gateway webhooks processing millions in daily volume.",
    applyUrl: "https://careers.catalystxcrew.in/veloce-intern",
    featured: false,
  },
];
