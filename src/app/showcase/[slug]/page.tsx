import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Award,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Users2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Build Not Found" };

  return {
    title: `${project.name} — Builder Showcase`,
    description: `${project.tagline}. ${project.description}`,
    openGraph: {
      title: `${project.name} | Catalyst Crew Showcase`,
      description: project.tagline,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream pb-20">
      {/* Back Navigation Bar */}
      <div className="border-b border-brand-light bg-brand-white py-3">
        <Container>
          <Link
            href="/showcase"
            className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-brand-neutral hover:text-brand-ink transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Showcase
          </Link>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="bg-brand-ink text-white py-14 sm:py-16 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="red" size="sm">
                {project.category.toUpperCase()}
              </Badge>
              {project.award && (
                <div className="inline-flex items-center gap-1.5 rounded bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-xs font-display font-medium text-amber-300">
                  <Award className="h-3.5 w-3.5" />
                  <span>{project.award}</span>
                </div>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {project.name}
            </h1>

            <p className="text-base sm:text-xl text-brand-light/80 font-sans leading-relaxed">
              {project.tagline}
            </p>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="gap-2"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  isExternal
                  variant="dark"
                  size="md"
                  className="gap-2 border-brand-light/20 bg-brand-soft"
                >
                  <Github className="h-4 w-4" />
                  <span>View Repository</span>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Body */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 cols): Deep Technical Narrative */}
            <div className="lg:col-span-8 space-y-10">
              {/* Preview Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-brutal brutal-card overflow-hidden border-3 border-brand-ink shadow-brutal bg-brand-soft">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overview */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                  <Layers className="h-5 w-5 text-brand-red" />
                  Project Overview
                </h2>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem Breakdown */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <h2 className="font-display text-2xl font-bold text-brand-ink">
                    The Problem It Solves
                  </h2>
                </div>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Engineering Solution */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <h2 className="font-display text-2xl font-bold text-brand-ink">
                    The Engineering Architecture
                  </h2>
                </div>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-7 sm:p-9 shadow-brutal-sm space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-brand-red" />
                  Technologies & Frameworks
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-brutal border-3 border-brand-ink bg-brand-cream/50 px-3.5 py-1.5 text-xs font-mono text-brand-ink font-semibold"
                    >
                      <Cpu className="h-3 w-3 text-brand-red" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Builders & Specs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Builders Squad */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 shadow-brutal-sm space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-ink flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-brand-red" />
                  The Builders Squad
                </h3>
                <div className="space-y-4 pt-1">
                  {project.builders.map((builder, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 border-b border-brand-light/60 pb-3 last:border-none last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-11 rounded-full overflow-hidden bg-brand-soft shrink-0">
                          <Image
                            src={builder.avatar}
                            alt={builder.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-display text-sm font-bold text-brand-ink">
                            {builder.name}
                          </div>
                          <div className="text-xs text-brand-neutral">
                            {builder.role}
                          </div>
                        </div>
                      </div>

                      {builder.github && (
                        <a
                          href={builder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded text-brand-neutral hover:text-brand-ink hover:bg-brand-cream"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Build Details */}
              <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 shadow-brutal-sm space-y-3 text-xs font-mono">
                <h3 className="font-display text-base font-bold text-brand-ink font-sans pb-1 border-b border-brand-light/60">
                  Build Specifications
                </h3>
                <div className="flex justify-between py-1 border-b border-brand-light/40">
                  <span className="text-brand-neutral">Category:</span>
                  <span className="font-semibold text-brand-ink">{project.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-light/40">
                  <span className="text-brand-neutral">Licensing:</span>
                  <span className="font-semibold text-brand-ink">Open Source / MIT</span>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-light/40">
                  <span className="text-brand-neutral">Community Status:</span>
                  <span className="text-emerald-600 font-semibold">Verified Build</span>
                </div>
              </div>

              {/* Submit CTA Card */}
              <div className="rounded-brutal brutal-card bg-brand-ink text-white p-6 space-y-3 border border-brand-soft">
                <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>Your Turn to Build</span>
                </div>
                <h4 className="font-display text-base font-bold">
                  Shipped something non-trivial?
                </h4>
                <p className="text-xs text-brand-light/70 leading-relaxed">
                  Submit your software prototype, library, or AI agent to be reviewed and spotlighted in the national showcase.
                </p>
                <div className="pt-2">
                  <Button
                    href="/showcase/submit"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    SUBMIT YOUR PROJECT
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Builds */}
          {relatedProjects.length > 0 && (
            <div className="mt-16 pt-12 border-t border-brand-light/80">
              <h3 className="font-display text-2xl font-bold text-brand-ink mb-6">
                Explore More Community Builds
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/showcase/${rel.slug}`}
                    className="group rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-5 flex gap-4 items-center hover:border-brand-ink/40 transition-colors shadow-brutal-sm"
                  >
                    <div className="relative h-20 w-24 rounded-lg overflow-hidden bg-brand-soft shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red">
                        {rel.category}
                      </span>
                      <h4 className="font-display text-base font-bold text-brand-ink group-hover:text-brand-red transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-brand-neutral line-clamp-1 mt-0.5">
                        {rel.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
