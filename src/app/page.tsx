import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EventCard } from "@/components/events/EventCard";
import { HeroEventCarousel } from "@/components/events/HeroEventCarousel";
import { ProjectCard } from "@/components/showcase/ProjectCard";
import { PartnerLogoCloud } from "@/components/ui/PartnerLogoCloud";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { ChoosePathSection } from "@/components/ui/ChoosePathSection";
import { BrandPromiseSection } from "@/components/ui/BrandPromiseSection";
import { EventTicketsSection } from "@/components/ui/EventTicketsSection";
import { ShowcaseSection } from "@/components/ui/ShowcaseSection";
import { ImplosionCTA } from "@/components/ui/ImplosionCTA";
import { eventsData } from "@/data/events";
import { projectsData } from "@/data/projects";
import {
  Code,
  Trophy,
  Briefcase,
  Flame,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  Users2,
  GitBranch,
  Rocket,
  Compass,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const featuredEvents = eventsData.slice(0, 3);
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION — Dark bg, neo-brutalist accents */}
      <section className="relative overflow-hidden bg-brand-ink text-white border-b-3 border-brand-ink">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

        <Container className="relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status pill — brutalist */}
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-brutal border-2 border-brand-light/30 bg-brand-soft px-4 py-2 text-xs font-display font-bold uppercase tracking-wider shadow-[3px_3px_0_0_rgba(216,58,53,0.4)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-brand-light/80">WORLD LOADED</span>
                <span className="text-brand-light/30">•</span>
                <span className="text-emerald-400 font-semibold">COMMUNITY ONLINE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
                BUILD WHAT&apos;S NEXT<span className="text-brand-red">.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-brand-light/80 max-w-xl leading-relaxed font-sans">
                Catalyst Crew is an authentic developer community for builders, innovators, and creators who don&apos;t just consume technology — they build with it.
              </p>

              {/* CTAs — brutalist buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto relative z-20">
                <MagneticWrapper>
                  <Button
                    href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
                    isExternal
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm border-brand-light/30"
                  >
                    JOIN THE CREW
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </MagneticWrapper>

                <MagneticWrapper>
                  <Button
                    href="/events"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm"
                  >
                    <Flame className="h-4 w-4" />
                    EXPLORE EVENTS
                  </Button>
                </MagneticWrapper>
              </div>

              {/* Trust badges — brutalist pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: CheckCircle, text: "Catalyst Hack 2026 Online" },
                  { icon: CheckCircle, text: "₹24,000 Cash Pool" },
                  { icon: CheckCircle, text: "Working Prototypes Only" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="inline-flex items-center gap-1.5 rounded-brutal border border-brand-light/20 bg-brand-soft/80 px-3 py-1.5 text-xs font-display font-bold text-brand-light/70"
                  >
                    <badge.icon className="h-3.5 w-3.5 text-brand-red" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Event Carousel */}
            <div className="lg:col-span-5 w-full">
              <HeroEventCarousel events={eventsData} />
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 pt-8 border-t-2 border-brand-light/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { value: "2,500+", label: "Active Builders", color: "text-white" },
              { value: "₹3,25,000+", label: "Bounties Awarded", color: "text-brand-red" },
              { value: "60+", label: "Shipped Builds", color: "text-white" },
              { value: "40+", label: "Partner Colleges", color: "text-emerald-400" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-brutal border border-brand-light/10 bg-brand-soft/50 p-4">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase font-display font-bold tracking-wider text-brand-light/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MINIMAL PARTNER LOGO STRIP */}
      <PartnerLogoCloud />

      {/* CHOOSE YOUR PATH */}
      <ChoosePathSection />

      {/* BRAND PROMISE */}
      <BrandPromiseSection />

      {/* CURRENT QUESTS / EVENTS */}
      <EventTicketsSection />

      {/* BUILDER SHOWCASE */}
      <ShowcaseSection />

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* PARTNER BANNER */}
      <section className="py-20 bg-brand-ink text-white border-b-3 border-brand-ink">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-light/20 bg-brand-soft px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand-light/80 shadow-brutal-sm">
                Collaboration Proposition
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                BUILD WITH US<span className="text-brand-red">.</span>
              </h2>
              <p className="text-base text-brand-light/70 max-w-2xl leading-relaxed font-sans">
                We believe in genuine developer activation over vanity logo placement. Partner with Catalyst Crew to launch custom API tracks, host technical workshops, and recruit top-tier student builders through their actual code commits.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                href="/partners"
                variant="primary"
                size="md"
                className="w-full justify-center border-brand-light/30"
              >
                PARTNER WITH CATALYST CREW
              </Button>
              <Button
                href="/contact"
                variant="dark"
                size="md"
                className="w-full justify-center border-brand-light/20"
              >
                SCHEDULE AN INTRO CALL
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <ImplosionCTA />
    </div>
  );
}
