"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface PartnerItem {
  name: string;
  category: string;
  tagline: string;
  url: string;
  logo: React.ReactNode;
}

export function PartnerLogoCloud() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const partners: PartnerItem[] = [
    {
      name: "AI Grants India",
      category: "GRANTS",
      tagline: "Funding AI research, open weights, and builders in India.",
      url: "https://catalystxcrew.in/partners",
      logo: (
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-brand-ink text-white font-mono text-xs font-bold">
            aigi
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-brand-ink leading-tight">
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
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#84CC16]/20 text-[#65A30D]">
            <span className="text-base font-black">🦤</span>
          </div>
          <span className="font-display text-base font-bold text-brand-ink tracking-tight">
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
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C3879]">
            <svg className="h-4 w-4 text-[#00E5FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 12L10.5 15.5L17 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-display text-base font-extrabold text-brand-ink tracking-tight">
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
        <div className="flex items-center gap-2.5">
          <svg className="h-7 w-7 text-brand-ink" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span className="font-display text-base font-extrabold text-brand-ink">
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
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.2 13.4c-.2-.7-.6-1.3-1.1-1.7-.5-.4-1.2-.6-1.9-.6-.4 0-.7.1-1.1.2-.3-.6-.8-1-1.4-1.3-.6-.3-1.3-.4-2-.3-.8.1-1.5.5-2 1.1-.5.6-.7 1.3-.7 2.1 0 .2 0 .4.1.6-.7.1-1.3.4-1.8.9-.5.5-.8 1.2-.8 1.9 0 .8.3 1.5.8 2.1.6.6 1.3.9 2.1.9h9.6c.9 0 1.7-.3 2.3-.9.6-.6 1-1.4 1-2.3 0-.8-.3-1.6-.8-2.2-.5-.4-1.3-.7-2.1-.7z" />
          </svg>
          <span className="font-display text-base font-extrabold text-brand-ink">
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
        <div className="flex items-center gap-2.5">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.2 2.8c-.5-.9-1.8-.7-2 .3L8.5 14.2c-.1.6.3 1.2.9 1.3h5.4c.7 0 1.2.8.9 1.4l-3.3 7.8c-.4.9.8 1.6 1.4.8l8.3-10.2c.5-.7 0-1.7-.9-1.7h-5.2c-.7 0-1.2-.8-.9-1.4l2.6-6.4z"
              fill="#3ECF8E"
            />
          </svg>
          <span className="font-display text-base font-bold text-brand-ink">
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
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6C37] text-white">
            <span className="text-[10px] font-bold">P</span>
          </div>
          <span className="font-display text-base font-bold text-brand-ink">
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
          <span className="font-display text-sm font-black tracking-tighter text-brand-ink leading-tight">
            EDGE CITY
          </span>
          <span className="font-display text-base font-black tracking-widest text-brand-red leading-none">
            INDIA
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-brand-cream/60 border-b border-brand-light/80 py-12 sm:py-14 overflow-hidden">
      <Container>
        {/* Header Block matching reference */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-3.5 py-1 text-[10px] font-mono tracking-widest text-white uppercase font-bold shadow-sm">
            <span className="text-amber-400 font-bold">✦</span>
            <span>STRONGER TOGETHER</span>
          </div>

          {/* Large Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink tracking-tight">
            Partners
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-brand-neutral max-w-lg mx-auto font-sans leading-relaxed">
            Building a more open, inclusive and decentralized future together.
          </p>

          {/* Subtle Diamond Divider matching reference */}
          <div className="flex items-center gap-2 pt-1 text-brand-neutral/40">
            <span className="h-[1px] w-12 bg-brand-neutral/30 inline-block" />
            <span className="text-[10px] text-brand-red font-bold">◆</span>
            <span className="h-[1px] w-12 bg-brand-neutral/30 inline-block" />
          </div>
        </div>

        {/* Carousel / Cards Track with Infinite Slow Runner */}
        <div className="relative w-full overflow-hidden">
          {/* Left Edge Gradient Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-brand-cream to-transparent z-20" />

          {/* Right Edge Gradient Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-brand-cream to-transparent z-20" />

          {/* Infinite Marquee Runner Track */}
          <div className="animate-marquee-slow flex items-stretch gap-4 sm:gap-6 py-2 px-2">
            {[...partners, ...partners].map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target={partner.url.startsWith("http") ? "_blank" : undefined}
                rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group/card flex flex-col justify-between w-[260px] sm:w-[290px] shrink-0 rounded-2xl border border-brand-light/90 bg-brand-white p-5 sm:p-6 shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-brand-ink/40 transition-all duration-200"
              >
                {/* Top Row: Category Pill + Circular Arrow */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-cream/80 border border-brand-light px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-wider text-brand-neutral uppercase">
                    {partner.category}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-light/70 text-brand-neutral group-hover/card:text-brand-red group-hover/card:border-brand-red/40 group-hover/card:bg-brand-red/5 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                </div>

                {/* Middle: Brand Logo & Title */}
                <div className="py-5 flex items-center">
                  {partner.logo}
                </div>

                {/* Bottom: Micro description */}
                <div className="pt-3 border-t border-brand-light/60">
                  <p className="text-[11px] font-mono text-brand-neutral/80 leading-relaxed line-clamp-2">
                    {partner.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Small CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-red hover:underline font-semibold"
          >
            <span>Partner With Catalyst Crew</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
