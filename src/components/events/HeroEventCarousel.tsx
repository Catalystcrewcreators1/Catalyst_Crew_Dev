"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Event } from "@/data/events";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  Clock,
  Sparkles,
} from "lucide-react";

interface HeroEventCarouselProps {
  events: Event[];
}

export function HeroEventCarousel({ events }: HeroEventCarouselProps) {
  // Focus on upcoming and live events first
  const activeEvents = events.filter((e) => e.status !== "ended").concat(
    events.filter((e) => e.status === "ended")
  ).slice(0, 4);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const currentEvent = activeEvents[currentIndex] || events[0];

  const handleNext = useCallback(() => {
    if (activeEvents.length <= 1) return;
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % activeEvents.length);
  }, [activeEvents.length]);

  const handlePrev = useCallback(() => {
    if (activeEvents.length <= 1) return;
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + activeEvents.length) % activeEvents.length);
  }, [activeEvents.length]);

  // Autoplay effect
  useEffect(() => {
    if (isPaused || activeEvents.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, activeEvents.length]);

  if (!currentEvent) return null;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Neo-Brutalist Frame */}
      <div className="relative rounded-brutal border-3 border-brand-ink bg-brand-white shadow-brutal-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b-3 border-brand-ink bg-brand-yellow select-none">
          {/* Decorative pills */}
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-brand-ink bg-brand-red inline-block shadow-brutal-sm" />
            <span className="h-4 w-4 rounded-full border-2 border-brand-ink bg-brand-mint inline-block shadow-brutal-sm" />
            <span className="h-4 w-4 rounded-full border-2 border-brand-ink bg-brand-lavender inline-block shadow-brutal-sm" />
          </div>

          {/* Center Monospace Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-brutal border-2 border-brand-ink bg-brand-white text-[11px] font-display font-bold tracking-widest text-brand-ink shadow-brutal-sm">
            <Flame className="h-3 w-3 text-brand-red" />
            <span className="uppercase text-brand-ink">LIVE_QUESTS</span>
            <span className="text-brand-ink/40">/</span>
            <span className="text-brand-red">
              0{currentIndex + 1}_OF_0{activeEvents.length}
            </span>
          </div>

          {/* Arrow Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous quest"
              className="flex h-8 w-8 items-center justify-center rounded-brutal bg-brand-white text-brand-ink border-2 border-brand-ink hover:bg-brand-red hover:text-white transition-colors shadow-brutal-sm active:translate-y-0.5 active:shadow-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next quest"
              className="flex h-8 w-8 items-center justify-center rounded-brutal bg-brand-white text-brand-ink border-2 border-brand-ink hover:bg-brand-red hover:text-white transition-colors shadow-brutal-sm active:translate-y-0.5 active:shadow-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative p-5 sm:p-6 space-y-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentEvent.slug}
              initial={{ opacity: 0, x: direction === "right" ? 25 : -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "right" ? -25 : 25 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* Event Image Banner with Overlay */}
              <div className="relative aspect-[1024/385] w-full rounded-brutal overflow-hidden border-2 border-brand-ink group shadow-brutal-sm">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  priority
                />

                {currentEvent.slug !== "catalyst-hack-2026" ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent" />
                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-brutal bg-brand-white border-2 border-brand-ink px-3 py-1 text-[10px] font-display uppercase tracking-wider text-brand-ink font-bold shadow-brutal-sm">
                        {currentEvent.category}
                      </span>

                      {currentEvent.status === "live" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-brutal bg-brand-red border-2 border-brand-ink px-3 py-1 text-[10px] font-display uppercase tracking-wider text-white font-bold shadow-brutal-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                          LIVE NOW
                        </span>
                      ) : currentEvent.status === "upcoming" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-brutal bg-brand-peach border-2 border-brand-ink px-3 py-1 text-[10px] font-display uppercase tracking-wider text-brand-ink font-bold shadow-brutal-sm">
                          <Clock className="h-3 w-3" />
                          UPCOMING
                        </span>
                      ) : null}
                    </div>

                    {/* Prize pill badge */}
                    {currentEvent.prize && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-brutal bg-brand-yellow border-2 border-brand-ink px-3 py-1.5 shadow-brutal-sm">
                        <div className="flex items-center gap-1.5 text-xs font-display text-brand-ink font-bold">
                          <Trophy className="h-3.5 w-3.5" />
                          <span className="truncate">{currentEvent.prize}</span>
                        </div>
                        <span className="text-[10px] font-display text-brand-red font-bold uppercase tracking-wider shrink-0">
                          Verified Quest
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute top-2 right-2 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/50 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-emerald-300 font-bold shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE NOW
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-ink tracking-tight line-clamp-1">
                  <Link href={`/events/${currentEvent.slug}`}>
                    {currentEvent.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-ink/75 line-clamp-2 leading-relaxed font-sans">
                  {currentEvent.tagline}
                </p>
              </div>

              {/* Event Metadata Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs font-display font-bold text-brand-ink">
                <div className="flex items-center gap-2 rounded-brutal bg-brand-cream border-2 border-brand-ink px-3 py-2 shadow-brutal-sm">
                  <Calendar className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  <span className="truncate">{currentEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 rounded-brutal bg-brand-cream border-2 border-brand-ink px-3 py-2 shadow-brutal-sm">
                  <MapPin className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  <span className="truncate">{currentEvent.mode} • {currentEvent.location}</span>
                </div>
              </div>

              {/* Actions & Registration Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={currentEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-red text-white font-display text-xs font-bold uppercase tracking-wider py-3 px-4 shadow-brutal transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                >
                  <span>REGISTER ON UNSTOP</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <Link
                  href={`/events/${currentEvent.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-brutal border-2 border-brand-ink bg-brand-white text-brand-ink font-display text-xs font-bold uppercase tracking-wider py-3 px-4 shadow-brutal transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-brand-yellow"
                >
                  <span>FULL DETAILS</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quest Quick Switcher Tabs */}
          <div className="pt-3 border-t-2 border-brand-ink/10 flex items-center justify-between gap-2">
            {/* Quick mini indicators */}
            <div className="flex items-center gap-2">
              {activeEvents.map((ev, idx) => (
                <button
                  key={ev.slug}
                  onClick={() => {
                    if (activeEvents.length <= 1) return;
                    setDirection(idx > currentIndex ? "right" : "left");
                    setCurrentIndex(idx);
                  }}
                  className={`h-3 transition-all rounded-brutal border-2 border-brand-ink ${
                    idx === currentIndex
                      ? "w-8 bg-brand-red"
                      : "w-3 bg-brand-cream hover:bg-brand-yellow"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${ev.title}`}
                />
              ))}
              {activeEvents.length === 1 && (
                <span className="text-[10px] font-display font-bold text-brand-ink/60 uppercase">
                  Flagship Online Hackathon 2026
                </span>
              )}
            </div>

            {/* View all events shortcut */}
            <Link
              href="/events"
              className="inline-flex items-center gap-1 text-[11px] font-display font-bold text-brand-ink hover:text-brand-red transition-colors uppercase tracking-wider"
            >
              <span>Explore Quests</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
