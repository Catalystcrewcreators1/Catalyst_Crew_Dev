"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OrgChartSection } from "@/components/ui/OrgChartSection";
import { Users, ArrowRight, Sparkles } from "lucide-react";

export default function CrewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 sm:py-20 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                ORGANIZATIONAL ROSTER
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              MEET THE CREW<span className="text-brand-red">.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-light/80 leading-relaxed font-sans max-w-2xl">
              We are developers, community architects, and hackers committed to building an ecosystem where merit, shipped software, and technical grit reign supreme.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Team Members", value: "10" },
                { label: "Departments", value: "5" },
                { label: "Hierarchy Tiers", value: "4" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-light/20 bg-brand-soft px-4 py-2"
                >
                  <span className="font-display text-xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-brand-light/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Full Org Chart Tree */}
      <OrgChartSection />

      {/* Join the Team CTA */}
      <section className="py-16 sm:py-20 bg-brand-ink text-white text-center border-b-3 border-brand-ink">
        <Container size="narrow">
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-light/20 bg-brand-soft px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand-light/80 shadow-brutal-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand-red" />
            Open Positions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            WANT TO JOIN THE <span className="text-brand-red">CREW</span>?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-light/70 max-w-lg mx-auto leading-relaxed font-sans">
            We are always scouting passionate student leads for campus ambassadors, open-source maintainers, and community mentors.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button href="/contact" variant="primary" size="md" className="gap-2">
              APPLY FOR CORE TEAM
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/opportunities" variant="dark" size="md" className="gap-2 border-brand-light/20">
              VIEW OPEN ROLES
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
