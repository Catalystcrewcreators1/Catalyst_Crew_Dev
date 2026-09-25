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
      {/* Subtle ambient backlight glow */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-red/30 via-brand-red/10 to-transparent blur-xl opacity-75 pointer-events-none" />

      {/* Main Terminal Window Frame */}
      <div className="relative rounded-2xl border border-brand-soft/90 bg-brand-soft/95 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-brand-soft bg-brand-ink/80 select-none">
          {/* macOS / Window traffic light buttons */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#D83A35] transition-opacity hover:opacity-80 inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#EAB308] transition-opacity hover:opacity-80 inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#22C55E] transition-opacity hover:opacity-80 inline-block shadow-sm" />
          </div>

          {/* Center Monospace Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft/80 border border-brand-soft/80 text-[11px] font-mono tracking-widest text-brand-light/90">
            <Flame className="h-3 w-3 text-brand-red animate-pulse" />
            <span className="uppercase font-semibold text-white">LIVE_QUESTS</span>
            <span className="text-brand-light/40">/</span>
            <span className="text-brand-red font-bold">
              0{currentIndex + 1}_OF_0{activeEvents.length}
            </span>
          </div>

          {/* Arrow Navigation Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous quest"
              className="flex h-7 w-7 items-center justify-center rounded-button bg-brand-soft/80 hover:bg-brand-ink text-brand-light hover:text-white border border-brand-soft/60 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next quest"
              className="flex h-7 w-7 items-center justify-center rounded-button bg-brand-soft/80 hover:bg-brand-ink text-brand-light hover:text-white border border-brand-soft/60 transition-colors"
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
              <div className="relative aspect-[1024/385] w-full rounded-xl overflow-hidden bg-black border border-white/10 group shadow-lg">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {currentEvent.slug !== "catalyst-hack-2026" ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-ink/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
                        {currentEvent.category}
                      </span>

                      {currentEvent.status === "live" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                          LIVE NOW
                        </span>
                      ) : currentEvent.status === "upcoming" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                          <Clock className="h-3 w-3" />
                          UPCOMING
                        </span>
                      ) : null}
                    </div>

                    {/* Prize pill badge */}
                    {currentEvent.prize && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-lg bg-brand-ink/85 backdrop-blur-md border border-white/10 px-3 py-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 font-bold">
                          <Trophy className="h-3.5 w-3.5 text-amber-400" />
                          <span className="truncate">{currentEvent.prize}</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider shrink-0">
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
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-brand-red transition-colors line-clamp-1">
                  <Link href={`/events/${currentEvent.slug}`}>
                    {currentEvent.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-light/75 line-clamp-2 leading-relaxed">
                  {currentEvent.tagline}
                </p>
              </div>

              {/* Event Metadata Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs font-mono text-brand-light/80">
                <div className="flex items-center gap-2 rounded-lg bg-brand-ink/60 border border-brand-soft/70 px-3 py-2">
                  <Calendar className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  <span className="truncate">{currentEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-brand-ink/60 border border-brand-soft/70 px-3 py-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  <span className="truncate">{currentEvent.mode} • {currentEvent.location}</span>
                </div>
              </div>

              {/* Actions & Registration Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={currentEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-button bg-brand-red hover:bg-red-600 text-white font-display text-xs font-bold uppercase tracking-wider py-3 px-4 shadow-md transition-all active:scale-[0.98]"
                >
                  <span>REGISTER ON UNSTOP</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <Link
                  href={`/events/${currentEvent.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-button bg-brand-ink hover:bg-brand-soft text-brand-light hover:text-white border border-brand-soft text-xs font-display font-medium uppercase tracking-wider py-3 px-4 transition-colors"
                >
                  <span>FULL DETAILS</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quest Quick Switcher Tabs */}
          <div className="pt-3 border-t border-brand-soft/80 flex items-center justify-between gap-2">
            {/* Quick mini indicators */}
            <div className="flex items-center gap-1.5">
              {activeEvents.map((ev, idx) => (
                <button
                  key={ev.slug}
                  onClick={() => {
                    if (activeEvents.length <= 1) return;
                    setDirection(idx > currentIndex ? "right" : "left");
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 transition-all rounded-full ${
                    idx === currentIndex
                      ? "w-7 bg-brand-red"
                      : "w-2 bg-brand-light/30 hover:bg-brand-light/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${ev.title}`}
                />
              ))}
              {activeEvents.length === 1 && (
                <span className="text-[10px] font-mono text-brand-light/60 uppercase">
                  Flagship Online Hackathon 2026
                </span>
              )}
            </div>

            {/* View all events shortcut */}
            <Link
              href="/events"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-light/60 hover:text-white transition-colors uppercase tracking-wider"
            >
              <span>Explore Quests</span>
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
