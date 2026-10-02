export interface TeamMember {
  name: string;
  role: string;
  level: "founder" | "co-founder" | "permanent" | "intern";
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Arpit Bajpai",
    role: "Founder",
    level: "founder",
    bio: "Obsessed with creating high-velocity ecosystems where student developers transition from passive tutorial consumers into world-class product builders.",
    avatar: "/Arpit.jpg",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Samriddhi Bansal",
    role: "Co-Founder",
    level: "co-founder",
    bio: "Championing developer relations, member engagement, college chapters, and safe, vibrant peer learning environments across our digital and offline networks.",
    avatar: "/Samriddhi.jpg",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ashwin Jauhary",
    role: "Co-Founder",
    level: "co-founder",
    bio: "Architecting the technical infrastructure, developer tooling, and competitive hackathon systems that power Catalyst Crew's community initiatives.",
    avatar: "/Ashwin.png",
    twitter: "https://x.com",
    github: "https://github.com/Ashwinjauhary",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aviral Mishra",
    role: "Co-Founder",
    level: "co-founder",
    bio: "Leading logistics, brand partnerships, hackathon operational execution, and industry sponsorships with unmatched precision and speed.",
    avatar: "/Aviral.jpg",
    twitter: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aryan Pandey",
    role: "Product & Strategic Growth Manager",
    level: "permanent",
    bio: "Driving product strategy, growth metrics, and go-to-market execution to scale Catalyst Crew's reach across Tier 1, 2, and 3 colleges nationwide.",
    avatar: "/Aryan.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vansh Agnihotri",
    role: "Sponsorship & Outreach Executive",
    level: "permanent",
    bio: "Building strategic brand partnerships, managing sponsor communications, and securing resources to fuel community events and hackathons.",
    avatar: "/Vansh.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Anurag Tiwari",
    role: "Creative Design Head",
    level: "permanent",
    bio: "Shaping the visual identity, editorial typography, merchandise aesthetics, and design systems that define the Catalyst Crew brand.",
    avatar: "/Anurag.jpg",
    twitter: "https://x.com",
  },
  {
    name: "Manikant Awasthi",
    role: "Full Stack Developer",
    level: "intern",
    bio: "Building and maintaining the Catalyst Crew web platform, internal tools, and hackathon infrastructure with modern full-stack technologies.",
    avatar: "/Manikant.jpg",
    github: "https://github.com",
  },
  {
    name: "Lavanya Sachan",
    role: "Creative Design Head",
    level: "intern",
    bio: "Supporting the design pipeline with event creatives, social media assets, and brand collateral that keeps the community engaged and excited.",
    avatar: "/Lavanya.jpg",
  },
  {
    name: "Riddhima Gupta",
    role: "Social Media Executive",
    level: "intern",
    bio: "Crafting engaging social media content, managing community channels, and amplifying Catalyst Crew's digital presence across platforms.",
    avatar: "/Riddhima.jpg",
    linkedin: "https://linkedin.com",
  },
];
