import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Github, ExternalLink, Award, Code2, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-card border border-brand-light bg-brand-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-ink/40 hover:shadow-card-hover">
      <div className="space-y-4">
        {/* Header Image or Preview */}
        <Link href={`/showcase/${project.slug}`} className="block relative h-44 w-full overflow-hidden rounded-lg bg-brand-soft">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category pill */}
          <span className="absolute top-3 left-3 rounded bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white">
            {project.category}
          </span>

          {project.award && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 rounded bg-brand-red/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-display font-semibold text-white">
              <Award className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{project.award}</span>
            </div>
          )}
        </Link>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-xl font-bold text-brand-ink group-hover:text-brand-red transition-colors">
            <Link href={`/showcase/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className="mt-1 text-xs font-mono text-brand-neutral">
            {project.tagline}
          </p>
        </div>

        {/* Problem & Solution Snippet */}
        <div className="space-y-2 rounded-lg bg-brand-cream/40 p-3 text-xs border border-brand-light/40">
          <div>
            <span className="font-semibold uppercase text-[10px] tracking-wider text-brand-neutral block">
              Problem:
            </span>
            <p className="text-brand-ink/80 line-clamp-2 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="font-semibold uppercase text-[10px] tracking-wider text-brand-red block">
              Solution:
            </span>
            <p className="text-brand-ink/80 line-clamp-2 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded bg-brand-light/50 px-2 py-0.5 text-[11px] font-mono text-brand-neutral"
            >
              <Code2 className="h-2.5 w-2.5" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Builders & External Links */}
      <div className="mt-5 pt-4 border-t border-brand-light/60 flex items-center justify-between">
        {/* Builders */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {project.builders.map((builder, idx) => (
              <div
                key={idx}
                className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-brand-soft"
                title={`${builder.name} (${builder.role})`}
              >
                <Image
                  src={builder.avatar}
                  alt={builder.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-xs font-mono text-brand-neutral truncate max-w-[120px]">
            {project.builders.map((b) => b.name).join(", ")}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-button border border-brand-light hover:border-brand-ink hover:text-brand-ink text-brand-neutral transition-colors"
              title="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 h-8 px-2.5 rounded-button bg-brand-ink hover:bg-brand-soft text-white text-xs font-display font-medium transition-colors"
              title="Live Demo"
            >
              <span>Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
