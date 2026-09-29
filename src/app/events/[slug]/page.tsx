import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { eventsData } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  MessageCircle,
  FileText,
  Layers,
  Award,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Building2,
  Check,
} from "lucide-react";

interface EventDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: EventDetailPageProps): Metadata {
  const event = eventsData.find((e) => e.slug === params.slug);
  if (!event) return { title: "Quest Not Found" };

  return {
    title: `${event.title} — Official Hackathon | Catalyst Crew`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [{ url: event.image }],
    },
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = eventsData.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const statusBadgeVariant =
    event.status === "live"
      ? "live"
      : event.status === "upcoming"
      ? "upcoming"
      : "ended";

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      {/* Top Back Navigation Bar */}
      <div className="border-b border-brand-light bg-brand-white py-3">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-brand-neutral hover:text-brand-ink transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to All Quests
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-brand-neutral/80">Organizer:</span>
              <div className="relative h-6 w-28">
                <Image
                  src="/catalyst-crew-logo.png"
                  alt="Catalyst Crew Dev Community"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-ink text-white pt-8 pb-14 sm:pt-10 sm:pb-16 border-b-3 border-brand-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-grid-dark pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-brand-red/15 blur-3xl rounded-full pointer-events-none" />

        <Container>
          {/* Official Hackathon Poster Banner Showcase */}
          <div className="relative mb-8 w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl group ring-1 ring-brand-red/20 transition-all hover:ring-brand-red/40">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-red/30 via-transparent to-brand-red/30 opacity-40 blur-xl pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative w-full aspect-[1024/385] overflow-hidden bg-black">
              <Image
                src={event.image}
                alt={`${event.title} Official Hackathon Poster - Ideate, Build, Impact`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            {/* Bottom Meta Bar of the Banner Frame */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-brand-soft/95 backdrop-blur-md border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2 text-brand-light/90">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                <span className="font-semibold text-white">OFFICIAL QUEST POSTER</span>
                <span className="text-brand-light/40">•</span>
                <span className="text-amber-400 font-semibold">10-Hour Live Build Sprint</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light/70 text-[11px] sm:text-xs">
                <span>Fully Online</span>
                <span className="text-brand-light/30">|</span>
                <span className="text-emerald-400 font-bold">₹24,000 Prize Pool</span>
                <span className="text-brand-light/30">|</span>
                <a
                  href={event.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-light hover:text-white underline transition-colors"
                >
                  <span>View Full Art</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={statusBadgeVariant}>
                  {event.status === "live" ? "REGISTRATIONS OPEN" : event.status.toUpperCase()}
                </Badge>
                <span className="text-xs font-mono uppercase text-brand-light/60">
                  {event.category}
                </span>
                <span className="text-brand-light/40">•</span>
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  {event.tagline}
                </span>
                <span className="text-brand-light/40">•</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  CatalystCrew × Rosterwa
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {event.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-light/85 font-sans leading-relaxed max-w-2xl">
                {event.description}
              </p>

              {/* Key Specs Pills */}
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-brand-light/90">
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-brutal border border-brand-soft">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-brutal border border-brand-soft">
                  <MapPin className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.mode} • Online</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-brutal border border-brand-soft">
                  <Users className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.teamSize}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Card on Right */}
            <div className="lg:col-span-4 rounded-brutal brutal-card border border-brand-soft bg-brand-soft/95 p-6 space-y-5 backdrop-blur-md shadow-2xl">
              <div className="border-b-3 border-brand-ink/80 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-light/60">
                  Total Cash Prize Pool
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 mt-0.5">
                  ₹24,000
                </div>
                <p className="text-[11px] font-mono text-brand-light/70 mt-1">
                  1st: ₹12K • 2nd: ₹8K • 3rd: ₹4K + E-Certificates
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-brand-light/85">
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Round 1 (PPT):</span>
                  <span className="text-emerald-400 font-semibold">100% Free Entry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Round 2 (Semi-Final):</span>
                  <span className="font-semibold text-white">₹80 / member</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Team Size:</span>
                  <span className="font-semibold text-white">4 to 5 Members</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Mode:</span>
                  <span className="font-semibold text-white">Fully Online</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Button
                  href={event.registrationUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="w-full justify-center gap-2 shadow-lg"
                >
                  <span>REGISTER ON UNSTOP</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>

                <Button
                  href={event.whatsappUrl}
                  isExternal
                  variant="secondary"
                  size="md"
                  className="w-full justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold border-none"
                >
                  <MessageCircle className="h-4 w-4" />
                  JOIN OFFICIAL WHATSAPP
                </Button>

                <p className="text-[10px] font-mono text-center text-brand-light/60 leading-tight">
                  Mandatory: Announcements, screening links & PPT portal are shared via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MANDATORY OFFICIAL COMMUNICATION NOTICE BANNER */}
      <section className="bg-emerald-950/40 border-b border-emerald-500/20 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-brand-ink/90 font-sans">
                <strong className="font-semibold text-emerald-800">Official Communication Channel:</strong> All registered participants must join the WhatsApp group for deadlines, screening links, and instructions.
              </p>
            </div>
            <a
              href={event.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-emerald-700 hover:text-emerald-900 font-bold shrink-0 underline uppercase tracking-wider"
            >
              <span>Join WhatsApp Community</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Container>
      </section>

      {/* Main Details Body */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 cols): Comprehensive Event Documentation */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview & About */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-neutral font-semibold">
                    HACKATHON OVERVIEW
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-ink">
                  Ideate. Build. Impact.
                </h2>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {event.description}
                </p>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {event.about}
                </p>
              </div>

              {/* 10 Hackathon Innovation Themes */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold">
                      CHALLENGE TRACKS
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-ink mt-0.5">
                      10 Innovation Themes
                    </h2>
                  </div>
                  <Badge variant="default" size="sm">
                    Open to all tracks
                  </Badge>
                </div>
                <p className="text-xs text-brand-neutral">
                  Teams can select any of the 10 official themes below for their Round 1 PPT and final build prototype.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {event.themes.map((theme, idx) => (
                    <div
                      key={idx}
                      className="group rounded-lg border-3 border-brand-ink/80 bg-brand-cream/30 p-4 transition-all hover:bg-brand-white hover:border-brand-red/50 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-ink text-[10px] font-mono font-bold text-white group-hover:bg-brand-red transition-colors">
                          {idx + 1}
                        </span>
                        <h3 className="font-display text-sm font-bold text-brand-ink">
                          {theme.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-xs text-brand-neutral leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Round Progression Details */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold">
                      STRUCTURE
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-ink mt-0.5">
                      The 3-Round Journey
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-brand-neutral">
                    Fully Online • Multi-Stage Evaluation
                  </span>
                </div>

                <div className="space-y-4 pt-1">
                  {event.rounds.map((round, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-lg border-3 border-brand-ink/80 bg-brand-cream/20 p-5 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-white text-xs font-mono font-bold">
                            {idx + 1}
                          </span>
                          <h4 className="font-display text-base font-bold text-brand-ink">
                            {round.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-brand-soft/10 text-brand-ink border-3 border-brand-ink px-2.5 py-0.5 text-[11px] font-mono">
                            {round.duration}
                          </span>
                          {round.fee && (
                            <span className="rounded bg-brand-ink text-white px-2 py-0.5 text-[11px] font-mono font-semibold">
                              {round.fee}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-brand-neutral leading-relaxed pl-8">
                        {round.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Round 1 PPT Structure (Slide 1 to 7) */}
              <div className="rounded-brutal brutal-card border-2 border-brand-red/30 bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold">
                      ROUND 1 MANDATORY FORMAT
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-ink">
                      7-Slide PPT Submission Guide
                    </h2>
                  </div>
                </div>

                <p className="text-xs text-brand-neutral leading-relaxed">
                  To ensure equitable and comprehensive screening in Round 1, all teams must structure their idea presentation strictly according to these 7 slides before the <strong>20 October 2026</strong> deadline.
                </p>

                <div className="space-y-3 pt-2">
                  {event.pptStructure.map((slide) => (
                    <div
                      key={slide.slideNumber}
                      className="flex items-start gap-3 rounded-lg border-3 border-brand-ink/70 bg-brand-cream/30 p-3.5"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-ink text-white text-xs font-mono font-bold">
                        S{slide.slideNumber}
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-brand-ink">
                          {slide.title}
                        </h4>
                        <p className="text-xs text-brand-neutral mt-0.5 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Timeline */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Event Timeline & Key Deadlines
                </h2>
                <div className="space-y-4">
                  {event.timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 border-l-2 border-brand-red pl-4 py-1"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-brand-red uppercase">
                          {item.date}
                        </span>
                        <h4 className="font-display text-base font-bold text-brand-ink">
                          {item.phase}
                        </h4>
                        <p className="text-xs text-brand-neutral mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prizes Breakdown */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-brand-ink">
                    Prizes & Recognition
                  </h2>
                  <span className="font-mono text-xs text-amber-500 font-bold">
                    ₹28,000 Total Cash Pool
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.prizesBreakdown.map((prize, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border-3 border-brand-ink/80 bg-brand-cream/20 p-5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-neutral font-semibold">
                          {prize.rank}
                        </span>
                        <Trophy className="h-4 w-4 text-amber-500" />
                      </div>
                      <div className="font-display text-2xl font-extrabold text-brand-ink">
                        {prize.amount}
                      </div>
                      <p className="text-xs text-brand-neutral/80 pt-1 leading-relaxed">
                        {prize.perks}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Rules & Elimination */}
              <div className="space-y-6">
                {/* Event Rules */}
                <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                  <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-brand-red" />
                    Official Hackathon Rules
                  </h2>
                  <ul className="space-y-2.5 pt-2 text-xs text-brand-neutral leading-relaxed">
                    {event.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Elimination Criteria Alert Box */}
                <div className="rounded-brutal brutal-card border border-red-200 bg-red-50/60 p-7 sm:p-8 space-y-4">
                  <h3 className="font-display text-xl font-bold text-red-900 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    Elimination & Disqualification Policy
                  </h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    Teams will face immediate disqualification from Catalyst Hack 2026 under any of the following circumstances:
                  </p>
                  <ul className="space-y-2 text-xs text-red-800/90 list-disc list-inside">
                    {event.eliminationCriteria.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* About the Organizer */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-light/60 pb-3">
                  <div className="flex items-center gap-2 text-brand-neutral">
                    <Building2 className="h-4 w-4 text-brand-red" />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      ABOUT THE ORGANIZER
                    </span>
                  </div>
                  <div className="relative h-9 w-40">
                    <Image
                      src="/catalyst-crew-logo.png"
                      alt="Catalyst Crew Dev Community"
                      fill
                      className="object-contain object-left sm:object-right"
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-ink">
                  {event.organizer}
                </h3>
                <p className="text-xs text-brand-neutral leading-relaxed">
                  {event.organizerAbout}
                </p>
              </div>

              {/* FAQs */}
              {event.faqs.length > 0 && (
                <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-5">
                  <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-brand-red" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4 pt-1">
                    {event.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-brand-light/60 pb-3.5 last:border-none">
                        <h4 className="font-display text-sm font-bold text-brand-ink">
                          {faq.question}
                        </h4>
                        <p className="mt-1 text-xs text-brand-neutral leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Sticky Sidebar with Judging Marking, Mentors & CTA */}
            <div className="lg:col-span-4 space-y-6">
              {/* Judging Criteria Marking Table */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 shadow-brutal-sm space-y-4">
                <div className="flex items-center justify-between border-b border-brand-light/70 pb-3">
                  <h3 className="font-display text-lg font-bold text-brand-ink">
                    Judging Criteria
                  </h3>
                  <span className="font-mono text-xs font-bold text-brand-red">
                    100% Total
                  </span>
                </div>
                <div className="space-y-3">
                  {event.judgingCriteria.map((item, idx) => (
                    <div key={idx} className="border-b border-brand-light/50 pb-2.5 last:border-none">
                      <div className="flex justify-between items-center text-xs font-bold text-brand-ink">
                        <span>{item.title}</span>
                        <span className="font-mono text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                          {item.weight}
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-neutral mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentors Panel */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 shadow-brutal-sm space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  Mentors & Evaluation Jury
                </h3>
                <div className="space-y-3">
                  {event.mentors.map((mentor, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-brand-soft shrink-0">
                        <Image
                          src={mentor.avatar}
                          alt={mentor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold text-brand-ink">
                          {mentor.name}
                        </div>
                        <div className="text-[11px] text-brand-neutral">
                          {mentor.role} • {mentor.org}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Sticky Action Box */}
              <div className="rounded-brutal brutal-card bg-brand-ink text-white p-6 space-y-4 border border-brand-soft shadow-xl">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono uppercase font-bold">
                  <Sparkles className="h-4 w-4" />
                  <span>REGISTRATION OPEN</span>
                </div>
                <h4 className="font-display text-lg font-bold">
                  Ready to compete in Catalyst Hack 2026?
                </h4>
                <p className="text-xs text-brand-light/75 leading-relaxed">
                  Join the official WhatsApp group to register your team, submit your 7-slide PPT, and receive all live updates.
                </p>

                <div className="space-y-2.5">
                  <Button
                    href={event.registrationUrl}
                    isExternal
                    variant="primary"
                    size="md"
                    className="w-full justify-center gap-2 shadow-lg"
                  >
                    <span>REGISTER ON UNSTOP</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>

                  <Button
                    href={event.whatsappUrl}
                    isExternal
                    variant="secondary"
                    size="md"
                    className="w-full justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold border-none"
                  >
                    <MessageCircle className="h-4 w-4" />
                    JOIN OFFICIAL WHATSAPP
                  </Button>
                </div>

                <div className="pt-2 border-t border-brand-soft/70 text-[11px] font-mono text-brand-light/50 text-center">
                  Team Size: 4 – 5 Members • Fully Online
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
