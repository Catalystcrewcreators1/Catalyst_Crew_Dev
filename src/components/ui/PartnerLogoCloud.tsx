"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PartnerItem {
  name: string;
  category: string;
  tagline: string;
  url: string;
  logo: React.ReactNode;
}

// Next-Level Spotlight Card Component
function PartnerCard({ partner }: { partner: PartnerItem }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a
      ref={ref}
      href={partner.url}
      target={partner.url.startsWith("http") ? "_blank" : undefined}
      rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group/card relative flex flex-col justify-between w-[280px] sm:w-[320px] shrink-0 rounded-2xl border border-brand-light/60 bg-brand-white/80 backdrop-blur-md p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
    >
      {/* 
        SPOTLIGHT HOVER EFFECT
        This creates a radial glow that tracks the mouse precisely.
      */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(230,57,70,0.06), transparent 50%)`,
        }}
      />
      {/* Inner subtle border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border transition-opacity duration-300 z-0"
        style={{
          opacity,
          borderColor: "rgba(230,57,70,0.1)",
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(230,57,70,0.1), transparent 50%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black, transparent 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top Row: Category Pill + Circular Arrow */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-brand-cream/80 border border-brand-light px-3 py-1 text-[9px] font-mono font-bold tracking-widest text-brand-neutral uppercase shadow-sm group-hover/card:border-brand-red/20 group-hover/card:text-brand-red transition-colors">
            {partner.category}
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-light/70 bg-white text-brand-neutral group-hover/card:text-brand-red group-hover/card:border-brand-red/40 group-hover/card:bg-brand-red/5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_0_15px_rgba(230,57,70,0.2)]">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
          </div>
        </div>

        {/* Middle: Brand Logo & Title */}
        <div className="py-8 flex items-center group-hover/card:scale-[1.02] transition-transform duration-500 origin-left">
          {partner.logo}
        </div>

        {/* Bottom: Micro description */}
        <div className="pt-4 border-t border-brand-light/40 group-hover/card:border-brand-red/10 transition-colors">
          <p className="text-[12px] font-mono text-brand-neutral/80 leading-relaxed line-clamp-2">
            {partner.tagline}
          </p>
        </div>
      </div>
    </a>
  );
}

export function PartnerLogoCloud() {
  const partners: PartnerItem[] = [
    {
      name: "AI Grants India",
      category: "GRANTS",
      tagline: "Funding AI research, open weights, and builders in India.",
      url: "https://catalystxcrew.in/partners",
      logo: (
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-ink text-white font-mono text-xs font-bold shadow-md">
            aigi
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold text-brand-ink leading-tight">
              AI Grants India
            </span>
            <span className="text-[10px] font-mono text-brand-neutral uppercase tracking-widest">
              Foundation 🇮🇳
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "Dodo Payments",
      category: "PAYMENTS",
      tagline: "Global developer checkout and borderless payment rails.",
      url: "https://dodopayments.com",
      logo: (
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#84CC16]/20 text-[#65A30D] shadow-sm">
            <span className="text-lg font-black">🦤</span>
          </div>
          <span className="font-display text-lg font-extrabold text-brand-ink tracking-tight">
            Dodo Payments
          </span>
        </div>
      ),
    },
    {
      name: "Unstop",
      category: "PLATFORM",
      tagline: "Official quest registration and national build sprints.",
      url: "https://unstop.com",
      logo: (
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C3879] shadow-md">
            <svg className="h-4 w-4 text-[#00E5FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 12L10.5 15.5L17 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display text-lg font-extrabold text-brand-ink tracking-tight">
            Unstop
          </span>
        </div>
      ),
    },
    {
      name: "GitHub",
      category: "DEV TOOLS",
      tagline: "Repositories, student developer packs, and code review.",
      url: "https://github.com",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="h-8 w-8 text-brand-ink drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span className="font-display text-lg font-extrabold text-brand-ink">
            GitHub
          </span>
        </div>
      ),
    },
    {
      name: "Cloudflare",
      category: "INFRASTRUCTURE",
      tagline: "Serverless workers, edge caches, and fast DNS network.",
      url: "https://cloudflare.com",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg className="h-7 w-7 text-[#F38020] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.2 13.4c-.2-.7-.6-1.3-1.1-1.7-.5-.4-1.2-.6-1.9-.6-.4 0-.7.1-1.1.2-.3-.6-.8-1-1.4-1.3-.6-.3-1.3-.4-2-.3-.8.1-1.5.5-2 1.1-.5.6-.7 1.3-.7 2.1 0 .2 0 .4.1.6-.7.1-1.3.4-1.8.9-.5.5-.8 1.2-.8 1.9 0 .8.3 1.5.8 2.1.6.6 1.3.9 2.1.9h9.6c.9 0 1.7-.3 2.3-.9.6-.6 1-1.4 1-2.3 0-.8-.3-1.6-.8-2.2-.5-.4-1.3-.7-2.1-.7z" />
          </svg>
          <span className="font-display text-lg font-extrabold text-brand-ink">
            Cloudflare
          </span>
        </div>
      ),
    },
    {
      name: "Supabase",
      category: "DATABASE",
      tagline: "PostgreSQL database, real-time sync, and edge storage.",
      url: "https://supabase.com",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="h-7 w-7 drop-shadow-sm" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.2 2.8c-.5-.9-1.8-.7-2 .3L8.5 14.2c-.1.6.3 1.2.9 1.3h5.4c.7 0 1.2.8.9 1.4l-3.3 7.8c-.4.9.8 1.6 1.4.8l8.3-10.2c.5-.7 0-1.7-.9-1.7h-5.2c-.7 0-1.2-.8-.9-1.4l2.6-6.4z"
              fill="#3ECF8E"
            />
          </svg>
          <span className="font-display text-lg font-extrabold text-brand-ink">
            Supabase
          </span>
        </div>
      ),
    },
    {
      name: "Postman",
      category: "API TOOLS",
      tagline: "API prototyping, automated testing, and student challenges.",
      url: "https://postman.com",
      logo: (
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6C37] text-white shadow-md">
            <span className="text-[11px] font-bold">P</span>
          </div>
          <span className="font-display text-lg font-extrabold text-brand-ink">
            Postman
          </span>
        </div>
      ),
    },
    {
      name: "Edge City India",
      category: "COMMUNITY",
      tagline: "Pop-up village and shared residential campus for builders.",
      url: "https://catalystxcrew.in/partners",
      logo: (
        <div className="flex flex-col">
          <span className="font-display text-[15px] font-black tracking-tighter text-brand-ink leading-tight">
            EDGE CITY
          </span>
          <span className="font-display text-lg font-black tracking-widest text-brand-red leading-none">
            INDIA
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-brand-cream border-b border-brand-light/80 py-20 sm:py-24 overflow-hidden">
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <Container className="relative z-10">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-4 py-1.5 text-[11px] font-mono tracking-widest text-white uppercase font-bold shadow-xl shadow-brand-ink/10 border border-brand-ink/80">
            <span className="text-amber-400 font-bold drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">✦</span>
            <span>STRONGER TOGETHER</span>
          </div>

          {/* Large Title */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-ink tracking-tight drop-shadow-sm">
            Partners
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-brand-neutral max-w-lg mx-auto font-sans leading-relaxed">
            Building a more open, inclusive and decentralized future together.
          </p>

          {/* Subtle Diamond Divider */}
          <div className="flex items-center gap-3 pt-2 text-brand-neutral/40">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-brand-neutral/30 inline-block" />
            <span className="text-[10px] text-brand-red font-bold shadow-sm">◆</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-neutral/30 inline-block" />
          </div>
        </motion.div>

        {/* Carousel / Cards Track */}
        <div className="relative w-full overflow-hidden">
          {/* Left Edge Gradient Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-cream to-transparent z-20" />

          {/* Right Edge Gradient Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-cream to-transparent z-20" />

          {/* Infinite Marquee Runner Track */}
          <div className="flex items-stretch gap-6 sm:gap-8 py-6 px-4 hover:[animation-play-state:paused] animate-marquee-slow w-max">
            {/* We duplicate the array to allow infinite scrolling */}
            {[...partners, ...partners].map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* Bottom Small CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/partners"
            className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-brand-red font-bold transition-all hover:text-brand-ink"
          >
            <span className="border-b border-transparent group-hover:border-brand-ink pb-0.5 transition-colors">
              Partner With Catalyst Crew
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
