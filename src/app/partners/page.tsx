import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { partnerTiers, partnershipProcess } from "@/data/partners";
import { PartnerInquiryForm } from "@/components/forms/PartnerInquiryForm";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Users2,
  Code2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us — Developer Ecosystem Collaboration",
  description:
    "Partner with Catalyst Crew to sponsor hackathon tracks, activate your developer APIs, and recruit high-agency engineering talent.",
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-ink text-white py-18 py-20 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                STRATEGIC COLLABORATION
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
              BUILD WITH US.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-light/80 leading-relaxed font-sans">
              Engage directly with the most relentless student builders, systems engineers, and open-source contributors in India. Authentic developer adoption over vanity banner placements.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Partner & Value Metrics */}
      <section className="py-20 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="THE VALUE PROPOSITION"
            title="Why Companies Partner With Catalyst Crew"
            description="Traditional campus recruitment and developer marketing is broken. We offer direct, high-intent developer activations that yield working code and hireable candidates."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 shadow-brutal-sm">
              <Code2 className="h-8 w-8 text-brand-red mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                Real API & Tool Adoption
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                Builders integrate your APIs, SDKs, or cloud databases into production hackathon builds, giving your devrel team actionable friction logs and real repos.
              </p>
            </div>

            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 shadow-brutal-sm">
              <Users2 className="h-8 w-8 text-brand-red mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                High-Agency Talent Funnel
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                Observe engineering candidates solve ambiguous problems, review their pull requests, and hire builders with proven track records before competitors notice them.
              </p>
            </div>

            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 shadow-brutal-sm">
              <TrendingUp className="h-8 w-8 text-brand-red mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                Verified Brand Authority
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                Establish your brand as an engineering-first leader through co-authored technical teardowns, workshop masterclasses, and keynote stages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8 Partnership Tiers */}
      <section className="py-20 bg-brand-white border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="TAILORED OPPORTUNITIES"
            title="Partnership Tiers & Tracks"
            description="From specialized API bounties to title event co-presentation, choose the tier that aligns with your quarterly developer goals."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-6 flex flex-col justify-between transition-all hover:border-brand-ink/40"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-brand-red">
                    {tier.tagline}
                  </p>
                  <p className="mt-3 text-xs text-brand-neutral leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-brand-light/80 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-neutral block">
                      Deliverables Include:
                    </span>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-brand-ink/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-brand-light/60 text-[11px] text-brand-neutral font-mono">
                  Ideal for: {tier.idealFor}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration Lifecycle Process */}
      <section className="py-20 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="EXECUTION ROADMAP"
            title="The Collaboration Lifecycle"
            description="A transparent, data-driven 5-step operational framework to ensure high-return activations."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partnershipProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-5 space-y-2 text-center sm:text-left"
              >
                <div className="font-mono text-xs font-bold text-brand-red">
                  {item.step}
                </div>
                <h4 className="font-display text-lg font-bold text-brand-ink">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-neutral leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Partner Inquiry Form */}
      <section className="py-20 bg-brand-white border-b-3 border-brand-ink" id="inquiry-form">
        <Container size="narrow">
          <SectionHeader
            align="center"
            eyebrow="LET&apos;S CONNECT"
            title="Start a Partnership Conversation"
            description="Fill out the brief below and our founder/COO team will respond within 24 hours to schedule an introductory call."
          />

          <div className="mt-10">
            <PartnerInquiryForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
