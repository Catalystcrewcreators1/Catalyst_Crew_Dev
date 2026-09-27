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

// Neo-Brutalist Partner Card
function PartnerCard({ partner }: { partner: PartnerItem }) {
  return (
    <a
      href={partner.url}
      target={partner.url.startsWith("http") ? "_blank" : undefined}
      rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group/card relative flex flex-col justify-between w-[280px] sm:w-[300px] shrink-0 rounded-brutal border-3 border-brand-ink bg-brand-white p-6 shadow-brutal brutal-card overflow-hidden"
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top Row: Category Pill + Arrow */}
        <div className="flex items-center justify-between">
          <span className="rounded-brutal bg-brand-yellow border-2 border-brand-ink px-2.5 py-0.5 text-[9px] font-display font-bold tracking-widest text-brand-ink uppercase">
            {partner.category}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-brutal border-2 border-brand-ink bg-brand-cream text-brand-ink group-hover/card:bg-brand-red group-hover/card:text-white transition-all duration-200">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Middle: Brand Logo & Title */}
        <div className="py-6 flex items-center">
          {partner.logo}
        </div>

        {/* Bottom: Micro description */}
        <div className="pt-3 border-t-2 border-brand-ink/15">
          <p className="text-[12px] font-sans text-brand-ink/60 leading-relaxed line-clamp-2">
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
    <section className="relative bg-brand-white border-b-3 border-brand-ink py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-peach px-4 py-1.5 text-xs font-display font-bold tracking-wider uppercase shadow-brutal-sm">
            ✦ Stronger Together
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-ink tracking-tight">
            Partners
          </h2>
          <p className="text-base text-brand-ink/60 max-w-lg mx-auto font-sans">
            Building a more open, inclusive future together.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-brand-white to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-brand-white to-transparent z-20" />

          <div className="flex items-stretch gap-5 sm:gap-6 py-4 px-4 hover:[animation-play-state:paused] animate-marquee-slow w-max">
            {[...partners, ...partners].map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/partners"
            className="group inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-brand-ink hover:text-brand-red transition-colors"
          >
            <span className="border-b-2 border-brand-ink group-hover:border-brand-red pb-0.5 transition-colors">
              Partner With Catalyst Crew
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
