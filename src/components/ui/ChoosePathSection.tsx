"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Code, Trophy, Briefcase, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChoosePathSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const paths = [
    {
      role: "BUILDER",
      subtitle: "Learn. Code. Ship.",
      desc: "For hands-on developers who want to master cutting-edge stacks, build non-trivial systems, and ship open-source software.",
      ctaText: "Join Community",
      ctaHref: "/community",
      icon: Code,
      badge: "LEARN & BUILD",
    },
    {
      role: "COMPETITOR",
      subtitle: "Hackathons. Challenges. Bounties.",
      desc: "For relentless hackers ready to pressure-test architecture in 48-hour build sprints, win bounties, and get recognized.",
      ctaText: "Explore Quests",
      ctaHref: "/events",
      icon: Trophy,
      badge: "COMPETE & WIN",
    },
    {
      role: "PARTNER",
      subtitle: "Build with the next generation.",
      desc: "For startups, dev-tool brands, and tech companies seeking high-agency developer adoption, hackathon tracks, and hiring funnels.",
      ctaText: "Partner With Us",
      ctaHref: "/partners",
      icon: Briefcase,
      badge: "HIRE & SPONSOR",
    },
  ];

  return (
    <section className="relative py-24 bg-brand-cream border-b border-brand-light/80 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-[400px] bg-gradient-to-b from-brand-red/5 to-transparent opacity-50 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-multiply" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="YOUR STARTING POINT"
          title="Choose Your Path"
          description="Whether you're looking to ship code, win hackathons, or tap into student developer talent, Catalyst Crew has a dedicated track for you."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, idx) => {
            const isActive = hoveredIndex === idx || (hoveredIndex === null && idx === 0);
            
            return (
              <motion.div
                key={path.role}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col justify-between rounded-brutal border-3 p-8 sm:p-10 transition-all duration-300 brutal-card ${
                  isActive 
                    ? "border-brand-ink bg-brand-white shadow-brutal scale-[1.02] z-20" 
                    : "border-brand-ink bg-brand-cream/50 shadow-none scale-100 z-10 hover:bg-brand-white hover:shadow-brutal hover:scale-[1.02]"
                }`}
                layout
              >

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-brutal border-2 border-brand-ink transition-colors duration-300 ${
                      isActive ? "bg-brand-yellow text-brand-ink shadow-brutal-sm" : "bg-brand-white text-brand-ink"
                    }`}>
                      <path.icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`} />
                    </div>
                    <span className={`px-3 py-1.5 rounded-brutal border-2 border-brand-ink text-[10px] font-display font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "bg-brand-red text-white" : "bg-brand-white text-brand-ink"
                    }`}>
                      {path.badge}
                    </span>
                  </div>

                  <h3 className={`font-display text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-brand-ink" : "text-brand-ink/80"
                  }`}>
                    {path.role}
                  </h3>
                  <div className={`text-[11px] font-mono font-bold uppercase tracking-widest mt-2 transition-colors duration-300 ${
                    isActive ? "text-brand-red" : "text-brand-red/70"
                  }`}>
                    {path.subtitle}
                  </div>
                  <p className="mt-4 text-sm text-brand-ink/90 leading-relaxed font-sans">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t-2 border-brand-ink/10 relative z-10">
                  <Link
                    href={path.ctaHref}
                    className={`group flex items-center justify-between w-full rounded-brutal border-2 border-brand-ink px-5 py-4 transition-all duration-300 font-display text-sm font-bold tracking-wide uppercase ${
                      isActive 
                        ? "bg-brand-ink text-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none" 
                        : "bg-brand-white text-brand-ink hover:bg-brand-yellow"
                    }`}
                  >
                    <span>{path.ctaText}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? "group-hover:translate-x-1" : "group-hover:translate-x-1"}`} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
