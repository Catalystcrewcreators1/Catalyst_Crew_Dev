export interface EventTheme {
  title: string;
  description: string;
}

export interface PptSlide {
  slideNumber: number;
  title: string;
  description: string;
}

export interface EventSponsor {
  name: string;
  logo: string;
  category: string;
  url?: string;
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
  sponsors: EventSponsor[];
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
  contacts?: {
    name: string;
    email: string;
    phone: string;
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
    location: "Fully Online",
    organizer: "Catalyst Crew Dev Community",
    eligibility: "Undergraduate, Postgraduate, Engineering, Management, Arts, Commerce, Sciences, Law & Medical students from all branches, years & colleges",
    teamSize: "4 – 5 Members",
    prize: "Up to ₹20,000 Cash Prizes + E-Certificates",
    registrationUrl: "https://unstop.com/p/catalyst-hack-2026-catalyst-crew-dev-community-1760000",
    whatsappUrl: "https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l",
    image: "/poster1x1.png",
    description:
      "Catalyst Hack 2026 is a fully online technology and innovation hackathon organised by Catalyst Crew Dev Community, in collaboration with Posterwa and AWS SBG PSIT. The hackathon brings together student developers, innovators, designers, and technology enthusiasts to transform meaningful ideas into practical, scalable, and impactful solutions for real-world problems.",
    about:
      "Teams progress through an online PPT and idea screening round, a mentor-screening semi-final (₹50/member fee for shortlisted teams only), and a 10-hour final hackathon sprint. Shortlisted teams present their ideas, explain technical feasibility, and build working prototypes for final evaluation. Participants must follow the event rules, submit required deliverables on time, and maintain originality and professional conduct throughout the competition.",
    organizerAbout:
      "Catalyst Crew Dev Community is the organising developer community behind Catalyst Hack 2026. The community focuses on bringing student developers, innovators, and technology enthusiasts together through collaborative learning, technical activities, community initiatives, and innovation-driven events. Organised in collaboration with Posterwa and AWS SBG PSIT.",
    whyParticipate: [
      "Up to ₹20,000 Cash Prizes awarded to top winning teams.",
      "Cloud Innovation Opportunity with AWS SBG PSIT collaboration.",
      "Build Real-World Solutions — turn ideas into working prototypes.",
      "Official E-Certificates awarded to all Semi-Finalist and Finalist participants.",
      "Rigorous 3-stage format: PPT Ideation, Mentor Screening, and a 10-Hour Live Build Sprint.",
      "Connect with passionate student developers and tech leaders across colleges nationwide.",
    ],
    sponsors: [
      { name: "AWS Student Builder Groups", logo: "/awssbg.jpeg", category: "Cloud Partner" },
      { name: "Posterwa", logo: "/porsterwaP.jpeg", category: "Collaboration Partner" },
      { name: "Unstop", logo: "/unstopp.jpeg", category: "Platform Partner" },
      { name: "Shekun JP", logo: "/Shekunjp.jpeg", category: "Community Partner" },
      { name: "Enginow", logo: "/Enginow.png", category: "Tech Partner" },
      { name: "Sulax Solar", logo: "/Sulax_Solar.png", category: "Energy Partner" },
      { name: "Tribex Esports", logo: "/Tribex%20Esports.jpeg", category: "Gaming Partner" },
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
        description: "Shortlisted teams present solutions to mentors for feasibility, scalability, and execution review. Mandatory Fee: ₹50 per member, payable only after Round 1 shortlisting.",
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
        fee: "₹50 per member",
        description:
          "Shortlisted teams participate in an online mentor screening involving a solution pitch, technical discussion, feasibility, scalability, and execution-readiness assessment. Fee payable only after Round 1 shortlisting.",
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
        rank: "Winner",
        amount: "₹12,000",
        perks: "Cash prize, Official Winner E-Certificate of Catalyst Hack 2026.",
      },
      {
        rank: "Runner-Up",
        amount: "₹8,000",
        perks: "Cash prize, Runner-Up E-Certificate of Catalyst Hack 2026.",
      },
      {
        rank: "Semi-Finalists & Finalists",
        amount: "E-Certificates",
        perks: "Official Participation E-Certificates. All prizes and certificates will be released within 15 days after the event.",
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
          "Register through the official Unstop portal. All registered participants must also join the official WhatsApp group for announcements, screening links, deadlines, and PPT submission portals.",
      },
      {
        question: "What is the team size requirement?",
        answer:
          "Each team must have 4 to 5 members. Cross-college, cross-branch and cross-year teams are completely allowed.",
      },
      {
        question: "Is there any fee to participate?",
        answer:
          "Registration and Round 1 (PPT submission) is completely FREE. Teams shortlisted for Round 2 (Semi-Final) pay a nominal fee of ₹50 per member.",
      },
      {
        question: "No team? How can I find teammates?",
        answer:
          "Fill the team formation form at formstuff.in/f/catalyst-hack-2026-p092v and find teammates based on your skills, interests & ideas.",
      },
      {
        question: "Is the hackathon completely online?",
        answer:
          "Yes! Catalyst Hack 2026 is 100% online. All rounds including PPT submission, mentor screening, and the 10-hour final hackathon build sprint take place online.",
      },
      {
        question: "Can I use AI tools and open-source libraries?",
        answer:
          "Yes, AI tools, development frameworks, APIs, and open-source resources are permitted. However, usage must follow the event's applicable policies and required disclosure. Teams must demonstrate genuine understanding and contribution.",
      },
    ],
    contacts: [
      { name: "Catalyst Crew", email: "catalystcrewcreators@gmail.com", phone: "+919235823255" },
      { name: "Aviral Mishra", email: "aviral18m@gmail.com", phone: "+919170252358" },
      { name: "Aryan Pandey", email: "aryanp24.comm24@gmail.com", phone: "+919559287755" },
    ],
  },
];
