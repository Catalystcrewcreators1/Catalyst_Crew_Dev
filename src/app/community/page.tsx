import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MessageSquare,
  Instagram,
  Users2,
  GitPullRequest,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Code,
  Flame,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community — Join the Crew",
  description:
    "Join the Catalyst Crew WhatsApp and Discord developer communities. Connect with peers, form hackathon teams, and ship real projects.",
};

export default function CommunityPage() {
  const perks = [
    {
      title: "Active Developer Network",
      desc: "Instant access to thousands of student builders, systems engineers, and designers across 40+ engineering universities.",
      icon: Users2,
    },
    {
      title: "Team Formation Hub",
      desc: "Never enter a hackathon solo again. Find teammates with complementary skills (Frontend, Backend, Rust, AI, UI/UX).",
      icon: GitPullRequest,
    },
    {
      title: "Direct Founder & Mentor AMAs",
      desc: "Weekly open office hours with startup founders, staff engineers, and tech leads sharing unfiltered career lessons.",
      icon: Sparkles,
    },
    {
      title: "Priority Access to Quests",
      desc: "Community members get early registration windows, exclusive track briefings, and cloud credit vouchers.",
      icon: Flame,
    },
    {
      title: "Peer Code Reviews & Showcases",
      desc: "Get constructive architectural feedback on your GitHub repos before showing them to recruiters or investors.",
      icon: Code,
    },
    {
      title: "Zero Spam, 100% Signal",
      desc: "Strictly moderated channels focused exclusively on building, learning, and collaborating. No promotions or forward spam.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-ink text-white py-18 py-20 border-b-3 border-brand-ink text-center">
        <Container size="narrow">
          <Badge variant="red" size="md" className="mb-4">
            JOIN 2,500+ BUILDERS
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
            YOUR DEVELOPER <br />
            <span className="text-brand-red">PEER SQUAD</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            The hardest part of learning to code isn&apos;t the syntax — it&apos;s coding alone. Catalyst Crew surrounds you with ambitious builders who push you to ship.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://chat.whatsapp.com/catalyst-crew-placeholder"
              isExternal
              variant="primary"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              JOIN WHATSAPP COMMUNITY
            </Button>
            <Button
              href="https://instagram.com/catalystxcrew"
              isExternal
              variant="dark"
              size="lg"
              className="w-full sm:w-auto gap-2 border-brand-light/20"
            >
              <Instagram className="h-5 w-5 text-brand-red" />
              FOLLOW ON INSTAGRAM
            </Button>
          </div>
        </Container>
      </section>

      {/* What Members Get */}
      <section className="py-20 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="COMMUNITY PERKS"
            title="What You Get Inside"
            description="We designed Catalyst Crew around peer accountability, practical projects, and tangible engineering outcomes."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-ink/40 shadow-brutal-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white mb-4">
                  <perk.icon className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-ink">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-brand-white border-b-3 border-brand-ink">
        <Container size="narrow">
          <SectionHeader
            align="center"
            eyebrow="STANDARDS"
            title="The Builder Code"
            description="Our community thrives because every member upholds our core standards of respect, curiosity, and code integrity."
          />

          <div className="mt-10 space-y-4">
            {[
              {
                title: "Build in Public & Share Context",
                desc: "Don't just post 'Check out my app'. Share the architecture tradeoffs, the bugs that stumped you, and what you learned.",
              },
              {
                title: "Constructive, Empathetic Feedback",
                desc: "Review code with respect. Point out improvements while celebrating effort. We welcome beginners with open arms.",
              },
              {
                title: "Zero Plagiarism & Honest Commits",
                desc: "Copying code without attribution or submitting pre-built templates to hackathons violates our trust and leads to removal.",
              },
              {
                title: "Zero Commercial Spam or Self-Promotion",
                desc: "No crypto shills, affiliate links, or unvetted course sales. Keep conversations focused on engineering and building.",
              },
            ].map((rule, idx) => (
              <div
                key={idx}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-6 flex items-start gap-4"
              >
                <span className="font-mono text-sm font-bold text-brand-red pt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-brand-ink">
                    {rule.title}
                  </h4>
                  <p className="mt-1 text-xs text-brand-neutral leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/code-of-conduct" variant="outline" size="sm">
              READ FULL CODE OF CONDUCT
            </Button>
          </div>
        </Container>
      </section>

      {/* Final Join CTA */}
      <section className="py-20 bg-brand-ink text-white text-center">
        <Container size="narrow">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Step Into the Circle
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-light/80 max-w-lg mx-auto">
            Your peers are building right now. Join the WhatsApp group and say hello in the #introductions channel.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
              isExternal
              variant="primary"
              size="lg"
              className="gap-2"
            >
              JOIN THE WHATSAPP COMMUNITY
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
