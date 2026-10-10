"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

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
      name: "AWS",
      category: "CLOUD",
      tagline: "Amazon Web Services - Global cloud infrastructure.",
      url: "#",
      logo: (
        <div className="relative h-16 w-32 transition-all duration-300">
          <Image src="/Aws.jpeg" alt="AWS" fill sizes="128px" className="object-contain object-left" />
        </div>
      ),
    },
    {
      name: "AWS Student Builder",
      category: "COMMUNITY",
      tagline: "Empowering the next generation of cloud builders.",
      url: "#",
      logo: (
        <div className="relative h-16 w-32 transition-all duration-300">
          <Image src="/AWS_Student_Builder_groups.jpeg" alt="AWS Student Builder" fill sizes="128px" className="object-contain object-left" />
        </div>
      ),
    },
    {
      name: "Posterwa",
      category: "MERCHANDISE",
      tagline: "Premium anime and tech merchandise partner.",
      url: "#",
      logo: (
        <div className="relative h-16 w-32 transition-all duration-300">
          <Image src="/Posterwa.jpeg" alt="Posterwa" fill sizes="128px" className="object-contain object-left" />
        </div>
      ),
    },
    {
      name: "Tribex Esports",
      category: "GAMING",
      tagline: "Official gaming and esports ecosystem partner.",
      url: "#",
      logo: (
        <div className="relative h-16 w-32 transition-all duration-300">
          <Image src="/Tribex%20Esports.jpeg" alt="Tribex Esports" fill sizes="128px" className="object-contain object-left" />
        </div>
      ),
    },
    {
      name: "Sulax Solar",
      category: "ENERGY",
      tagline: "Sustainable tech and renewable energy solutions.",
      url: "#",
      logo: (
        <div className="relative h-16 w-32 transition-all duration-300">
          <Image src="/Sulax_Solar.png" alt="Sulax Solar" fill sizes="128px" className="object-contain object-left" />
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
            Supported By
          </h2>
          <p className="text-base text-brand-ink/60 max-w-lg mx-auto font-sans">
            Building a more open, inclusive future with our sponsors.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
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
