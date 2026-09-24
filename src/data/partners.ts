export interface PartnerTier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export const partnerTiers: PartnerTier[] = [
  {
    id: "tech",
    name: "Technology Partner",
    tagline: "Drive developer adoption for your API, SDK, or cloud infrastructure",
    description:
      "Put your tools into the hands of hundreds of active builders during high-stakes hackathons, dedicated workshop series, and open build sprints.",
    deliverables: [
      "Custom branded hackathon track with dedicated API bounty",
      "Direct technical office hours and live developer workshops",
      "Featured placement on developer documentation and starter kits",
      "Comprehensive telemetry & feedback report on developer friction points",
    ],
    idealFor: "Cloud providers, AI API platforms, Database providers, DevTools",
  },
  {
    id: "hiring",
    name: "Hiring & Talent Partner",
    tagline: "Access pre-vetted, high-agency engineering talent before anyone else",
    description:
      "Skip generic resumes. Observe candidate code quality, architectural decision-making, and teamwork in real-time under hackathon pressure.",
    deliverables: [
      "Early-access candidate pipeline with verified GitHub repositories",
      "Fast-track interview slots with finalist hackathon builders",
      "Branded booth / virtual recruitment lounge during major flagship events",
      "Direct promotion of internship & full-time roles across our channels",
    ],
    idealFor: "High-growth startups, engineering scale-ups, global tech firms",
  },
  {
    id: "event",
    name: "Flagship Event Partner",
    tagline: "Headline our national hackathons and multi-day developer conferences",
    description:
      "Establish premier brand authority with prominent keynote stages, stage mentions, and deep community immersion.",
    deliverables: [
      "Title / Co-presenter branding on all digital assets and PR releases",
      "Keynote speaking slot at opening & closing ceremonies",
      "Jury seat on the Grand Finale evaluation panel",
      "Custom experiential activation zone for physical/virtual attendees",
    ],
    idealFor: "Venture funds, ecosystem foundations, tier-1 tech enterprises",
  },
  {
    id: "community",
    name: "Community Ecosystem Partner",
    tagline: "Co-host regional meetups, campus roadshows, and peer study cohorts",
    description:
      "Empower localized developer groups across 40+ premier colleges through collaborative learning sprints and meetups.",
    deliverables: [
      "Co-branded monthly meetups and campus hack nights",
      "Shared community announcements and cross-promotional reach",
      "Access to Catalyst Crew student ambassadors on campus",
    ],
    idealFor: "University clubs, regional developer groups, non-profit foundations",
  },
  {
    id: "knowledge",
    name: "Knowledge & Education Partner",
    tagline: "Publish technical guides, masterclasses, and deep-dive engineering curriculums",
    description:
      "Share your engineering team's specialized domain expertise through high-impact technical teardowns, blogs, and guest workshops.",
    deliverables: [
      "Co-authored technical guides featured in our Resources library",
      "Guest speaker slots on the Catalyst Crew Live masterclass series",
      "Permanent editorial distribution across our newsletter and blog",
    ],
    idealFor: "Engineering thought leaders, technical academies, OSS foundations",
  },
  {
    id: "prize",
    name: "Prize & Grant Partner",
    tagline: "Fund cash bounties, micro-grants, and hardware prototyping perks",
    description:
      "Directly incentivize student builders to solve specific technical frontiers with prize capital and deployment credits.",
    deliverables: [
      "Named category awards presented on live demo stage",
      "Exclusive showcase spotlight of winning project builds",
      "Tax-deductible community sponsorship documentation",
    ],
    idealFor: "Ecosystem grant programs, protocols, angel syndicates",
  },
  {
    id: "media",
    name: "Media & Content Partner",
    tagline: "Amplify developer stories, hackathon highlights, and technical milestones",
    description:
      "Collaborate on video recaps, podcast interviews, and community spotlights reaching over 25,000+ developer eyes.",
    deliverables: [
      "Cross-platform editorial features and founder interviews",
      "Dedicated press release distribution across developer news feeds",
      "High-resolution media packages from offline flagship summits",
    ],
    idealFor: "Tech publications, developer podcasts, YouTube creators",
  },
  {
    id: "merch",
    name: "Merchandise & Lifestyle Partner",
    tagline: "Outfit builders with premium desk gear, apparel, and collectible hardware",
    description:
      "Deliver memorable tangible experiences that builders wear, keep on their desks, and share proudly across social media.",
    deliverables: [
      "Co-branded mechanical keycaps, desk mats, t-shirts, and stickers",
      "Unboxing moments featured in attendee recap reels",
      "Exclusive inclusion in hacker swag bags",
    ],
    idealFor: "Hardware brands, mechanical keyboard makers, lifestyle brands",
  },
];

export const partnershipProcess = [
  {
    step: "01",
    title: "Connect",
    description: "Submit an inquiry or book an intro call with our partnership leads to share your brand objectives.",
  },
  {
    step: "02",
    title: "Align",
    description: "We tailor a clear collaboration scope, KPIs, timeline, and track incentives that match your developer goals.",
  },
  {
    step: "03",
    title: "Activate",
    description: "Launch the challenge, workshop, or recruitment campaign to our active network of builders with direct mentorship.",
  },
  {
    step: "04",
    title: "Measure",
    description: "Receive deep quantitative metrics: API signups, repo commits, candidate profiles, and live project outputs.",
  },
  {
    step: "05",
    title: "Scale",
    description: "Turn one-off activations into long-term strategic community presence, ambassador programs, and hiring funnels.",
  },
];
