"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { 
  ArrowUpRight, Github, Twitter, Linkedin, MessageSquare, Download, Rocket, Settings,
  Home, Info, Calendar, Users, Trophy, Handshake,
  Briefcase, Library, BookOpen, UserCircle, HelpCircle, Mail,
  Shield, Lock, FileText, ExternalLink
} from "lucide-react";
import BranchedMenu from "../ui/BranchedMenu";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-brand-ink border-t-3 border-brand-ink text-brand-cream pt-16 pb-12">
      <Container>
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-between gap-12">
          {/* Brand Manifesto Column */}
          <div className="lg:max-w-xs space-y-5">
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
            <BranchedMenu
              items={[
                {
                  label: 'Core',
                  children: [
                    { value: '', label: 'Home Overview', icon: Home },
                    { value: 'about', label: 'About Mission', icon: Info },
                    { value: 'events', label: 'Current Quests', icon: Calendar },
                    { value: 'community', label: 'Join Community', icon: Users },
                    { value: 'showcase', label: 'Builder Showcase', icon: Trophy },
                    { value: 'partners', label: 'Partner With Us', icon: Handshake }
                  ]
                }
              ] as any}
              defaultOpen={0}
              defaultActive=""
              onSelect={(value: string) => {
                if (value.startsWith('http')) window.open(value, '_blank', 'noopener,noreferrer');
                else router.push(`/${value}`);
              }}
              onToggle={() => {}}
              color="#f5f5f5"
              accentColor="#f5f5f5"
              lineColor="#3f3f46"
              width={320}
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

          {/* Nav Column 2: Ecosystem */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Ecosystem
            </h3>
            <BranchedMenu
              items={[
                {
                  label: 'Network',
                  children: [
                    { value: 'opportunities', label: 'Opportunities', icon: Briefcase },
                    { value: 'resources', label: 'Guides & Tools', icon: Library },
                    { value: 'blog', label: 'Editorial', icon: BookOpen },
                    { value: 'crew', label: 'Founding Team', icon: UserCircle },
                    { value: 'faq', label: 'FAQ', icon: HelpCircle },
                    { value: 'contact', label: 'Contact', icon: Mail }
                  ]
                }
              ] as any}
              defaultOpen={0}
              defaultActive=""
              onSelect={(value: string) => {
                if (value.startsWith('http')) window.open(value, '_blank', 'noopener,noreferrer');
                else router.push(`/${value}`);
              }}
              onToggle={() => {}}
              color="#f5f5f5"
              accentColor="#f5f5f5"
              lineColor="#3f3f46"
              width={320}
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

          {/* Nav Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Standards
            </h3>
            <BranchedMenu
              items={[
                {
                  label: 'Legal & Ethics',
                  children: [
                    { value: 'code-of-conduct', label: 'Code of Conduct', icon: Shield },
                    { value: 'privacy', label: 'Privacy Policy', icon: Lock },
                    { value: 'terms', label: 'Terms of Service', icon: FileText },
                    { value: 'https://unstop.com', label: 'Unstop Portal', icon: ExternalLink }
                  ]
                }
              ] as any}
              defaultOpen={0}
              defaultActive=""
              onSelect={(value: string) => {
                if (value.startsWith('http')) window.open(value, '_blank', 'noopener,noreferrer');
                else router.push(`/${value}`);
              }}
              onToggle={() => {}}
              color="#f5f5f5"
              accentColor="#f5f5f5"
              lineColor="#3f3f46"
              width={320}
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

          {/* Nav Column 4: Menu */}
          <div className="space-y-4">
            <h3 className="font-display text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Resources
            </h3>
            <BranchedMenu
              items={[
                {
                  label: 'Getting started',
                  children: [
                    { value: 'install', label: 'Installation', icon: Download },
                    { value: 'quick', label: 'Quick start', icon: Rocket },
                    { value: 'config', label: 'Configuration', icon: Settings }
                  ]
                },
                { label: 'Components', children: [{ value: 'buttons', label: 'Buttons', icon: undefined }, { value: 'overlays', label: 'Overlays', icon: undefined }] }
              ] as any}
              defaultOpen={0}
              defaultActive="quick"
              onSelect={(value: string) => {
                if (value.startsWith('http')) window.open(value, '_blank', 'noopener,noreferrer');
                else router.push(`/${value}`);
              }}
              onToggle={(index: number, open: boolean) => {}}
              color="#f5f5f5"
              accentColor="#f5f5f5"
              lineColor="#3f3f46"
              width={320}
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
