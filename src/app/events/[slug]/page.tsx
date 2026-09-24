import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { eventsData } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Code2,
  HelpCircle,
  ShieldAlert,
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
    title: `${event.title} — Quest Details`,
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
      {/* Back Navigation Bar */}
      <div className="border-b border-brand-light bg-brand-white py-3">
        <Container>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-brand-neutral hover:text-brand-ink transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Quests
          </Link>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-ink text-white py-14 sm:py-16 border-b border-brand-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-grid-dark pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant={statusBadgeVariant}>
                  {event.status.toUpperCase()}
                </Badge>
                <span className="text-xs font-mono uppercase text-brand-light/60">
                  {event.category}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {event.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-light/80 font-sans leading-relaxed">
                {event.tagline}
              </p>

              {/* Key Specs Pills */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-brand-light/90">
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-button border border-brand-soft">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-button border border-brand-soft">
                  <Clock className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 rounded-button border border-brand-soft">
                  <MapPin className="h-3.5 w-3.5 text-brand-red" />
                  <span>{event.mode} • {event.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Card on Right */}
            <div className="lg:col-span-4 rounded-card border border-brand-soft bg-brand-soft/90 p-6 space-y-4 backdrop-blur-sm">
              <div className="border-b border-brand-soft/80 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-light/60">
                  Total Prize Pool
                </span>
                <div className="text-xl sm:text-2xl font-display font-bold text-amber-400 mt-0.5">
                  {event.prize}
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-brand-light/80">
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Team Size:</span>
                  <span className="font-semibold">{event.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Eligibility:</span>
                  <span className="font-semibold text-right">{event.eligibility}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-light/50">Registration:</span>
                  <span className="text-emerald-400 font-semibold">Free (Verified)</span>
                </div>
              </div>

              {event.status !== "ended" ? (
                <Button
                  href={event.registrationUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="w-full justify-center gap-2"
                >
                  REGISTER ON UNSTOP
                  <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <div className="rounded-button bg-brand-soft text-brand-light/50 text-center py-2 text-xs font-mono uppercase">
                  Quest Concluded & Archived
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Details Body */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 cols): Deep Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* About Section */}
              <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  About This Quest
                </h2>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {event.about}
                </p>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Why Participate */}
              <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Why Participate?
                </h2>
                <div className="space-y-3 pt-2">
                  {event.whyParticipate.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-brand-ink/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statements */}
              {event.problemStatements.length > 0 && (
                <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-6">
                  <h2 className="font-display text-2xl font-bold text-brand-ink">
                    Problem Statements & Challenge Tracks
                  </h2>
                  <div className="space-y-4">
                    {event.problemStatements.map((ps, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-brand-light/80 bg-brand-cream/30 p-5 space-y-2.5"
                      >
                        <h3 className="font-display text-lg font-bold text-brand-ink">
                          {ps.title}
                        </h3>
                        <p className="text-xs text-brand-neutral leading-relaxed">
                          {ps.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {ps.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-brand-white border border-brand-light px-2 py-0.5 text-[10px] font-mono text-brand-neutral"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline & Rounds */}
              <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Timeline & Stages
                </h2>
                <div className="space-y-4">
                  {event.timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 border-l-2 border-brand-red pl-4 py-1"
                    >
                      <div>
                        <span className="text-xs font-mono font-semibold text-brand-red">
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
              <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Prizes & Perks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.prizesBreakdown.map((prize, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-brand-light/80 bg-brand-cream/20 p-4 space-y-1"
                    >
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-neutral">
                        {prize.rank}
                      </span>
                      <div className="font-display text-2xl font-bold text-brand-ink">
                        {prize.amount}
                      </div>
                      <p className="text-xs text-brand-neutral/80 pt-1">
                        {prize.perks}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules & Guidelines */}
              <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-brand-red" />
                  Quest Rules
                </h2>
                <ul className="space-y-2 pt-2 text-xs text-brand-neutral leading-relaxed list-disc list-inside">
                  {event.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Frequently Asked Questions */}
              {event.faqs.length > 0 && (
                <div className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-subtle space-y-5">
                  <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-brand-red" />
                    Event FAQs
                  </h2>
                  <div className="space-y-4 pt-1">
                    {event.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-brand-light/60 pb-3 last:border-none">
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

            {/* Right Column (4 cols): Sticky Sidebar with Mentors & Registration */}
            <div className="lg:col-span-4 space-y-6">
              {/* Mentors Panel */}
              <div className="rounded-card border border-brand-light bg-brand-white p-6 shadow-subtle space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  Mentors & Evaluators
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

              {/* Judging Criteria */}
              <div className="rounded-card border border-brand-light bg-brand-white p-6 shadow-subtle space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  Judging Criteria
                </h3>
                <div className="space-y-3">
                  {event.judgingCriteria.map((item, idx) => (
                    <div key={idx} className="border-b border-brand-light/60 pb-2.5 last:border-none">
                      <div className="flex justify-between items-center text-xs font-bold text-brand-ink">
                        <span>{item.title}</span>
                        <span className="font-mono text-brand-red">{item.weight}</span>
                      </div>
                      <p className="text-[11px] text-brand-neutral mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Sticky CTA */}
              <div className="rounded-card bg-brand-ink text-white p-6 space-y-4 border border-brand-soft">
                <h4 className="font-display text-base font-bold">
                  Ready to test your mettle?
                </h4>
                <p className="text-xs text-brand-light/70">
                  Registrations fill up quickly. Secure your slot and find teammates early.
                </p>
                {event.status !== "ended" ? (
                  <Button
                    href={event.registrationUrl}
                    isExternal
                    variant="primary"
                    size="md"
                    className="w-full justify-center gap-2"
                  >
                    REGISTER ON UNSTOP
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                ) : (
                  <div className="text-xs font-mono text-center text-brand-light/40 py-1">
                    Registration Closed
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
