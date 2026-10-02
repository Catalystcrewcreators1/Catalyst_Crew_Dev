"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";
// @ts-ignore
import { Download04Icon, Rocket01Icon, Settings02Icon } from '@hugeicons/core-free-icons';
import BranchedMenu from "../ui/BranchedMenu";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-brand-ink border-t-3 border-brand-ink text-brand-cream pt-16 pb-12">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-7">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-block group transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
              aria-label="Catalyst Crew Dev Community Home"
            >
              <div className="relative h-12 w-48">
                <Image
                  src="/catalyst-crew-logo.png"
                  alt="Catalyst Crew Dev Community"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-brand-cream/60 max-w-sm font-sans">
              A high-agency developer community for builders, innovators, and creators who don&apos;t just consume technology — they build with it.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2.5 rounded-brutal border-2 border-brand-cream/30 bg-brand-soft px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand-cream/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint"></span>
              </span>
              Community Online
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: "https://github.com/catalyst-crew", icon: Github, label: "GitHub" },
                { href: "https://x.com/catalystxcrew", icon: Twitter, label: "Twitter / X" },
                { href: "https://linkedin.com/company/catalystxcrew", icon: Linkedin, label: "LinkedIn" },
                { href: "https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l", icon: MessageSquare, label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-brand-cream/30 bg-brand-soft text-brand-cream/70 hover:bg-brand-red hover:text-white hover:border-brand-cream/50 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Column 1: Core */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-brand-cream/60">
              <li><Link href="/" className="hover:text-brand-cream transition-colors">Home Overview</Link></li>
              <li><Link href="/about" className="hover:text-brand-cream transition-colors">About Mission & Vision</Link></li>
              <li>
                <Link href="/events" className="hover:text-brand-cream transition-colors flex items-center gap-1.5">
                  Current Quests
                  <span className="text-[10px] font-display font-bold text-brand-ink bg-brand-red px-1.5 py-0.5 rounded-brutal border border-brand-cream/30">LIVE</span>
                </Link>
              </li>
              <li><Link href="/community" className="hover:text-brand-cream transition-colors">Join the Community</Link></li>
              <li><Link href="/showcase" className="hover:text-brand-cream transition-colors">Builder Showcase</Link></li>
              <li><Link href="/partners" className="hover:text-brand-cream transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Nav Column 2: Ecosystem */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-brand-cream/60">
              <li><Link href="/opportunities" className="hover:text-brand-cream transition-colors">Opportunities & Jobs</Link></li>
              <li><Link href="/resources" className="hover:text-brand-cream transition-colors">Guides & Toolkits</Link></li>
              <li><Link href="/blog" className="hover:text-brand-cream transition-colors">Editorial & Stories</Link></li>
              <li><Link href="/crew" className="hover:text-brand-cream transition-colors">Founding Team</Link></li>
              <li><Link href="/faq" className="hover:text-brand-cream transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Nav Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Standards
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-brand-cream/60">
              <li><Link href="/code-of-conduct" className="hover:text-brand-cream transition-colors">Code of Conduct</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-cream transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-cream transition-colors">Terms of Service</Link></li>
              <li>
                <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream transition-colors inline-flex items-center gap-1">
                  Unstop Portal <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 4: Menu */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Resources
            </h3>
            <BranchedMenu
              items={[
                {
                  label: 'Getting started',
                  children: [
                    { value: 'install', label: 'Installation', icon: Download04Icon },
                    { value: 'quick', label: 'Quick start', icon: Rocket01Icon },
                    { value: 'config', label: 'Configuration', icon: Settings02Icon }
                  ]
                },
                { label: 'Components', children: [{ value: 'buttons', label: 'Buttons', icon: undefined }, { value: 'overlays', label: 'Overlays', icon: undefined }] }
              ] as any}
              defaultOpen={0}
              defaultActive="quick"
              onSelect={(value: string) => router.push(`/${value}`)}
              onToggle={(index: number, open: boolean) => {}}
              color="#f5f5f5"
              accentColor="#f5f5f5"
              lineColor="#3f3f46"
              width={240}
              rowHeight={36}
              indent={40}
              trunk={14}
              radius={10}
              lineWidth={1.5}
              fontSize={14}
              drawDuration={400}
              foldDuration={300}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t-2 border-brand-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display font-bold uppercase tracking-wider text-brand-cream/40">
          <p>© {new Date().getFullYear()} Catalyst Crew. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Learn</span>
            <span className="text-brand-cream/20">•</span>
            <span>Build</span>
            <span className="text-brand-cream/20">•</span>
            <span>Collaborate</span>
            <span className="text-brand-cream/20">•</span>
            <span className="text-brand-red">Innovate</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
