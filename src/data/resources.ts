export interface ResourceItem {
  id: string;
  title: string;
  category: "Hackathon Guides" | "Starter Kits" | "Roadmaps" | "Developer Tools" | "Project Ideas";
  description: string;
  tags: string[];
  link: string;
  isExternal?: boolean;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "The Zero-BS 48-Hour Hackathon Survival Playbook",
    category: "Hackathon Guides",
    description:
      "A battle-tested blueprint on scoping MVPs, avoiding feature creep, managing sleep shifts, and delivering a killer 3-minute live jury demo.",
    tags: ["Hackathon", "Pitching", "Project Scoping"],
    link: "https://github.com/catalyst-crew/hackathon-playbook",
    isExternal: true,
  },
  {
    id: "res-2",
    title: "Next.js + Tailwind + TypeScript Hackathon Boilerplate",
    category: "Starter Kits",
    description:
      "Pre-configured with authentication, dark mode tokens, Lucide icons, Supabase client, and ready-to-deploy Cloudflare/Vercel settings.",
    tags: ["Next.js", "Template", "React", "Tailwind"],
    link: "https://github.com/catalyst-crew/nextjs-hack-starter",
    isExternal: true,
  },
  {
    id: "res-3",
    title: "Autonomous Agentic AI Starter Kit (Python & TypeScript)",
    category: "Starter Kits",
    description:
      "Ready-to-run template with LangGraph swarms, Tool Call definitions, persistent memory vector store, and streaming frontend hooks.",
    tags: ["AI", "Agents", "Python", "TypeScript"],
    link: "https://github.com/catalyst-crew/agentic-starter",
    isExternal: true,
  },
  {
    id: "res-4",
    title: "Systems Engineering & Rust Career Roadmap 2026",
    category: "Roadmaps",
    description:
      "From basic C/C++ memory models to production Rust, OS primitives, async runtime design, and Linux kernel programming.",
    tags: ["Rust", "Systems", "Linux", "Career"],
    link: "/blog/systems-engineering-roadmap",
    isExternal: false,
  },
  {
    id: "res-5",
    title: "Curated Free Developer Tools & Cloud Credits Directory",
    category: "Developer Tools",
    description:
      "Over $20,000 in student packs, free serverless hosting tiers, free LLM API allowances, and database providers vetted for builders.",
    tags: ["DevTools", "Free Tier", "Hosting"],
    link: "https://github.com/catalyst-crew/free-dev-tools",
    isExternal: true,
  },
  {
    id: "res-6",
    title: "50 Non-Trivial Capstone Project Ideas for Engineering Students",
    category: "Project Ideas",
    description:
      "No more generic todo lists or weather apps. 50 real-world problem statements across distributed databases, developer tools, and privacy.",
    tags: ["Ideas", "Portfolio", "College Projects"],
    link: "/blog/50-real-project-ideas",
    isExternal: false,
  },
];
