"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/showcase/ProjectCard";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Code2, Sparkles, PlusCircle } from "lucide-react";

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    "Student Projects",
    "Hackathon Builds",
    "Open Source",
    "AI & Machine Learning",
    "Web3 & Systems",
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                PROOF OF WORK
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              BUILDER SHOWCASE
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Explore real-world software, distributed databases, developer tools, and AI agents shipped by Catalyst Crew members during hackathons and open-source cohorts.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 bg-brand-cream border-b-3 border-brand-ink sticky top-[73px] z-30 backdrop-blur-md bg-brand-cream/90">
        <Container>
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 sm:pb-0">
            <div className="flex items-center gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-brutal text-xs font-display font-medium uppercase tracking-wider transition-colors ${
                    selectedCategory === cat
                      ? "bg-brand-ink text-white"
                      : "bg-brand-white border-3 border-brand-ink text-brand-neutral hover:text-brand-ink"
                  }`}
                >
                  {cat === "all" ? "All Builds" : cat}
                </button>
              ))}
            </div>

            <Button
              href="/showcase/submit"
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex items-center gap-1.5 shrink-0"
            >
              <PlusCircle className="h-3.5 w-3.5 text-brand-red" />
              Submit Your Build
            </Button>
          </div>
        </Container>
      </section>

      {/* Showcase Grid */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Submit Project Banner */}
          <div className="mt-16 rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-8 sm:p-12 text-center shadow-brutal">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white mb-4">
              <Sparkles className="h-6 w-6 text-brand-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-ink">
              Did you build something incredible?
            </h3>
            <p className="mt-2 text-sm text-brand-neutral max-w-lg mx-auto leading-relaxed">
              We spotlight non-trivial software built by our community. Submit your GitHub repository and live demo URL to be featured in the national showcase.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/showcase/submit" variant="primary" size="md">
                SUBMIT PROJECT FOR REVIEW
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
