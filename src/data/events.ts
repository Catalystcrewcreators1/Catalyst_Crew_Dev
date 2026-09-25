export interface EventTheme {
  title: string;
  description: string;
}

export interface PptSlide {
  slideNumber: number;
  title: string;
  description: string;
}

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
  organizer: string;
  eligibility: string;
  teamSize: string;
  prize: string;
  registrationUrl: string;
  whatsappUrl: string;
  image: string;
  description: string;
  about: string;
  organizerAbout: string;
  whyParticipate: string[];
  themes: EventTheme[];
  pptStructure: PptSlide[];
  eliminationCriteria: string[];
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
    fee?: string;
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
    title: "Catalyst Hack 2026",
    tagline: "IDEATE • BUILD • IMPACT",
    status: "live",
    category: "Hackathon",
    date: "Sep 25 - Oct 25, 2026",
    time: "Registrations Open",
    mode: "Online",
    location: "Fully Online (Discord & Video Stream)",
    organizer: "Catalyst Crew Dev Community",
    eligibility: "Student developers, innovators, designers & tech enthusiasts from all branches, years & colleges",
    teamSize: "Minimum 4 – Maximum 5 Members",
    prize: "₹24,000 Cash Pool + E-Certificates",
    registrationUrl: "https://unstop.com/p/catalyst-hack-2026-catalyst-crew-dev-community-1760000",
    whatsappUrl: "https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l",
    image: "/catalyst-hack-banner.jpg",
    description:
      "Catalyst Hack 2026 is a fully online technology and innovation hackathon designed to turn meaningful ideas into practical, scalable, and impactful solutions. Organized in collaboration with Rosterwa, the event brings together student developers, innovators, designers, and technology enthusiasts to solve real-world problems through collaboration and hands-on building.",
    about:
      "Teams progress through an online PPT and idea screening round, a mentor-screening semi-final, and a 10-hour final hackathon sprint. Shortlisted teams present their ideas, explain technical feasibility, and build working prototypes for final evaluation. Participants must follow the event rules, submit required deliverables on time, and maintain originality and professional conduct throughout the competition.",
    organizerAbout:
      "Catalyst Crew Dev Community × Rosterwa are the organizing partners behind Catalyst Hack 2026, focused on bringing student developers, innovators, and technology enthusiasts together through collaborative learning, technical activities, community initiatives, and innovation-driven events.",
    whyParticipate: [
      "Turn your raw idea into a production-grade working prototype evaluated by tech mentors.",
      "Cash prize pool of ₹24,000 awarded directly to top 3 winning teams.",
      "Official E-Certificates awarded to all Semi-Finalist and Finalist participants.",
      "Rigorous 3-stage format: PPT Ideation, Mentor Screening, and a 10-Hour Live Build Sprint.",
      "Connect with passionate student developers and tech leaders across colleges nationwide.",
    ],
    themes: [
      {
        title: "AI for Humanity",
        description: "Deploy machine learning and AI algorithms to tackle critical human, health, and accessibility challenges.",
      },
      {
        title: "ClimateTech & Sustainability",
        description: "Build software solutions for renewable energy optimization, carbon tracking, waste reduction, and ecology.",
      },
      {
        title: "Future of Education",
        description: "Pioneer adaptive learning systems, interactive student tools, and inclusive open education platforms.",
      },
      {
        title: "FinTech & Financial Inclusion",
        description: "Democratize modern financial services, fraud detection, automated accounting, and secure micro-transactions.",
      },
      {
        title: "Cybersecurity & Digital Trust",
        description: "Fortify user privacy, zero-trust systems, data sovereignty, and proactive threat detection engines.",
      },
      {
        title: "Smart Cities & CivicTech",
        description: "Engineer civic infrastructure tools, smart traffic coordination, municipal utility tech, and public transparency apps.",
      },
      {
        title: "AgriTech & Rural Innovation",
        description: "Empower farmers and rural economies with smart yield forecasting, precision irrigation, and supply chain tracking.",
      },
      {
        title: "AI Agents & Autonomous Systems",
        description: "Create autonomous multi-agent swarms, self-correcting workflows, and specialized robotic or desktop assistants.",
      },
      {
        title: "Blockchain for Real-World Impact",
        description: "Leverage tamper-proof distributed ledgers, verifiable credentials, and decentralized coordination protocols.",
      },
      {
        title: "Open Innovation",
        description: "Have a unique disruptive breakthrough that crosses boundaries? Build any high-impact solution you envision.",
      },
    ],
    pptStructure: [
      {
        slideNumber: 1,
        title: "Title & Team Introduction",
        description: "Event name, project title, team name, member names, roles, college/branch details, and contact info.",
      },
      {
        slideNumber: 2,
        title: "Problem Statement & Target Users",
        description: "Clear articulation of the real-world pain point, affected user demographic, and why existing solutions fall short.",
      },
      {
        slideNumber: 3,
        title: "Proposed Solution",
        description: "High-level overview of your solution, core value proposition, and how it directly solves the problem.",
      },
      {
        slideNumber: 4,
        title: "Key Features & Innovation",
        description: "Breakdown of 3-5 primary features, novelty, unique angle, and competitive differentiation.",
      },
      {
        slideNumber: 5,
        title: "Technology Stack & Architecture",
        description: "Frontend, backend, database, AI/ML models, external APIs, and system architecture diagram.",
      },
      {
        slideNumber: 6,
        title: "Impact, Feasibility & Scalability",
        description: "Practical utility, measurable positive impact, technical execution feasibility, and roadmap to scale.",
      },
      {
        slideNumber: 7,
        title: "Prototype, Future Roadmap & Conclusion",
        description: "Working demo/mockup screenshots, what will be built in the 8h final sprint, future vision, and conclusion.",
      },
    ],
    eliminationCriteria: [
      "Failure to submit deliverables (PPT, prototype, repo) within the specified deadlines.",
      "Found guilty of plagiarism, unfair practices, or unauthorized reuse of existing code/solutions without disclosure.",
      "Violation of event rules, code of conduct, or displaying unprofessional behavior.",
      "Missing mandatory online presentations, mentor screening rounds, or final demonstrations.",
      "Providing false, inaccurate, or misleading registration/team information.",
    ],
    problemStatements: [
      {
        title: "AI for Humanity & Public Impact",
        description:
          "Develop intelligent assistive systems, healthcare accessibility tools, or societal welfare platforms using applied artificial intelligence.",
        tags: ["AI/ML", "Healthcare", "Accessibility", "Public Good"],
      },
      {
        title: "ClimateTech, Sustainability & Smart Cities",
        description:
          "Design scalable systems for municipal resource optimization, carbon lifecycle tracking, or sustainable renewable energy distribution.",
        tags: ["IoT", "Sustainability", "CivicTech", "CleanTech"],
      },
      {
        title: "FinTech, Digital Trust & Cyber Resilience",
        description:
          "Build fraud-resistant payment flows, decentralized identity systems, or zero-trust security tools that protect digital citizens.",
        tags: ["FinTech", "Security", "Cryptography", "Blockchain"],
      },
      {
        title: "Autonomous AI Agents & Open Innovation",
        description:
          "Build self-executing agent swarms, automated workflow orchestrators, or ambitious cross-domain applications that redefine software interaction.",
        tags: ["AI Agents", "LLMs", "Automation", "Open Innovation"],
      },
    ],
    timeline: [
      {
        phase: "Registration Opens",
        date: "25 September 2026",
        description: "Official registrations open. Form teams of 4–5 members and join the official WhatsApp community group.",
      },
      {
        phase: "Registration & Round 1 PPT Deadline",
        date: "20 October 2026",
        description: "Final deadline for registration and submission of the 7-slide Round 1 Idea & Architecture presentation.",
      },
      {
        phase: "Round 2: Semi-Final (Online Mentor Screening)",
        date: "24 October 2026",
        description: "Shortlisted teams present solutions to mentors for feasibility, scalability, and execution review (₹80/member fee).",
      },
      {
        phase: "Round 3: Final Hackathon (10-Hour Sprint & Demos)",
        date: "25 October 2026",
        description: "Selected finalists participate in an intensive 10-hour live online build sprint, code submission, and final jury pitch.",
      },
    ],
    rounds: [
      {
        name: "Round 1: Online PPT & Idea Submission",
        duration: "Until 20 Oct 2026",
        fee: "Free",
        description:
          "Teams submit a concise 7-slide presentation covering problem understanding, target users, proposed solution, innovation, technology stack, impact, feasibility, and prototype roadmap.",
      },
      {
        name: "Round 2: Semi-Final (Mentor Screening)",
        duration: "24 Oct 2026",
        fee: "₹80 per member",
        description:
          "Shortlisted teams participate in an online mentor screening involving a solution pitch, technical discussion, feasibility, scalability, and execution-readiness assessment.",
      },
      {
        name: "Round 3: Final Hackathon (10-Hour Sprint)",
        duration: "25 Oct 2026 (10 Hours)",
        fee: "Qualified Finalists",
        description:
          "Selected finalist teams participate in a 10-hour online build sprint and submit a working prototype, public repository, documentation, and live final presentation to the judging panel.",
      },
    ],
    prizesBreakdown: [
      {
        rank: "1st Winner (Champion)",
        amount: "₹12,000",
        perks: "Cash prize, Official Winner E-Certificate, featured spot in Catalyst Crew Showcase & community spotlight.",
      },
      {
        rank: "Runner-Up (2nd Place)",
        amount: "₹8,000",
        perks: "Cash prize, Runner-Up E-Certificate, mentor network access & partner perks.",
      },
      {
        rank: "2nd Runner-Up (3rd Place)",
        amount: "₹4,000",
        perks: "Cash prize, 2nd Runner-Up E-Certificate & community builder badge.",
      },
      {
        rank: "Semi-Finalists & Finalists",
        amount: "E-Certificates",
        perks: "Official verified E-Certificates recognizing rigorous evaluation and participation in Catalyst Hack 2026.",
      },
    ],
    judgingCriteria: [
      {
        title: "Innovation & Originality",
        weight: "20%",
        description: "Uniqueness of idea, creative problem-solving approach, and distinctive technological differentiation.",
      },
      {
        title: "Solution Quality",
        weight: "20%",
        description: "Depth of the proposed solution, UX considerations, robustness, and architectural completeness.",
      },
      {
        title: "Problem Understanding",
        weight: "15%",
        description: "Clear grasp of the user pain point, market context, relevance, and authenticity of the challenge.",
      },
      {
        title: "Technical Feasibility",
        weight: "15%",
        description: "Viability of the chosen tech stack, architecture soundness, and realistic execution capability.",
      },
      {
        title: "Impact / Usefulness",
        weight: "10%",
        description: "Measurable real-world benefits to end-users, societal or industrial value, and practical utility.",
      },
      {
        title: "Scalability",
        weight: "10%",
        description: "Potential of the solution to grow, handle higher loads, and transition into a viable production product.",
      },
      {
        title: "Presentation Clarity",
        weight: "10%",
        description: "Structure, articulation, visual quality of slides, demo delivery, and effective Q&A defense.",
      },
    ],
    rules: [
      "Each team must consist of 4 to 5 members.",
      "Team members may belong to different branches, academic years, or colleges (cross-college teams are fully permitted).",
      "No team member changes are allowed after registration without explicit prior organizer approval.",
      "Participants must provide accurate registration and contact information.",
      "All required work and submissions (PPT, code repositories, prototypes) must be completed within the specified deadlines.",
      "Plagiarism, code copying, or reuse of existing solutions without proper disclosure is strictly prohibited and leads to immediate disqualification.",
      "AI tools, modern frameworks, APIs, and open-source libraries are permitted subject to published community policy and full disclosure.",
      "Participants must maintain professional conduct and collaborative spirit throughout the event.",
      "Any violation of rules or ethical standards will result in immediate disqualification.",
    ],
    mentors: [
      {
        name: "Catalyst Crew Technical Jury",
        role: "Evaluators & Systems Mentors",
        org: "Catalyst Crew Dev Community",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Industry Innovation Panel",
        role: "Senior Architects & Founders",
        org: "Partner Tech Network",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Community Mentorship Leads",
        role: "Full-Stack & AI Specialists",
        org: "Catalyst Crew",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      },
    ],
    faqs: [
      {
        question: "How do I register for Catalyst Hack 2026?",
        answer:
          "You can register directly through the official Unstop portal (https://unstop.com/p/catalyst-hack-2026-catalyst-crew-dev-community-1760000). All registered participants are also required to join our official WhatsApp group (https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l) where screening links, deadlines, and PPT submission portals are shared.",
      },
      {
        question: "What is the team size requirement?",
        answer:
          "Each team must have a minimum of 4 and a maximum of 5 members. Cross-college and cross-year teams are completely allowed.",
      },
      {
        question: "Is there any fee to participate in Catalyst Hack 2026?",
        answer:
          "Round 1 (Registration and 7-slide PPT submission) is completely FREE. Teams that qualify for Round 2 (Semi-Final mentor screening) have a nominal participation fee of ₹80 per member.",
      },
      {
        question: "What is the format of Round 1 PPT submission?",
        answer:
          "Teams must submit a 7-slide deck covering: Slide 1 (Title & Team Intro), Slide 2 (Problem & Target Users), Slide 3 (Proposed Solution), Slide 4 (Key Features & Innovation), Slide 5 (Tech Stack & Architecture), Slide 6 (Impact & Scalability), and Slide 7 (Prototype & Roadmap).",
      },
      {
        question: "Is the hackathon completely online?",
        answer:
          "Yes! Catalyst Hack 2026 is 100% online. Mentor screening, reviews, and the 8-hour final hackathon build sprint take place over Discord and live video streams.",
      },
      {
        question: "Can I use AI tools and open-source libraries?",
        answer:
          "Yes, AI tools, public APIs, and open-source libraries are permitted, provided you disclose them in your tech stack. However, direct copying of existing repositories or pre-built complete apps without disclosure is strictly banned.",
      },
    ],
  },
];
