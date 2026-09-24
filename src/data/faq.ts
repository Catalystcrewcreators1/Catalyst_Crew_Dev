export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Membership" | "Events & Hackathons" | "Partners & Sponsors" | "Projects";
}

export const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What is Catalyst Crew?",
    answer:
      "Catalyst Crew is an authentic, builder-first developer community where college students and early-career engineers learn, build, collaborate, compete in hackathons, showcase their work, and connect with high-growth tech companies and startup opportunities.",
  },
  {
    category: "General",
    question: "Is Catalyst Crew free to join?",
    answer:
      "Yes, 100%. Catalyst Crew is completely free for individual student developers and builders. Our community resources, open workshops, hackathons, and peer Discord/WhatsApp groups do not charge any membership fees.",
  },
  {
    category: "Membership",
    question: "How do I become an active member?",
    answer:
      "You can join immediately by clicking 'JOIN THE CREW' to join our WhatsApp announcements community and Discord server. From there, introduce yourself, join an active quest or study group, and start collaborating on builds.",
  },
  {
    category: "Membership",
    question: "What are the requirements to join?",
    answer:
      "No specific college degree or branch is required. All you need is genuine curiosity, respect for our Code of Conduct, and a commitment to actively writing code and shipping software rather than remaining a passive bystander.",
  },
  {
    category: "Events & Hackathons",
    question: "Where do event registrations take place?",
    answer:
      "We partner with official, verified platforms such as Unstop and Lu.ma for seamless team registration, eligibility checks, and ticket management. Each event page provides a direct, verified link to register.",
  },
  {
    category: "Events & Hackathons",
    question: "Can I participate in hackathons if I am a beginner?",
    answer:
      "Absolutely! We run dedicated beginner tracks, organize pre-hackathon scaffolding workshops, and provide hands-on mentors to help you make your very first git commits and deployment.",
  },
  {
    category: "Partners & Sponsors",
    question: "How can companies partner with Catalyst Crew?",
    answer:
      "Companies can sponsor hackathon tracks, host technical workshops, access our vetted builder talent pool for hiring, or provide developer tools & cloud credits. Visit our Partners page or contact us to start an alignment call.",
  },
  {
    category: "Projects",
    question: "How can I get my project featured on the Showcase page?",
    answer:
      "Community members can submit their projects via our Discord/WhatsApp build-review channel or the project submission form. Our technical team evaluates code quality, originality, and deployment status before featuring builds on the showcase.",
  },
];
