"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowLeft,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  Github,
  ExternalLink,
  Code2,
  Layers,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function SubmitProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    category: "Student Projects",
    stack: "",
    githubUrl: "",
    demoUrl: "",
    problem: "",
    solution: "",
    builderName: "",
    builderEmail: "",
    teammates: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.tagline ||
      !formData.githubUrl ||
      !formData.problem ||
      !formData.solution ||
      !formData.builderName ||
      !formData.builderEmail
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const parsedStack = formData.stack
    ? formData.stack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : ["TypeScript", "Next.js"];

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream pb-20">
      {/* Back to Showcase */}
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

      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <UploadCloud className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                PROOF OF WORK INTAKE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              SUBMIT YOUR BUILD
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Have you built a non-trivial project, open-source tool, or hackathon winner? Submit your repository to be reviewed by the Catalyst Crew technical council and featured in our national showcase.
            </p>
          </div>
        </Container>
      </section>

      {/* Submission Container */}
      <section className="py-12 flex-1">
        <Container>
          {status === "success" ? (
            <div className="max-w-2xl mx-auto rounded-card border border-emerald-500/30 bg-emerald-50/80 p-8 sm:p-12 text-center shadow-card space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h2 className="font-display text-3xl font-bold text-emerald-950">
                Project Submitted for Verification
              </h2>
              <p className="text-sm text-emerald-800 leading-relaxed max-w-lg mx-auto">
                Thank you, <span className="font-semibold">{formData.builderName}</span>! We have received your submission for <span className="font-semibold font-mono text-emerald-900">{formData.name}</span>. Our technical review team will inspect the GitHub repository and run a local build check within 48 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="/showcase" variant="dark" size="sm">
                  Return to Showcase
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      tagline: "",
                      category: "Student Projects",
                      stack: "",
                      githubUrl: "",
                      demoUrl: "",
                      problem: "",
                      solution: "",
                      builderName: "",
                      builderEmail: "",
                      teammates: "",
                    });
                  }}
                >
                  Submit Another Project
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Form Column (7 cols) */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-card border border-brand-light bg-brand-white p-7 sm:p-9 shadow-card space-y-6"
                >
                  <div className="border-b border-brand-light pb-4">
                    <h2 className="font-display text-2xl font-bold text-brand-ink">
                      Project Details
                    </h2>
                    <p className="text-xs text-brand-neutral mt-1">
                      Provide clear, honest technical documentation of what you built.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-brand-red/10 p-3.5 text-xs text-brand-red border border-brand-red/20">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>Please complete all required fields (*).</span>
                    </div>
                  )}

                  {/* Project Name & Category */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                        Project Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. HyperCache KV"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-red focus:bg-white focus:outline-none"
                      >
                        <option value="Student Projects">Student Projects</option>
                        <option value="Hackathon Builds">Hackathon Builds</option>
                        <option value="Open Source">Open Source</option>
                        <option value="AI & Machine Learning">
                          AI & Machine Learning
                        </option>
                        <option value="Web3 & Systems">Web3 & Systems</option>
                      </select>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div>
                    <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                      One-Line Elevator Tagline *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ultra-low latency in-memory distributed store written in Rust"
                      value={formData.tagline}
                      onChange={(e) =>
                        setFormData({ ...formData, tagline: e.target.value })
                      }
                      className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                      Tech Stack (Comma Separated) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rust, Tokio, io_uring, Docker"
                      value={formData.stack}
                      onChange={(e) =>
                        setFormData({ ...formData, stack: e.target.value })
                      }
                      className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                        GitHub Repository URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://github.com/user/repo"
                        value={formData.githubUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, githubUrl: e.target.value })
                        }
                        className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                        Live Demo URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourdemo.app"
                        value={formData.demoUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, demoUrl: e.target.value })
                        }
                        className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                      The Problem You Solved *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="What was broken, slow, or missing before you built this?"
                      value={formData.problem}
                      onChange={(e) =>
                        setFormData({ ...formData, problem: e.target.value })
                      }
                      className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Architectural Solution */}
                  <div>
                    <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                      Your Engineering Architecture *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="How does your code solve this? Highlight key tradeoffs, algorithms, or protocols used."
                      value={formData.solution}
                      onChange={(e) =>
                        setFormData({ ...formData, solution: e.target.value })
                      }
                      className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Lead Builder Info */}
                  <div className="border-t border-brand-light pt-5">
                    <h3 className="font-display text-base font-bold text-brand-ink mb-3">
                      Lead Builder Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Siddharth Verma"
                          value={formData.builderName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              builderName: e.target.value,
                            })
                          }
                          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="siddharth@example.com"
                          value={formData.builderEmail}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              builderEmail: e.target.value,
                            })
                          }
                          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
                        Teammates / Co-Contributors (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kunal (Frontend), Ananya (UI/UX)"
                        value={formData.teammates}
                        onChange={(e) =>
                          setFormData({ ...formData, teammates: e.target.value })
                        }
                        className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === "submitting"}
                      className="w-full justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        "Submitting to Review Queue..."
                      ) : (
                        <>
                          <span>Submit Project for Review</span>
                          <UploadCloud className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Live Preview & Verification Checklist (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Live Card Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-brand-neutral">
                    <span>Live Preview</span>
                    <span className="text-[10px] bg-brand-cream border border-brand-light px-2 py-0.5 rounded">
                      Interactive Card
                    </span>
                  </div>

                  <div className="rounded-card border border-brand-light bg-brand-white p-6 shadow-card space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-brand-cream border border-brand-light px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-brand-neutral">
                        {formData.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Review Pending
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-ink">
                        {formData.name || "Untitled Project"}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-brand-neutral">
                        {formData.tagline || "Your project elevator summary will appear here."}
                      </p>
                    </div>

                    <div className="space-y-2 rounded-lg bg-brand-cream/40 p-3 text-xs border border-brand-light/40">
                      <div>
                        <span className="font-semibold uppercase text-[10px] tracking-wider text-brand-neutral block">
                          Problem:
                        </span>
                        <p className="text-brand-ink/80 line-clamp-2 leading-relaxed">
                          {formData.problem || "Describe the pain point your project tackles."}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold uppercase text-[10px] tracking-wider text-brand-red block">
                          Solution:
                        </span>
                        <p className="text-brand-ink/80 line-clamp-2 leading-relaxed">
                          {formData.solution || "Explain your technical solution architecture."}
                        </p>
                      </div>
                    </div>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {parsedStack.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded bg-brand-light/50 px-2 py-0.5 text-[11px] font-mono text-brand-neutral"
                        >
                          <Code2 className="h-2.5 w-2.5" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer mock */}
                    <div className="pt-3 border-t border-brand-light/60 flex items-center justify-between text-xs font-mono text-brand-neutral">
                      <span>Lead: {formData.builderName || "Builder"}</span>
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-brand-ink" />
                        {formData.demoUrl && <ExternalLink className="h-3.5 w-3.5 text-brand-red" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Criteria */}
                <div className="rounded-card border border-brand-light bg-brand-white p-6 shadow-subtle space-y-4">
                  <h3 className="font-display text-base font-bold text-brand-ink flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Review Standards
                  </h3>
                  <div className="space-y-2.5 text-xs text-brand-neutral leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Public GitHub repo with an informative README and build instructions.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Original code: No copied clone tutorials or pre-packaged boilerplate without modifications.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Functional software: Working local or deployed build, tested for edge cases.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
