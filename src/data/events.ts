export interface Event {
  slug: string;
  title: string;
  tagline: string;
  status: "upcoming" | "live" | "ended";
  category: "Hackathon" | "Workshop" | "Challenge" | "Competition";
  date: string;
  time: string;
  mode: "Online" | "In-Person" | "Hybrid";
  location: string;
  eligibility: string;
  teamSize: string;
  prize: string;
  registrationUrl: string;
  image: string;
  description: string;
  about: string;
  whyParticipate: string[];
  problemStatements: {
    title: string;
    description: string;
    tags: string[];
  }[];
  timeline: {
    phase: string;
    date: string;
    description: string;
  }[];
  rounds: {
    name: string;
    duration: string;
    description: string;
  }[];
  prizesBreakdown: {
    rank: string;
    amount: string;
    perks: string;
  }[];
  judgingCriteria: {
    title: string;
    weight: string;
    description: string;
  }[];
  rules: string[];
  mentors: {
    name: string;
    role: string;
    org: string;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const eventsData: Event[] = [
  {
    slug: "catalyst-hack-2026",
    title: "Catalyst Hack 2026: Genesis",
    tagline: "48-Hour National Flagship Hackathon for Bold Builders",
    status: "upcoming",
    category: "Hackathon",
    date: "October 18 - 20, 2026",
    time: "Starts 6:00 PM IST",
    mode: "Hybrid",
    location: "Bengaluru Tech Hub & Discord",
    eligibility: "Open to all college students & early-career developers",
    teamSize: "2 - 4 Builders",
    prize: "₹1,50,000 + Grants & Cloud Credits",
    registrationUrl: "https://unstop.com",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Our premier 48-hour build sprint bringing together the most relentless developers, designers, and systems architects to ship real-world products in AI, Web3, and Open Infrastructure.",
    about:
      "Catalyst Hack Genesis isn't another pitch deck competition. We strictly evaluate working code, deployed prototypes, and real architecture. Whether you're building agentic AI workflows, decentralized micro-economies, or high-performance developer tools, this is your launchpad.",
    whyParticipate: [
      "Ship a production-grade product in 48 intense hours with peers.",
      "1-on-1 direct access to top engineering mentors and founders.",
      "Cash pool of ₹1,50,000 distributed among top 3 teams and track winners.",
      "Fast-track interview opportunities with our partner startups & dev-tool sponsors.",
      "Exclusive swag packs, custom mechanical keyboard accessories, and verified builder badges.",
    ],
    problemStatements: [
      {
        title: "Autonomous Developer Productivity Agents",
        description:
          "Build autonomous agents that index local workspaces, resolve pull requests, auto-generate deterministic tests, or orchestrate multi-modal code review pipelines.",
        tags: ["LLMs", "DevTools", "TypeScript", "Python"],
      },
      {
        title: "Decentralized Trust & Micro-Payment Protocols",
        description:
          "Design zero-latency micropayment primitives or verifiable credentials for open developer collaboration and bounty settlement.",
        tags: ["Web3", "Solidity", "Rust", "Cryptography"],
      },
      {
        title: "Next-Gen Local-First Collaborative Software",
        description:
          "Create resilient, offline-capable productivity tools using CRDTs (Conflict-free Replicated Data Types) and peer-to-peer sync protocols.",
        tags: ["CRDT", "WebSockets", "React", "WASM"],
      },
    ],
    timeline: [
      { phase: "Registrations Open", date: "Sep 25, 2026", description: "Team registration & initial idea briefing on Unstop." },
      { phase: "Team Formation & Warm-up", date: "Oct 12, 2026", description: "Discord matchmaking sessions and mentor AMAs." },
      { phase: "Hackathon Kickoff", date: "Oct 18, 2026 (6:00 PM)", description: "Opening ceremony, problem release, hacking starts." },
      { phase: "Mid-way Architecture Review", date: "Oct 19, 2026 (12:00 PM)", description: "Mentors review repo architectures and give feedback." },
      { phase: "Submission & Demos", date: "Oct 20, 2026 (6:00 PM)", description: "Code freeze, live demos, and jury deliberation." },
    ],
    rounds: [
      {
        name: "Round 1: Architecture Proposal",
        duration: "Online Screening",
        description: "Submit a 1-page architecture breakdown, tech stack justification, and Github team roster.",
      },
      {
        name: "Round 2: 48-Hour Live Build Sprint",
        duration: "48 Hours",
        description: "Intense coding sprint with hourly commit milestones and mentor checkpoints.",
      },
      {
        name: "Grand Finale: Demo Day & Jury Pitch",
        duration: "3 Hours",
        description: "Top 10 teams pitch working software live to industry judges and VC investors.",
      },
    ],
    prizesBreakdown: [
      { rank: "Overall Winner (1st Place)", amount: "₹75,000", perks: "Cloud credits ($5,000), incubation fast-track, hardware perks." },
      { rank: "1st Runner Up", amount: "₹40,000", perks: "Cloud credits ($2,500), founder mentorship sessions, custom swag." },
      { rank: "2nd Runner Up", amount: "₹20,000", perks: "Cloud credits ($1,000), exclusive developer tool subscriptions." },
      { rank: "Best Agentic AI Build", amount: "₹15,000", perks: "Special track award sponsored by AI partner." },
    ],
    judgingCriteria: [
      { title: "Technical Complexity & Execution", weight: "35%", description: "Code quality, architecture resilience, and use of modern patterns." },
      { title: "Functionality & Working Prototype", weight: "30%", description: "Does the demo actually work live without pre-baked mockups?" },
      { title: "Originality & Problem Relevance", weight: "20%", description: "Is this solving an authentic, high-friction pain point?" },
      { title: "UI/UX & Developer Ergonomics", weight: "15%", description: "Intuitive interface, clean typography, responsive design." },
    ],
    rules: [
      "All code must be written during the 48-hour hacking window. Pre-built templates require disclosure.",
      "Open-source libraries and APIs are fully encouraged; plagarism results in immediate disqualification.",
      "Teams must consist of 2 to 4 eligible members with verified GitHub accounts.",
      "Every project must feature a public GitHub repo with a comprehensive README and deploy link.",
    ],
    mentors: [
      { name: "Ashwin S.", role: "Co-Founder & CTO", org: "Catalyst Crew", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
      { name: "Neha Verma", role: "Staff AI Engineer", org: "HyperScale AI", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
      { name: "Rohan Nair", role: "Principal Architect", org: "Kernel Distributed", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
    ],
    faqs: [
      { question: "Is there any registration fee?", answer: "No, Catalyst Hack is completely free for all verified participants." },
      { question: "Can I participate if I don't have a team yet?", answer: "Yes! Once you register, join our Discord server where we host structured team-formation rooms." },
      { question: "Can beginners participate?", answer: "Absolutely. We provide dedicated mentor hours and workshops to help first-time hackathon attendees." },
    ],
  },
  {
    slug: "rust-systems-bootcamp",
    title: "Rust Systems Deep Dive: Zero to Kernel",
    tagline: "4-Week Intensive Systems Engineering Series",
    status: "upcoming",
    category: "Workshop",
    date: "November 05 - 26, 2026",
    time: "Every Saturday 11:00 AM IST",
    mode: "Online",
    location: "Live Stream + Private Workspace",
    eligibility: "Developers with intermediate programming experience",
    teamSize: "Individual",
    prize: "Certificates of Mastery + Bounty Pool",
    registrationUrl: "https://unstop.com",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Master memory safety, concurrency, async runtimes, and low-level networking in Rust. Built for developers eager to move beyond scripting languages into systems engineering.",
    about:
      "A hands-on, project-heavy masterclass. You will implement an in-memory key-value database, a custom async task executor, and a high-throughput HTTP/TCP proxy from raw sockets.",
    whyParticipate: [
      "Understand the Rust memory model: Borrow checker, lifetimes, and unsafe boundaries.",
      "Build 3 non-trivial systems projects from scratch for your portfolio.",
      "Code reviews conducted by production systems engineers.",
    ],
    problemStatements: [
      {
        title: "Mini-Redis In-Memory Engine",
        description: "Implement a thread-safe RESP-compliant key-value cache with LRU eviction.",
        tags: ["Rust", "Concurrency", "Networking"],
      },
    ],
    timeline: [
      { phase: "Week 1", date: "Nov 05", description: "Ownership, Borrowing, Structs & Traits deep-dive." },
      { phase: "Week 2", date: "Nov 12", description: "Concurrency, Channels, Mutexes, and Multi-threading." },
      { phase: "Week 3", date: "Nov 19", description: "Async Rust, Tokio internals, and custom futures." },
      { phase: "Week 4", date: "Nov 26", description: "Final capstone project submission & code audits." },
    ],
    rounds: [
      { name: "Phase 1: Foundations", duration: "1 Week", description: "Idiomatic Rust code and borrow checker fluency." },
      { name: "Phase 2: Network Primitives", duration: "2 Weeks", description: "Socket programming and asynchronous I/O." },
      { name: "Phase 3: Capstone Defense", duration: "1 Week", description: "Live demonstration of performance benchmarks." },
    ],
    prizesBreakdown: [
      { rank: "Top Capstone Award", amount: "₹20,000", perks: "Full Rust book bundle, sponsored conference ticket." },
    ],
    judgingCriteria: [
      { title: "Benchmarked Throughput", weight: "40%", description: "RPS and memory footprint under high concurrency." },
      { title: "Idiomatic Architecture", weight: "40%", description: "Clean usage of error handling, traits, and zero-cost abstractions." },
      { title: "Documentation & Test Suite", weight: "20%", description: "Unit tests, integration tests, and fuzzing." },
    ],
    rules: [
      "Assignments must compile on stable Rust 1.82+ without unchecked warnings.",
      "All submissions must pass automated criterion benchmarks.",
    ],
    mentors: [
      { name: "Aditya Roy", role: "Systems Engineer", org: "CloudMesh", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
    ],
    faqs: [
      { question: "Do I need prior Rust experience?", answer: "No, but you should know at least one compiled language (C++, Go, Java) or have solid Python/JS background." },
    ],
  },
  {
    slug: "agentic-ai-hack",
    title: "Autonomous Agentic AI Sprint",
    tagline: "Building Multi-Agent Swarms with Real-World Tooling",
    status: "live",
    category: "Hackathon",
    date: "September 22 - 25, 2026",
    time: "Ongoing Live",
    mode: "Online",
    location: "Global Discord & GitHub",
    eligibility: "Open to worldwide builders",
    teamSize: "1 - 3 Builders",
    prize: "₹75,000 + $10,000 API Credits",
    registrationUrl: "https://unstop.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description:
      "A fast-paced 72-hour virtual build sprint focusing on autonomous multi-agent systems, function calling, vector indexes, and self-correcting code loops.",
    about:
      "Agents are shifting from toy chatbots to production systems that execute code, query internal databases, and collaborate. In this sprint, build real agents that accomplish non-trivial human workflows.",
    whyParticipate: [
      "Instant access to $500 free LLM API credits per shortlisted team.",
      "Live office hours with AI researchers and prompt engineers.",
      "Showcase your agent directly to VC scouts looking for early-stage AI founders.",
    ],
    problemStatements: [
      {
        title: "Autonomous Code Refactoring Agent",
        description: "An agent that scans repos for deprecated patterns, opens branch PRs, and verifies tests.",
        tags: ["Agents", "TypeScript", "LangChain", "OpenAI"],
      },
    ],
    timeline: [
      { phase: "Day 1", date: "Sep 22", description: "Kickoff & API keys distribution." },
      { phase: "Day 2", date: "Sep 23", description: "Agent Architecture checkpoints." },
      { phase: "Day 3", date: "Sep 24", description: "Submission deadline (11:59 PM IST)." },
      { phase: "Day 4", date: "Sep 25", description: "Live streamed demos on YouTube." },
    ],
    rounds: [
      { name: "Live Sprint", duration: "72 Hours", description: "Build and deploy public demo." },
    ],
    prizesBreakdown: [
      { rank: "Winner", amount: "₹50,000", perks: "$5,000 API Credits" },
      { rank: "Runner Up", amount: "₹25,000", perks: "$3,000 API Credits" },
    ],
    judgingCriteria: [
      { title: "Reliability & Hallucination Rate", weight: "40%", description: "Does the agent gracefully recover from tool errors?" },
      { title: "Utility & Innovation", weight: "40%", description: "Clear utility over standard chat." },
      { title: "Latency & Cost Optimization", weight: "20%", description: "Efficient token usage." },
    ],
    rules: ["Demo must be accessible online via public URL."],
    mentors: [
      { name: "Samriddhi", role: "Co-Founder & CCO", org: "Catalyst Crew", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
    ],
    faqs: [
      { question: "Where do we submit?", answer: "Submit the GitHub URL and hosted web demo on Unstop before the deadline." },
    ],
  },
  {
    slug: "web3-infra-challenge",
    title: "Web3 Infrastructure & Cryptography Quest",
    tagline: "Zero-Knowledge Proofs & Scalable Rollup Primitives",
    status: "ended",
    category: "Challenge",
    date: "August 10 - 15, 2026",
    time: "Archived",
    mode: "Online",
    location: "Global Virtual",
    eligibility: "Smart contract & protocol developers",
    teamSize: "1 - 2 Builders",
    prize: "₹1,00,000 Awarded",
    registrationUrl: "https://unstop.com",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    description:
      "A competitive algorithmic challenge focused on implementing zk-SNARK circuits for private state verification and high-efficiency rollup compression.",
    about:
      "Completed in August 2026 with 320+ participating protocol engineers from across India and Southeast Asia. Over 45 production circuits were benchmarked.",
    whyParticipate: [
      "Archived challenge for educational review.",
      "Access verified solution write-ups and benchmark test suits.",
    ],
    problemStatements: [
      {
        title: "Private Membership Verification via Circom",
        description: "Prove membership in an off-chain Merkle tree without revealing identity.",
        tags: ["Circom", "zk-SNARK", "Solidity"],
      },
    ],
    timeline: [
      { phase: "Concluded", date: "Aug 15, 2026", description: "Prizes distributed & solutions open-sourced." },
    ],
    rounds: [{ name: "Final Evaluation", duration: "Completed", description: "Automated cryptographic test suite." }],
    prizesBreakdown: [{ rank: "1st Place Winner", amount: "₹60,000", perks: "Awarded to Team ZeroProof" }],
    judgingCriteria: [{ title: "Constraint Count Optimization", weight: "50%", description: "Lowest circuit constraints." }],
    rules: ["All winning solutions have been published in our showcase."],
    mentors: [
      { name: "Aviral", role: "COO", org: "Catalyst Crew", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80" },
    ],
    faqs: [
      { question: "Can I still view the problem statement?", answer: "Yes, all materials are preserved in our Resources archive." },
    ],
  },
];
