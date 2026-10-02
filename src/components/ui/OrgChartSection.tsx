"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { teamData } from "@/data/team";
import CircularCarousel from "./CircularCarousel";

// ─── MAIN COMPONENT ───
export function OrgChartSection() {
  const carouselItems = teamData.map(member => ({
    src: member.avatar,
    alt: member.name,
    title: member.name,
    subtitle: member.role
  }));

  return (
    <section className="py-24 sm:py-32 bg-brand-cream relative overflow-hidden border-b-3 border-brand-ink">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-brand-ink/10 rounded-tl-brutal pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-brand-ink/10 rounded-br-brutal pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-yellow px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider shadow-brutal-sm mb-6 transform -rotate-1">
            Organizational Hierarchy
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-ink tracking-tight uppercase">
            The <span className="text-white bg-brand-red px-3 inline-block border-3 border-brand-ink transform rotate-1">Crew</span>
          </h2>
          <p className="mt-4 text-base text-brand-neutral max-w-2xl mx-auto font-sans leading-relaxed">
            Our organizational structure is flat by design — every voice matters, every contribution counts. Here&apos;s who makes Catalyst Crew tick.
          </p>
        </motion.div>

        {/* ─── TEAM CAROUSEL ─── */}
        <div style={{ width: '100%', height: '560px', position: 'relative' }}>
          <CircularCarousel
            items={carouselItems}
            preset="cylinder"
            intro="rise"
            cardWidth={220}
            aspectRatio={0.75}
            speed={14}
            captions
          />
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-brand-ink shadow-brutal-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            10 Members Strong & Growing
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
