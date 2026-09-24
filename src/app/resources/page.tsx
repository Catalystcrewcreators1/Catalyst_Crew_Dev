"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resourcesData } from "@/data/resources";
import { Button } from "@/components/ui/Button";
import { BookOpen, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Hackathon Guides",
    "Starter Kits",
    "Roadmaps",
    "Developer Tools",
    "Project Ideas",
  ];

  const filteredResources =
    selectedCategory === "all"
      ? resourcesData
      : resourcesData.filter((r) => r.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                DEV TOOLKITS & GUIDES
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              RESOURCES & BLUEPRINTS
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Open-source starter templates, hackathon survival playbooks, career roadmaps, and vetted toolkits designed to save you hundreds of hours of trial and error.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-brand-cream border-b border-brand-light/80 sticky top-[73px] z-30 backdrop-blur-md bg-brand-cream/90">
        <Container>
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
                {cat === "all" ? "All Resources" : cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="rounded-card border border-brand-light bg-brand-white p-6 flex flex-col justify-between transition-all hover:border-brand-ink/40 hover:shadow-subtle"
              >
                <div>
                  <span className="rounded bg-brand-cream/60 border border-brand-light px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-neutral">
                    {res.category}
                  </span>

                  <h3 className="mt-3 font-display text-lg font-bold text-brand-ink">
                    {res.title}
                  </h3>

                  <p className="mt-2 text-xs text-brand-neutral leading-relaxed">
                    {res.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {res.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-brand-light/40 px-2 py-0.5 text-[10px] font-mono text-brand-neutral"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-light/60">
                  <Button
                    href={res.link}
                    isExternal={res.isExternal}
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>Access Resource</span>
                    {res.isExternal ? (
                      <ExternalLink className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5" />
                    )}
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
