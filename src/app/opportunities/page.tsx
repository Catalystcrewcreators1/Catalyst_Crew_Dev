"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { opportunitiesData } from "@/data/opportunities";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  DollarSign,
  Search,
} from "lucide-react";

export default function OpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["all", "Internship", "Fellowship", "Full-time", "Open Source", "Campus"];

  const filteredOpportunities = useMemo(() => {
    return opportunitiesData.filter((opp) => {
      const matchesCategory =
        selectedCategory === "all" || opp.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                BUILDER CAREERS & GRANTS
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              OPPORTUNITIES BOARD
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Curated internships, full-time engineering roles, open-source stipends, and research fellowships curated specifically for high-agency developers.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-brand-cream border-b border-brand-light/80 sticky top-[73px] z-30 backdrop-blur-md bg-brand-cream/90">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-button text-xs font-display font-medium uppercase tracking-wider transition-colors shrink-0 ${
                    selectedCategory === cat
                      ? "bg-brand-ink text-white"
                      : "bg-brand-white border border-brand-light text-brand-neutral hover:text-brand-ink"
                  }`}
                >
                  {cat === "all" ? "All Opportunities" : cat}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-neutral/60" />
              <input
                type="text"
                placeholder="Search roles or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-1.5 rounded-button border border-brand-light bg-brand-white text-xs text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Opportunities List */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container>
          <div className="space-y-4">
            {filteredOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="rounded-card border border-brand-light bg-brand-white p-6 transition-all hover:border-brand-ink/40 hover:shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default" size="sm">
                      {opp.category}
                    </Badge>
                    <span className="text-xs font-mono font-medium text-brand-red">
                      {opp.company}
                    </span>
                    <span className="text-brand-light">•</span>
                    <span className="text-xs font-mono text-brand-neutral">
                      {opp.location} ({opp.type})
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-brand-ink">
                    {opp.title}
                  </h3>

                  <p className="text-xs text-brand-neutral leading-relaxed">
                    {opp.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {opp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-brand-cream/60 border border-brand-light/60 px-2 py-0.5 text-[11px] font-mono text-brand-neutral"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metadata & Action */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-brand-light/60 pt-4 md:pt-0 md:pl-6 shrink-0 gap-3">
                  <div className="text-left md:text-right">
                    <div className="font-display text-base font-bold text-brand-ink">
                      {opp.stipendOrSalary}
                    </div>
                    <div className="text-[11px] font-mono text-brand-neutral mt-0.5">
                      Deadline: {opp.deadline}
                    </div>
                  </div>

                  <Button
                    href={opp.applyUrl}
                    isExternal
                    variant="primary"
                    size="sm"
                    className="gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
