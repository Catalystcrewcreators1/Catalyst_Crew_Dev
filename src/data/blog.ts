export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "AI & Agents" | "Hackathon Playbook" | "Community Stories" | "Career";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "why-we-reject-pitch-decks",
    title: "Why We Reject Pitch Decks: Code Speaks Louder Than Canvas",
    excerpt:
      "Most student hackathons have turned into PowerPoint competitions. Here is why Catalyst Crew prioritizes git commit logs, working prototypes, and real terminal output.",
    category: "Community Stories",
    author: {
      name: "Arpit",
      role: "Founder & CEO",
      avatar: "/Ashwin.png",
    },
    date: "September 15, 2026",
    readTime: "5 min read",
    image: "/poster1x1.png",
    tags: ["Philosophy", "Hackathons", "Culture"],
    content: `
### The Epidemic of the Slides-Only Hackathon

Walk into an average college tech competition today, and you'll witness something strange: teams spending 36 out of 48 hours obsessing over Canva templates, animated transitions, and buzzword-loaded TAM (Total Addressable Market) slide calculations.

When the demo hour arrives, the project is frequently an un-deployed Figma mock or a hardcoded frontend where clicking anything returns a 404 error.

At **Catalyst Crew**, we took a firm stance from Day 1: **We build real software.**

### The Builder First Philosophy

1. **Working Software Over Polished Slides**: A jury member should be able to open your demo URL on their phone or run \`npm run build && npm run dev\` from your README without a terminal meltdown.
2. **Architecture Integrity**: We value builders who can articulate *why* they chose SQLite over Postgres for an embedded edge agent, or how they handle race conditions in their concurrent queue.
3. **The Unvarnished Truth**: If your agent fails on an edge case during demo, don't fake the output with hardcoded strings. Tell the judges the exact point of failure and how you plan to debug it. Seasoned engineers respect authentic engineering over deceptive polish every single time.

### What Happens When You Focus on Code

When you remove the pressure to present like a Silicon Valley pitchman, something incredible happens: developers stop pretending and start building. They explore new paradigms—from WebAssembly runtimes to local LLM embeddings—and walk away with real, defensible portfolio artifacts that open doors to top-tier careers.
    `,
  },
  {
    slug: "engineering-autonomous-agents-in-production",
    title: "Engineering Autonomous Agents in Production: Beyond Simple Chat Prompts",
    excerpt:
      "A deep technical breakdown of tool-calling loops, state persistence, deterministic validation layers, and mitigating agent infinite recursion in production environments.",
    category: "AI & Agents",
    author: {
      name: "Ashwin",
      role: "Co-Founder & CTO",
      avatar: "/Vansh.png",
    },
    date: "September 08, 2026",
    readTime: "8 min read",
    image: "/hero_showcase.webp",
    tags: ["AI", "Agents", "TypeScript", "Architecture"],
    content: `
### From Chatbot to Stateful Orchestration

Most early agent tutorials show a naive while-loop with OpenAI function calling. While that works for a 1-minute YouTube demo, deploying an agent that interacts with customer data or executes bash commands requires structural rigor.

### Key Architectural Pillars

#### 1. Deterministic Tool Execution
Never let an LLM directly generate freeform shell commands without an AST validation gate. Your tool schema must enforce strict parameter bounds, typed payloads (using Zod or Pydantic), and sandboxed execution environments.

#### 2. Persistent Memory and Checkpoints
If an agent crashes on step 4 of a 7-step code refactoring task, it shouldn't restart from step 1. Using state graphs like LangGraph or custom checkpoint stores ensures transactional resumption.

#### 3. Circuit Breakers for Infinite Loops
Every autonomous agent pipeline needs hard operational circuit breakers:
- Maximum tool iteration count per user request.
- Token velocity monitoring.
- Explicit human-in-the-loop approvals for destructive operations (e.g., \`git push --force\`, database drops, or sending external emails).

Building agents isn't just about prompt engineering; it's classic systems engineering applied to probabilistic models.
    `,
  },
  {
    slug: "from-student-to-core-contributor",
    title: "From College Freshman to Open Source Maintainer: Samriddhi's Story",
    excerpt:
      "How getting your first pull request merged into a major developer library accelerates your engineering maturity faster than any classroom curriculum.",
    category: "Community Stories",
    author: {
      name: "Samriddhi",
      role: "Co-Founder & CCO",
      avatar: "/Aryan.jpg",
    },
    date: "August 28, 2026",
    readTime: "6 min read",
    image: "/catalyst-crew-logo.png",
    tags: ["OpenSource", "Community", "Career"],
    content: `
### The Fear of the Red 'Changes Requested' Badge

I still remember submitting my first PR to an open-source Rust CLI project during my second semester. My hands were shaking. Within four hours, a senior maintainer in Berlin had reviewed it and left six detailed comments, pointing out memory allocations I didn't even realize I was triggering.

At first, I felt defeated. But reading through the feedback, I realized something vital: **In open source, code review is the most generous form of mentorship on the planet.**

### How Catalyst Crew Bridges the Gap

At Catalyst Crew, we designed our Open Source sprints specifically to demystify this process:
- We curate 'Good First Issues' across active repositories.
- Senior student mentors pair up with first-time contributors.
- We teach git hygiene: semantic commits, clean rebase workflows, and thorough documentation.

The developers who thrive today are the ones who learn in public, embrace feedback, and build together.
    `,
  },
  {
    slug: "systems-engineering-roadmap",
    title: "Systems Engineering & Rust Career Roadmap 2026: From Memory Layout to Kernel Primitives",
    excerpt:
      "From basic C/C++ memory models to production Rust, OS primitives, async runtime design, and Linux kernel programming.",
    category: "Engineering",
    author: {
      name: "Ashwin",
      role: "Co-Founder & CTO",
      avatar: "/Riddhima.jpg",
    },
    date: "September 02, 2026",
    readTime: "10 min read",
    image: "/poster1x1.png",
    tags: ["Rust", "Systems", "Linux", "Roadmap"],
    content: `
### Why Systems Programming is Experiencing a Renaissance

For a decade, the developer world converged around interpreted languages and cloud abstractions. But as AI inference workloads explode and edge compute boundaries push into resource-constrained hardware, systems engineering has become the highest-leverage discipline in tech.

### Phase 1: Understanding Memory & Cache Hierarchy

Before writing safe Rust, you need to understand what the CPU is actually doing:
- **Stack vs Heap Allocations**: Pointer lifetimes, cache line misses, and struct memory layout alignment.
- **The Cost of Virtual Memory**: Page tables, TLB cache invalidation, and syscall overhead.
- **Concurrency Hazards**: Data races, deadlocks, and the difference between mutexes and lock-free atomic CAS primitives.

### Phase 2: Mastering Modern Rust

Rust isn't just syntax; it's a compile-time mathematical proof of memory safety:
1. **Ownership & Borrowing**: Internalize how lifetimes work without relying on \`.clone()\` crutches.
2. **Trait-Driven Design**: Clean zero-cost abstractions through \`Deref\`, \`From/Into\`, and generic type parameters.
3. **Async Runtimes**: Understanding how Tokio's cooperative work-stealing scheduler differs from OS thread scheduling.

### Phase 3: Building Real Systems Projects

The only way to master systems engineering is to build things that break under load:
- Build your own Redis protocol clone using raw TCP and non-blocking I/O.
- Write a userspace packet sniffer utilizing Linux \`AF_PACKET\` or eBPF.
- Implement a log-structured merge-tree (LSM) key-value engine from scratch.
    `,
  },
  {
    slug: "50-real-project-ideas",
    title: "50 Non-Trivial Project Ideas for Engineering Students: Beyond Todo Apps",
    excerpt:
      "No more generic todo lists or weather apps. 50 real-world problem statements across distributed databases, developer tools, and privacy.",
    category: "Hackathon Playbook",
    author: {
      name: "Arpit",
      role: "Founder & CEO",
      avatar: "/Aviral.jpg",
    },
    date: "August 20, 2026",
    readTime: "7 min read",
    image: "/hero_showcase.webp",
    tags: ["Projects", "Portfolio", "Ideas", "Engineering"],
    content: `
### Stop Building Weather Apps

If you want recruiters and technical founders to take your GitHub profile seriously, you need to stop cloning tutorials and start solving real software engineering friction.

When hiring managers look at student portfolios, they look for three things: **Architectural Ambition, Problem Scoping, and Defensible Technical Choices.**

### Top Project Categories That Turn Heads

#### 1. Developer Tooling & CLIs
- **Local AST linter for custom security rules**: Parse code trees with Tree-sitter and flag unvalidated environment variable lookups.
- **Micro-benchmarking harness for WebAssembly modules**: Measure instruction count and cold-boot latency in isolated runtimes.
- **Mock database server with simulated network partition faults**: Help developers test their distributed retry logic locally.

#### 2. Distributed Systems & Storage
- **Peer-to-Peer encrypted file sync**: Sync directories across LAN nodes using MDNS discovery and cryptographic hashes.
- **In-memory cache with Raft consensus**: Implement leader election and replicated write logs across 3 nodes.
- **Time-series metrics engine with rolling downsampling**: Store IoT sensor heartbeats with timestamp compression algorithms.

#### 3. Agentic AI & Systems Integrations
- **Autonomous git bisect agent**: Automatically check out past commits, run tests, and locate regression causes with summarized diff analysis.
- **Database query plan explainer**: Convert raw \`EXPLAIN ANALYZE\` query trees into interactive optimization suggestions.
    `,
  },
];
