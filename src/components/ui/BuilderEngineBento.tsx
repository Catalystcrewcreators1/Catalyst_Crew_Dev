"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Terminal,
  Zap,
  Users2,
  Trophy,
  GitPullRequest,
  CheckCircle2,
  ArrowRight,
  Code2,
  Sparkles,
  ShieldCheck,
  Flame,
  Clock,
  Radio,
  ExternalLink,
} from "lucide-react";

export function BuilderEngineBento() {
  const [activeTab, setActiveTab] = useState<"deploy" | "squad" | "telemetry">("deploy");

  return (
    <section className="relative py-20 bg-brand-cream/80 border-b border-brand-light/80 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-light bg-brand-white px-3.5 py-1 text-xs font-mono text-brand-red font-semibold shadow-sm">
            <Radio className="h-3.5 w-3.5 animate-pulse text-brand-red" />
            <span>HOW THE ECOSYSTEM WORKS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink tracking-tight">
            Built for Developers Who Ship.
          </h2>

          <p className="text-sm sm:text-base text-brand-neutral max-w-xl mx-auto leading-relaxed">
            Forget passive webinars and fake certificates. Catalyst Crew is a high-velocity launchpad designed around working software, peer squads, and real bounties.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 (Large - 7 cols): Interactive 48-Hour Build Station / Live Terminal */}
          <div className="md:col-span-7 rounded-3xl border border-brand-ink bg-brand-ink text-white p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

            <div>
              {/* Header & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-brand-soft">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#D83A35]" />
                  <span className="h-3 w-3 rounded-full bg-[#EAB308]" />
                  <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
                  <span className="ml-2 font-mono text-xs text-brand-light/60">
                    catalyst_arena.sh
                  </span>
                </div>

                {/* Tab selector */}
                <div className="flex items-center gap-1 rounded-lg bg-brand-soft p-1 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("deploy")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "deploy"
                        ? "bg-brand-red text-white font-bold"
                        : "text-brand-light/60 hover:text-white"
                    }`}
                  >
                    deploy:mvp
                  </button>
                  <button
                    onClick={() => setActiveTab("squad")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "squad"
                        ? "bg-brand-red text-white font-bold"
                        : "text-brand-light/60 hover:text-white"
                    }`}
                  >
                    match:squad
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "telemetry"
                        ? "bg-brand-red text-white font-bold"
                        : "text-brand-light/60 hover:text-white"
                    }`}
                  >
                    live:bounties
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="mt-5 font-mono text-xs leading-relaxed min-h-[170px]">
                {activeTab === "deploy" && (
                  <div className="space-y-2.5">
                    <p className="text-emerald-400">
                      $ npx catalyst-quest verify --slug=catalyst-hack-2026
                    </p>
                    <p className="text-brand-light/80">
                      [INFO] Checking git repository commit history...
                    </p>
                    <p className="text-brand-light/80">
                      [PASS] 24 continuous commits detected on branch main
                    </p>
                    <p className="text-brand-light/80">
                      [PASS] Zero-copy Tokio TCP server passed 10k rps stress test
                    </p>
                    <div className="mt-3 p-3 rounded-lg bg-brand-soft/80 border border-brand-soft text-[11px] text-amber-300 flex items-center justify-between">
                      <span>✓ Deployed URL: https://hypercache.catalystxcrew.in</span>
                      <span className="text-emerald-400 font-bold">p99: 0.42ms</span>
                    </div>
                  </div>
                )}

                {activeTab === "squad" && (
                  <div className="space-y-2.5">
                    <p className="text-emerald-400">
                      $ catalyst-match --skills=&quot;Rust, Next.js, PyTorch&quot;
                    </p>
                    <p className="text-brand-light/80">
                      [MATCHED] Found 3 complimentary teammates in 38 seconds:
                    </p>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="flex justify-between text-brand-light/90">
                        <span>• Devansh K. (IITB)</span>
                        <span className="text-brand-red">Systems / eBPF / Rust</span>
                      </div>
                      <div className="flex justify-between text-brand-light/90">
                        <span>• Pooja H. (PES)</span>
                        <span className="text-amber-400">AI Agents / LangChain</span>
                      </div>
                      <div className="flex justify-between text-brand-light/90">
                        <span>• Ananya R. (BITS)</span>
                        <span className="text-cyan-400">UI/UX &amp; Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "telemetry" && (
                  <div className="space-y-2.5">
                    <p className="text-emerald-400">$ catalyst-bounties --status=verified</p>
                    <p className="text-brand-light/80">[LIVE] Active Cash Vault: ₹3,25,000</p>
                    <div className="space-y-1 pt-1 text-[11px] text-brand-light/70">
                      <div className="flex justify-between py-1 border-b border-brand-soft/60">
                        <span>Genesis Flagship Track</span>
                        <span className="text-emerald-400 font-bold">₹1,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-soft/60">
                        <span>Agentic AI 48h Sprint</span>
                        <span className="text-emerald-400 font-bold">₹75,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Open Source Bug Bounties</span>
                        <span className="text-emerald-400 font-bold">₹50,000</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom feature callout */}
            <div className="mt-6 pt-4 border-t border-brand-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  Proof of Work Over Pitch Decks
                </h3>
                <p className="text-xs text-brand-light/60 mt-0.5">
                  Every project is evaluated on live URL uptime, test suites, and clean repos.
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-brand-red hover:underline shrink-0 font-bold"
              >
                <span>Enter Arena</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2 (5 cols): Peer Squad Formation */}
          <div className="md:col-span-5 rounded-3xl border border-brand-light bg-brand-white p-7 sm:p-8 shadow-card flex flex-col justify-between hover:border-brand-ink/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream border border-brand-light text-brand-ink">
                  <Users2 className="h-6 w-6 text-brand-red" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                  ● 2,500+ Online
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-brand-ink">
                Instant Peer Squads
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-neutral leading-relaxed">
                Never compete solo. Our matching algorithm connects frontend designers, systems hackers, and AI researchers across 40+ engineering universities.
              </p>

              {/* Tag Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Rust", "Next.js", "PyTorch", "io_uring", "Web3", "Tailwind", "Docker"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-brand-cream border border-brand-light text-[11px] font-mono text-brand-ink font-semibold"
                    >
                      #{skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-light/70 flex items-center justify-between">
              <span className="text-xs font-mono text-brand-neutral">
                Avg Match Speed: <strong className="text-brand-ink">&lt; 45 sec</strong>
              </span>
              <Link
                href="/community"
                className="inline-flex items-center gap-1 text-xs font-display uppercase tracking-wider text-brand-red hover:underline font-bold"
              >
                Find Team &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3 (4 cols): 100% IP Ownership & Zero Equity */}
          <div className="md:col-span-4 rounded-3xl border border-brand-light bg-brand-white p-7 shadow-card flex flex-col justify-between hover:border-brand-ink/40 transition-colors">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream border border-brand-light text-brand-ink mb-4">
                <ShieldCheck className="h-6 w-6 text-brand-red" />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-ink">
                100% IP Ownership
              </h3>
              <p className="mt-2 text-xs text-brand-neutral leading-relaxed">
                You built it, you own it. Catalyst Crew claims zero equity or IP over your code. Turn your weekend prototype into a venture-backed startup.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-light/70 flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold">
              <CheckCircle2 className="h-4 w-4" />
              <span>0% Equity • 100% Builder-Owned</span>
            </div>
          </div>

          {/* Card 4 (4 cols): Cash Bounties & Cloud Grants */}
          <div className="md:col-span-4 rounded-3xl border border-brand-light bg-brand-white p-7 shadow-card flex flex-col justify-between hover:border-brand-ink/40 transition-colors">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream border border-brand-light text-brand-ink mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-ink">
                ₹3,25,000+ Prize Vault
              </h3>
              <p className="mt-2 text-xs text-brand-neutral leading-relaxed">
                Direct cash prizes, seed micro-grants, and over $20,000 in free Cloudflare, Supabase, and AWS credits to power your infra.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-light/70 flex items-center justify-between text-xs font-mono">
              <span className="text-brand-neutral">Verified Payouts</span>
              <span className="text-amber-600 font-bold">Direct to Builders</span>
            </div>
          </div>

          {/* Card 5 (4 cols): Weekly Engineering AMAs */}
          <div className="md:col-span-4 rounded-3xl border border-brand-light bg-brand-white p-7 shadow-card flex flex-col justify-between hover:border-brand-ink/40 transition-colors">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cream border border-brand-light text-brand-ink mb-4">
                <Zap className="h-6 w-6 text-brand-red" />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-ink">
                Weekly Founder AMAs
              </h3>
              <p className="mt-2 text-xs text-brand-neutral leading-relaxed">
                Unfiltered architectural teardowns with Staff Engineers, open-source maintainers, and VC-backed startup founders.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-light/70 flex items-center justify-between text-xs font-mono">
              <span className="text-brand-neutral">Every Saturday @ 7 PM</span>
              <span className="text-brand-red font-bold">Open Access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
