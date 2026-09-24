export interface TeamMember {
  name: string;
  role: string;
  category: "Founding Team" | "Core Engineering" | "Community & Ops" | "Creative & Brand";
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Arpit",
    role: "Founder & CEO",
    category: "Founding Team",
    bio: "Obsessed with creating high-velocity ecosystems where student developers transition from passive tutorial consumers into world-class product builders.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ashwin",
    role: "Co-Founder & CTO",
    category: "Founding Team",
    bio: "Architecting the technical infrastructure, developer tooling, and competitive hackathon systems that power Catalyst Crew's community initiatives.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Samriddhi",
    role: "Co-Founder & CCO (Chief Community Officer)",
    category: "Founding Team",
    bio: "Championing developer relations, member engagement, college chapters, and safe, vibrant peer learning environments across our digital and offline networks.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aviral",
    role: "Founding Member & COO (Chief Operations Officer)",
    category: "Founding Team",
    bio: "Leading logistics, brand partnerships, hackathon operational execution, and industry sponsorships with unmatched precision and speed.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kabir Mehta",
    role: "Head of Open Source",
    category: "Core Engineering",
    bio: "Directing open-source mentorship tracks, issue triaging, and code review sprints for university contributors.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    github: "https://github.com",
  },
  {
    name: "Meera Nair",
    role: "Developer Advocate",
    category: "Community & Ops",
    bio: "Hosting weekly technical workshops, builder office hours, and podcast conversations with engineering leaders.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohit Deshmukh",
    role: "Creative & Brand Design Lead",
    category: "Creative & Brand",
    bio: "Shaping the visual identity, editorial typography, merchandise aesthetics, and design tokens of Catalyst Crew.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    twitter: "https://x.com",
  },
  {
    name: "Zoya Khan",
    role: "Hackathon Ops Coordinator",
    category: "Community & Ops",
    bio: "Managing jury schedules, discord bot automations, and live mentor allocations during 48-hour build sprints.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    linkedin: "https://linkedin.com",
  },
];
