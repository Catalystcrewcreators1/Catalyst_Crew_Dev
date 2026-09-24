import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Terminal, ArrowUpRight, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink border-t border-brand-soft text-brand-light/80 pt-16 pb-12">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white shadow-sm">
                <Terminal className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white leading-none">
                  CATALYST<span className="text-brand-red">CREW</span>
                </span>
                <span className="text-[10px] tracking-widest text-brand-light/60 uppercase font-mono mt-0.5">
                  DEV COMMUNITY • INDIA
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-brand-light/70 max-w-sm">
              A high-agency developer community for builders, innovators, and creators who don&apos;t just consume technology — they build with it.
            </p>

            {/* Live Status indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-soft bg-brand-soft/80 px-3.5 py-1.5 text-xs font-mono text-brand-light/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>WORLD LOADED</span>
              <span className="text-brand-light/30">•</span>
              <span className="text-emerald-400">COMMUNITY ONLINE</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/catalyst-crew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-soft bg-brand-soft text-brand-light hover:text-white hover:border-brand-light/40 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/catalystxcrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-soft bg-brand-soft text-brand-light hover:text-white hover:border-brand-light/40 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/catalystxcrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-soft bg-brand-soft text-brand-light hover:text-white hover:border-brand-light/40 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/catalyst-crew-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-soft bg-brand-soft text-brand-light hover:text-brand-red hover:border-brand-red/40 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav Column 1: Core */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Platform
            </h3>
            <ul className="space-y-2.5 text-xs font-display">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors flex items-center gap-1">
                  Current Quests
                  <span className="text-[10px] text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Join the Community
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-white transition-colors">
                  Builder Showcase
                </Link>
              </li>
              <li>
                <Link href="/showcase/submit" className="hover:text-white transition-colors">
                  Submit a Build
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Ecosystem */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-xs font-display">
              <li>
                <Link href="/opportunities" className="hover:text-white transition-colors">
                  Opportunities & Jobs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Guides & Toolkits
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Editorial & Stories
                </Link>
              </li>
              <li>
                <Link href="/crew" className="hover:text-white transition-colors">
                  Founding Team & Crew
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Direct Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Trust & Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Standards & Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-display">
              <li>
                <Link href="/code-of-conduct" className="hover:text-white transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Unstop Partner Portal
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-brand-soft/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-light/50">
          <p>© {new Date().getFullYear()} Catalyst Crew (catalystxcrew.in). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>LEARN</span>
            <span>•</span>
            <span>BUILD</span>
            <span>•</span>
            <span>COLLABORATE</span>
            <span>•</span>
            <span className="text-brand-red">INNOVATE</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
