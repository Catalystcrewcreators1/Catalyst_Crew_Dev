"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Trophy, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { eventsData, Event } from "@/data/events";
import Image from "next/image";
import Link from "next/link";

const BRUTAL_COLORS = [
  "bg-brand-yellow",
  "bg-brand-mint",
  "bg-brand-lavender",
  "bg-brand-peach",
  "bg-brand-white",
];

const TicketRow = ({ event, index }: { event: Event; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClass = BRUTAL_COLORS[index % BRUTAL_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full brutal-card mb-6 group cursor-pointer"
    >
      <Link href={`/events/${event.slug}`} className="block">
        <div className={`
          relative w-full overflow-hidden rounded-brutal border-3 border-brand-ink transition-all duration-300
          ${isHovered ? colorClass : 'bg-brand-white'} shadow-brutal-lg flex flex-col md:flex-row
        `}>
          
          {/* Left: Date / Status Column */}
          <div className={`
            md:w-48 border-b-3 md:border-b-0 md:border-r-3 border-brand-ink p-6 flex flex-row md:flex-col justify-between items-center md:items-start transition-colors duration-300
            ${isHovered ? 'bg-brand-ink text-white' : 'bg-brand-cream text-brand-ink'}
          `}>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl leading-none">
                {event.date.split(" ")[0]}
              </div>
              <div className="font-display font-bold text-sm uppercase tracking-widest mt-1 opacity-80">
                {event.date.split(" ").slice(1).join(" ")}
              </div>
            </div>
            
            {event.status === "live" ? (
              <div className="inline-flex items-center gap-1.5 rounded-brutal border-2 border-brand-ink bg-brand-red px-2 py-1 text-[10px] font-display font-bold uppercase tracking-wider text-white shadow-brutal-sm mt-0 md:mt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                LIVE NOW
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 rounded-brutal border-2 border-brand-ink bg-brand-white px-2 py-1 text-[10px] font-display font-bold uppercase tracking-wider text-brand-ink shadow-brutal-sm mt-0 md:mt-4">
                UPCOMING
              </div>
            )}
          </div>

          {/* Middle: Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
            {/* Background Marquee Text on Hover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center">
              <div className="animate-marquee-slow whitespace-nowrap font-display font-black text-8xl tracking-tight text-brand-ink">
                {event.title.toUpperCase()} • {event.title.toUpperCase()} • 
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block rounded-brutal border-2 border-brand-ink bg-brand-ink text-white px-2 py-0.5 text-[10px] font-display font-bold uppercase tracking-widest shadow-brutal-sm">
                  {event.category}
                </span>
                {event.prize && (
                  <span className="inline-flex items-center gap-1 text-xs font-display font-bold text-brand-ink">
                    <Trophy className="h-3.5 w-3.5" />
                    {event.prize}
                  </span>
                )}
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-ink tracking-tight mb-2 group-hover:underline decoration-4 underline-offset-4">
                {event.title}
              </h3>
              
              <p className="font-sans text-brand-ink/80 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                {event.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-display font-bold tracking-wider text-brand-ink">
                <div className="flex items-center gap-1.5 bg-brand-white/50 px-3 py-1.5 rounded-brutal border-2 border-brand-ink">
                  <MapPin className="h-4 w-4 text-brand-red" />
                  {event.mode} • {event.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Reveal & CTA */}
          <div className="hidden lg:flex w-72 border-l-3 border-brand-ink relative overflow-hidden bg-brand-ink items-center justify-center">
            {/* The Image that slides in or brightens on hover */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <Image 
                src={event.image} 
                alt={event.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
              />
            </div>
            
            {/* Dark overlay that fades out */}
            <div className="absolute inset-0 bg-brand-ink/60 group-hover:bg-transparent transition-colors duration-500 z-10" />

            {/* CTA Button that appears */}
            <div className="relative z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="rounded-brutal border-2 border-brand-ink bg-brand-yellow text-brand-ink p-4 shadow-brutal-sm flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <ArrowUpRight className="h-8 w-8" />
              </div>
            </div>

            {/* Ticket Perforations on the edge */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-brand-white border-r-3 border-brand-ink" />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const EventTicketsSection = () => {
  const featuredEvents = eventsData.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-brand-white relative overflow-hidden border-b-3 border-brand-ink">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-mint px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand-ink shadow-brutal-sm mb-6 transform -rotate-1">
              Current Quests
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-ink tracking-tight uppercase">
              The Arena <br/> <span className="text-white bg-brand-red px-4 inline-block border-3 border-brand-ink transform rotate-1 mt-2">Awaits</span>
            </h2>
          </div>
          
          <div className="md:w-1/3">
            <p className="text-brand-ink/80 font-sans text-base leading-relaxed border-l-4 border-brand-ink pl-4">
              Compete in our flagship hackathons, build alongside top student talent, and win major cash bounties. Don't just watch — participate.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-5xl mx-auto">
          {featuredEvents.map((event, idx) => (
            <TicketRow key={event.slug} event={event} index={idx} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-brand-ink hover:text-brand-red transition-colors"
          >
            <span className="border-b-2 border-brand-ink group-hover:border-brand-red pb-0.5 transition-colors">
              View All Quests & Events
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};
