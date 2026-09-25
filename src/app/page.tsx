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

  const paths = [
    {
      role: "BUILDER",
      subtitle: "Learn. Code. Ship.",
      desc: "For hands-on developers who want to master cutting-edge stacks, build non-trivial systems, and ship open-source software.",
      ctaText: "Join Community",
      ctaHref: "/community",
      icon: Code,
      badge: "LEARN & BUILD",
    },
    {
      role: "COMPETITOR",
      subtitle: "Hackathons. Challenges. Bounties.",
      desc: "For relentless hackers ready to pressure-test architecture in 48-hour build sprints, win bounties, and get recognized.",
      ctaText: "Explore Quests",
      ctaHref: "/events",
      icon: Trophy,
      badge: "COMPETE & WIN",
    },
    {
      role: "PARTNER",
      subtitle: "Build with the next generation.",
      desc: "For startups, dev-tool brands, and tech companies seeking high-agency developer adoption, hackathon tracks, and hiring funnels.",
      ctaText: "Partner With Us",
      ctaHref: "/partners",
      icon: Briefcase,
      badge: "HIRE & SPONSOR",
    },
  ];


  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-ink text-white pt-12 pb-18 md:pt-20 md:pb-24 border-b border-brand-soft">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-brand-cream/5 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column (7 cols): Main Headline & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status indicator pill */}
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-soft bg-brand-soft/90 px-3.5 py-1.5 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-brand-light/80 uppercase">WORLD LOADED</span>
                <span className="text-brand-light/30">•</span>
                <span className="text-emerald-400 font-semibold uppercase">COMMUNITY ONLINE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
                BUILD WHAT&apos;S <span className="text-brand-red">NEXT</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-brand-light/80 max-w-xl leading-relaxed font-sans">
                Catalyst Crew is an authentic developer community for builders, innovators, and creators who don&apos;t just consume technology — they build with it.
              </p>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
                  isExternal
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-sm"
                >
                  JOIN THE CREW
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button
                  href="/events"
                  variant="dark"
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-sm border-brand-light/20 bg-brand-soft/80 hover:bg-brand-soft hover:border-brand-light/40"
                >
                  <Flame className="h-4 w-4 text-brand-red" />
                  EXPLORE EVENTS
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-brand-light/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-red" />
                  <span>Catalyst Hack 2026 Online</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-red" />
                  <span>₹24,000 Cash Pool</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-red" />
                  <span>Working Prototypes Only</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Event Showcase Terminal Window */}
            <div className="lg:col-span-5 w-full">
              <HeroEventCarousel events={eventsData} />
            </div>
          </div>

          {/* Quick Metrics Bar across full width */}
          <div className="mt-14 pt-8 border-t border-brand-soft/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                2,500+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-brand-light/60 mt-1">
                Active Builders
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-brand-red">
                ₹3,25,000+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-brand-light/60 mt-1">
                Bounties Awarded
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                60+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-brand-light/60 mt-1">
                Shipped Builds
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">
                40+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-brand-light/60 mt-1">
                Partner Colleges
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MINIMAL PARTNER LOGO STRIP */}
      <PartnerLogoCloud />

      {/* CHOOSE YOUR PATH (PRD Section 8) */}
      <section className="py-20 bg-brand-cream border-b border-brand-light/80">
        <Container>
          <SectionHeader
            eyebrow="YOUR STARTING POINT"
            title="Choose Your Path"
            description="Whether you're looking to ship code, win hackathons, or tap into student developer talent, Catalyst Crew has a dedicated track for you."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path) => (
              <div
                key={path.role}
                className="group relative flex flex-col justify-between rounded-card border border-brand-light bg-brand-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-ink/40 hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white group-hover:bg-brand-red transition-colors">
                      <path.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="default" size="sm">
                      {path.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-ink">
                    {path.role}
                  </h3>
                  <div className="text-xs font-mono font-semibold uppercase text-brand-red mt-1">
                    {path.subtitle}
                  </div>
                  <p className="mt-3 text-sm text-brand-neutral leading-relaxed">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-brand-light/60">
                  <Button
                    href={path.ctaHref}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between group-hover:border-brand-ink group-hover:bg-brand-ink group-hover:text-white transition-all"
                  >
                    <span>{path.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT IS CATALYST CREW & BRAND PROMISE (PRD Section 3 & 8) */}
      <section className="py-20 bg-brand-white border-b border-brand-light/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-neutral">
                  WHAT IS CATALYST CREW
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-ink leading-tight">
                &ldquo;Catalyst Crew is built for people who don&apos;t just consume technology — they build with it.&rdquo;
              </h2>

              <p className="text-base text-brand-neutral leading-relaxed">
                We are tired of passive tech meetups that leave developers with empty certificates and zero git commits. Catalyst Crew is engineered from the ground up to foster real agency, authentic technical grit, and tangible career outcomes.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Practical over purely theoretical",
                  "Builders over passive audiences",
                  "Community over isolated learning",
                  "Real projects over vanity metrics",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs font-display font-medium text-brand-ink">
                    <CheckCircle className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/about" variant="outline" size="md">
                  READ OUR FULL MANIFESTO
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-ink rounded-card p-7 sm:p-9 text-brand-light border border-brand-soft shadow-dark">
              <div className="flex items-center justify-between pb-4 border-b border-brand-soft">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-brand-red" />
                  <span className="font-mono text-xs text-white">catalyst_core_values.ts</span>
                </div>
                <span className="text-[10px] font-mono text-brand-light/40">V1.0.0</span>
              </div>

              <div className="mt-6 space-y-5 font-mono text-xs leading-relaxed">
                <div>
                  <span className="text-brand-red font-semibold">01. LEARN</span>
                  <p className="text-brand-light/70 mt-1">
                    Master modern distributed systems, agentic AI loops, memory safety, and high-performance frontend primitives.
                  </p>
                </div>
                <div>
                  <span className="text-brand-red font-semibold">02. BUILD</span>
                  <p className="text-brand-light/70 mt-1">
                    Write clean, tested, idiomatic software with continuous commits and public repositories.
                  </p>
                </div>
                <div>
                  <span className="text-brand-red font-semibold">03. COLLABORATE</span>
                  <p className="text-brand-light/70 mt-1">
                    Form multi-disciplinary squads pairing systems architects with product designers.
                  </p>
                </div>
                <div>
                  <span className="text-brand-red font-semibold">04. INNOVATE</span>
                  <p className="text-brand-light/70 mt-1">
                    Solve real technical friction. Pitch working software, not speculative slide decks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CURRENT QUESTS / EVENTS PREVIEW (PRD Section 8 & 10) */}
      <section className="py-20 bg-brand-white border-b border-brand-light/80">
        <Container>
          <SectionHeader
            eyebrow="ACTIVE HACKATHONS & CHALLENGES"
            title="Current Quests"
            description="Compete in national build sprints, sharpen systems engineering skills in masterclasses, and win cash bounties."
            action={
              <Button href="/events" variant="dark" size="sm" className="gap-2">
                VIEW ALL QUESTS
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            }
          />

          {featuredEvents.length === 1 ? (
            <div className="mt-10 rounded-card border border-brand-light bg-brand-white overflow-hidden shadow-subtle hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-brand-ink">
                  <Image
                    src={featuredEvents[0].image}
                    alt={featuredEvents[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="live">REGISTRATIONS OPEN</Badge>
                    <span className="rounded bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white">
                      Flagship Hackathon
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-brand-ink/85 backdrop-blur-md border border-white/10 p-3.5 text-white">
                    <div className="text-[10px] font-mono uppercase text-brand-light/60 tracking-wider">
                      Total Cash Prize Pool
                    </div>
                    <div className="text-xl font-display font-extrabold text-amber-400">
                      ₹28,000 Cash Pool
                    </div>
                    <div className="text-[11px] font-mono text-brand-light/80 mt-0.5">
                      1st: ₹16K • 2nd: ₹8K • 3rd: ₹4K + E-Certificates
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-red font-semibold uppercase tracking-wider">
                      <span>{featuredEvents[0].tagline}</span>
                      <span>•</span>
                      <span>{featuredEvents[0].mode} (Discord)</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-ink">
                      <Link href={`/events/${featuredEvents[0].slug}`} className="hover:text-brand-red transition-colors">
                        {featuredEvents[0].title}
                      </Link>
                    </h3>

                    <p className="text-sm text-brand-neutral leading-relaxed">
                      {featuredEvents[0].description}
                    </p>

                    {/* Metadata pill grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-mono text-brand-neutral">
                      <div className="rounded bg-brand-cream/60 border border-brand-light/80 p-2.5">
                        <span className="text-[10px] text-brand-neutral/60 uppercase block">Starts On</span>
                        <strong className="text-brand-ink">25 Sep 2026</strong>
                      </div>
                      <div className="rounded bg-brand-cream/60 border border-brand-light/80 p-2.5">
                        <span className="text-[10px] text-brand-neutral/60 uppercase block">PPT Deadline</span>
                        <strong className="text-brand-ink">20 Oct 2026</strong>
                      </div>
                      <div className="rounded bg-brand-cream/60 border border-brand-light/80 p-2.5 col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-brand-neutral/60 uppercase block">Team Size</span>
                        <strong className="text-brand-ink">4 – 5 Members</strong>
                      </div>
                    </div>

                    {/* 10 Themes Preview pills */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase text-brand-neutral/70 tracking-wider block mb-1.5 font-semibold">
                        Challenge Tracks (10 Innovation Themes):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredEvents[0].themes?.slice(0, 5).map((theme) => (
                          <span
                            key={theme.title}
                            className="rounded bg-brand-soft/10 text-brand-ink border border-brand-light px-2 py-0.5 text-[10px] font-mono"
                          >
                            {theme.title}
                          </span>
                        ))}
                        <span className="rounded bg-brand-cream text-brand-red border border-brand-light px-2 py-0.5 text-[10px] font-mono font-bold">
                          +5 More Tracks
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-brand-light/80 flex flex-wrap items-center gap-3">
                    <Button
                      href={featuredEvents[0].registrationUrl}
                      isExternal
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto justify-center gap-2 shadow-md"
                    >
                      <span>REGISTER ON UNSTOP</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>

                    <Button
                      href={featuredEvents[0].whatsappUrl}
                      isExternal
                      variant="secondary"
                      size="md"
                      className="w-full sm:w-auto justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold border-none"
                    >
                      <MessageCircle className="h-4 w-4" />
                      JOIN WHATSAPP GROUP
                    </Button>

                    <Button
                      href={`/events/${featuredEvents[0].slug}`}
                      variant="dark"
                      size="md"
                      className="w-full sm:w-auto justify-center gap-2"
                    >
                      QUEST OVERVIEW
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* BUILDER SHOWCASE PREVIEW (PRD Section 8 & 13) */}
      <section className="py-20 bg-brand-cream border-b border-brand-light/80">
        <Container>
          <SectionHeader
            eyebrow="PROOF OF WORK"
            title="Builder Showcase Preview"
            description="Real software designed and shipped by community developers during Catalyst Crew hackathons and cohorts."
            action={
              <Button href="/showcase" variant="secondary" size="sm" className="gap-2">
                VIEW ALL BUILDS
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNER BANNER (PRD Section 8 & 14) */}
      <section className="py-20 bg-brand-ink text-white border-b border-brand-soft">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                COLLABORATION PROPOSITION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                BUILD WITH US.
              </h2>
              <p className="text-base text-brand-light/80 max-w-2xl leading-relaxed">
                We believe in genuine developer activation over vanity logo placement. Partner with Catalyst Crew to launch custom API tracks, host technical workshops, and recruit top-tier student builders through their actual code commits.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                href="/partners"
                variant="primary"
                size="md"
                className="w-full justify-center"
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

      {/* FINAL CALL TO ACTION (PRD Section 8) */}
      <section className="relative py-24 bg-brand-cream overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <Container size="narrow" className="relative z-10">
          <Badge variant="red" size="md" className="mb-4">
            NEXT QUEST BEGINS NOW
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-ink tracking-tight">
            YOUR BUILD HASN&apos;T STARTED YET.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-neutral max-w-xl mx-auto leading-relaxed">
            Stop coding in isolation. Join thousands of student developers, systems engineers, and innovators across India building what&apos;s next.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
              isExternal
              variant="primary"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              JOIN THE CREW (WHATSAPP)
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/events"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              BROWSE QUESTS
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
