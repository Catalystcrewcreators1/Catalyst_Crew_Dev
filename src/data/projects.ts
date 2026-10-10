export interface ProjectBuilder {
  name: string;
  role: string;
  avatar: string;
  github?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  builders: ProjectBuilder[];
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  category: "Student Projects" | "Hackathon Builds" | "Open Source" | "AI & Machine Learning" | "Web3 & Systems";
  featured: boolean;
  award?: string;
}

export const projectsData: Project[] = [
  {
    slug: "hyper-cache-engine",
    name: "HyperCache KV",
    tagline: "Ultra-low latency in-memory distributed store written in Rust",
    builders: [
      { name: "Devansh K.", role: "Systems Engineer", avatar: "/Ashwin.png", github: "https://github.com" },
      { name: "Tanmay Rao", role: "Network Architect", avatar: "/Vansh.png", github: "https://github.com" },
    ],
    description:
      "A distributed key-value store achieving sub-millisecond p99 read latencies using custom lock-free ring buffers and io_uring on Linux.",
    problem:
      "Traditional centralized caching solutions introduce significant serialization overhead and thread lock contention under high-throughput write spikes.",
    solution:
      "Engineered a zero-copy binary network protocol over raw TCP with thread-pinned actor queues, reducing latency spikes by 74% compared to vanilla Redis.",
    stack: ["Rust", "Tokio", "io_uring", "Docker", "Prometheus"],
    githubUrl: "https://github.com/catalyst-crew/hyper-cache",
    demoUrl: "https://hypercache.demo.catalystxcrew.in",
    image: "/poster1x1.png",
    category: "Web3 & Systems",
    featured: true,
    award: "1st Place Winner - Catalyst Hack",
  },
  {
    slug: "agent-pilot-dev",
    name: "AgentPilot Dev",
    tagline: "Autonomous CLI agent for local pull request testing & code refactoring",
    builders: [
      { name: "Pooja Hegde", role: "AI Researcher", avatar: "/Aryan.jpg", github: "https://github.com" },
      { name: "Rishabh Sen", role: "Fullstack Builder", avatar: "/Riddhima.jpg", github: "https://github.com" },
    ],
    description:
      "A command-line coding copilot that reads AST trees, finds regression risks before push, and writes automated playwright e2e tests.",
    problem:
      "Developers lose hours diagnosing CI pipeline failures and writing repetitive test harnesses after every feature update.",
    solution:
      "Context-aware agent combining Tree-sitter AST parsing with lightweight local LLMs to generate high-confidence test suites and verify build passes locally.",
    stack: ["TypeScript", "Node.js", "Tree-Sitter", "Ollama", "Playwright"],
    githubUrl: "https://github.com/catalyst-crew/agent-pilot",
    demoUrl: "https://agentpilot.dev",
    image: "/catalyst-hack-banner.jpg",
    category: "AI & Machine Learning",
    featured: true,
    award: "Best AI Innovation Award",
  },
  {
    slug: "synapse-mesh",
    name: "Synapse Mesh",
    tagline: "P2P collaborative canvas for remote teams using WebRTC and CRDTs",
    builders: [
      { name: "Kunal Mehra", role: "Frontend Lead", avatar: "/Aviral.jpg", github: "https://github.com" },
      { name: "Ananya Roy", role: "UI/UX Designer", avatar: "/Manikant.jpg", github: "https://github.com" },
    ],
    description:
      "A real-time whiteboard built with zero cloud relay servers. All state sync happens directly peer-to-peer via WebRTC data channels with Yjs CRDTs.",
    problem:
      "Cloud-based collaboration tools suffer from high monthly SaaS subscription fees and latency lag for teams distributed globally.",
    solution:
      "Built a serverless canvas where state reconciles conflict-free on peer nodes, ensuring complete privacy, zero hosting costs, and instant local editing.",
    stack: ["Next.js", "WebRTC", "Yjs CRDT", "Tailwind CSS", "Canvas API"],
    githubUrl: "https://github.com/catalyst-crew/synapse-mesh",
    demoUrl: "https://synapsemesh.app",
    image: "/catalyst-crew-logo.png",
    category: "Student Projects",
    featured: true,
  },
  {
    slug: "zk-vote-protocol",
    name: "ZeroVote DAO",
    tagline: "Private decentralized governance voting via zero-knowledge proofs",
    builders: [
      { name: "Varun Nair", role: "Smart Contract Eng", avatar: "/Ashwin.png", github: "https://github.com" },
    ],
    description:
      "Enables DAO token holders to cast cryptographic votes without exposing their wallet address, token balance, or voting preference on-chain.",
    problem:
      "Public on-chain votes allow whale intimidation, vote buying, and front-running by malicious protocol participants.",
    solution:
      "Utilizes Circom zk-SNARK circuits to prove token voting weight within a private snapshot tree while keeping the voter identity masked.",
    stack: ["Circom", "Solidity", "Hardhat", "TypeScript", "Ethers.js"],
    githubUrl: "https://github.com/catalyst-crew/zerovote-dao",
    image: "/poster1x1.png",
    category: "Hackathon Builds",
    featured: false,
    award: "Track Winner - Web3 Cryptography",
  },
  {
    slug: "micro-lens-profiler",
    name: "MicroLens Profiler",
    tagline: "Lightweight CPU & memory flamegraph generator for Node.js microservices",
    builders: [
      { name: "Siddharth Jain", role: "DevOps Engineer", avatar: "/Vansh.png", github: "https://github.com" },
    ],
    description:
      "Single-binary runtime agent that captures low-overhead V8 profiling events and streams interactive flamegraphs straight to your browser.",
    problem:
      "Production debugging tools are often heavy, expensive, or require intrusive SDK code changes that affect production performance.",
    solution:
      "Runs as an external diagnostic agent utilizing Linux perf events and Chrome DevTools Protocol to monitor services with <0.8% CPU overhead.",
    stack: ["Go", "Node.js V8", "D3.js", "WebSockets"],
    githubUrl: "https://github.com/catalyst-crew/microlens",
    demoUrl: "https://microlens.dev",
    image: "/catalyst-hack-banner.jpg",
    category: "Open Source",
    featured: false,
  },
  {
    slug: "neuropulse-brain",
    name: "NeuroPulse",
    tagline: "Edge speech-to-intent engine for hands-free terminal navigation",
    builders: [
      { name: "Arpita Sen", role: "ML Engineer", avatar: "/Aryan.jpg", github: "https://github.com" },
    ],
    description:
      "A quantized offline voice model that translates spoken natural language developer instructions into safe, pre-screened bash commands.",
    problem:
      "Developers with motor impairments or RSI struggle with repetitive keyboard shortcuts and commands during prolonged sessions.",
    solution:
      "Fine-tuned small language model running 100% locally on Apple Silicon and ONNX CPU backends with zero cloud audio telemetry.",
    stack: ["Python", "ONNX", "Whisper Small", "Rust CLI"],
    githubUrl: "https://github.com/catalyst-crew/neuropulse",
    image: "/catalyst-crew-logo.png",
    category: "AI & Machine Learning",
    featured: false,
  },
];
