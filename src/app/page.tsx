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
import { SpotlightBackground } from "@/components/ui/SpotlightBackground";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { ChoosePathSection } from "@/components/ui/ChoosePathSection";
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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-ink text-white pt-12 pb-18 md:pt-20 md:pb-24 border-b border-brand-soft">
        <SpotlightBackground />

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
                BUILD WHAT&apos;S NEXT<span className="text-brand-red">.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-brand-light/80 max-w-xl leading-relaxed font-sans">
                Catalyst Crew is an authentic developer community for builders, innovators, and creators who don&apos;t just consume technology — they build with it.
              </p>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8 w-full sm:w-auto relative z-20">
                <MagneticWrapper>
                  <Button
                    href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
                    isExternal
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_30px_rgba(230,57,70,0.5)] transition-shadow"
                  >
                    JOIN THE CREW
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </MagneticWrapper>

                <MagneticWrapper>
                  <Button
                    href="/events"
                    variant="dark"
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-sm border-brand-light/20 bg-brand-soft/80 hover:bg-brand-soft hover:border-brand-light/40 backdrop-blur-md"
                  >
                    <Flame className="h-4 w-4 text-brand-red" />
                    EXPLORE EVENTS
                  </Button>
                </MagneticWrapper>
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
      <ChoosePathSection />

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

          <div className="mt-10">
            {/* Featured Hero Event */}
            <div className="rounded-3xl border border-brand-ink/20 bg-brand-ink overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-black">
                  <Image
                    src={featuredEvents[0].image}
                    alt={featuredEvents[0].title}
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <Badge variant="live">REGISTRATIONS OPEN</Badge>
                    <span className="rounded bg-black/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white border border-white/10">
                      Flagship Hackathon
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-brand-ink/90 backdrop-blur-md border border-white/10 p-5 text-white shadow-xl">
                    <div className="text-[10px] font-mono uppercase text-brand-light/60 tracking-wider mb-1">
                      Total Cash Prize Pool
                    </div>
                    <div className="text-2xl font-display font-extrabold text-amber-400">
                      ₹28,000 Cash Pool
                    </div>
                    <div className="text-xs font-mono text-brand-light/80 mt-1">
                      1st: ₹16K • 2nd: ₹8K • 3rd: ₹4K + E-Certificates
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-brand-ink text-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-red font-semibold uppercase tracking-wider">
                      <span>{featuredEvents[0].tagline}</span>
                      <span>•</span>
                      <span>{featuredEvents[0].mode} (Discord)</span>
                    </div>

                    <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      <Link href={`/events/${featuredEvents[0].slug}`} className="hover:text-brand-red transition-colors">
                        {featuredEvents[0].title}
                      </Link>
                    </h3>

                    <p className="text-base text-brand-light/80 leading-relaxed max-w-xl">
                      {featuredEvents[0].description}
                    </p>

                    {/* Metadata pill grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs font-mono">
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                        <span className="text-[10px] text-white/50 uppercase block mb-1">Starts On</span>
                        <strong className="text-white">25 Sep 2026</strong>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                        <span className="text-[10px] text-white/50 uppercase block mb-1">PPT Deadline</span>
                        <strong className="text-white">20 Oct 2026</strong>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-3 col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-white/50 uppercase block mb-1">Team Size</span>
                        <strong className="text-white">4 – 5 Members</strong>
                      </div>
                    </div>

                    {/* 10 Themes Preview pills */}
                    <div className="pt-4">
                      <span className="text-[10px] font-mono uppercase text-brand-red tracking-wider block mb-2 font-semibold">
                        Challenge Tracks (10 Innovation Themes):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {featuredEvents[0].themes?.slice(0, 5).map((theme) => (
                          <span
                            key={theme.title}
                            className="rounded bg-white/10 text-white border border-white/20 px-2.5 py-1 text-[10px] font-mono"
                          >
                            {theme.title}
                          </span>
                        ))}
                        <span className="rounded bg-brand-red text-white border border-brand-red px-2.5 py-1 text-[10px] font-mono font-bold shadow-[0_0_10px_rgba(230,57,70,0.4)]">
                          +5 More Tracks
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                    <Button
                      href={featuredEvents[0].registrationUrl}
                      isExternal
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto justify-center gap-2 shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_30px_rgba(230,57,70,0.5)] transition-shadow"
                    >
                      <span>REGISTER ON UNSTOP</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>

                    <Button
                      href={featuredEvents[0].whatsappUrl}
                      isExternal
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold border-none shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      JOIN WHATSAPP GROUP
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Events Grid (Minimal style) */}
            {featuredEvents.length > 1 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredEvents.slice(1).map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            )}
          </div>
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

      {/* TESTIMONIAL SLIDER */}
      <TestimonialSlider />

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
