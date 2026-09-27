"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  Compass,
  BookOpen,
  Briefcase,
  Users,
  HelpCircle,
  Mail,
  Flame,
  ArrowRight,
  Handshake,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Showcase", href: "/showcase" },
  ];

  const moreLinks = [
    { name: "Partners", href: "/partners", desc: "Sponsorships, tracks & hiring funnels", icon: Handshake },
    { name: "Opportunities", href: "/opportunities", desc: "Internships, fellowships & bounties", icon: Briefcase },
    { name: "Resources", href: "/resources", desc: "Roadmaps, toolkits & starter kits", icon: BookOpen },
    { name: "Blog", href: "/blog", desc: "Deep-dives & builder stories", icon: Compass },
    { name: "The Crew", href: "/crew", desc: "Founders & core contributors", icon: Users },
    { name: "FAQ", href: "/faq", desc: "Answers to common questions", icon: HelpCircle },
    { name: "Contact", href: "/contact", desc: "Partnerships & community inquiries", icon: Mail },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b-3 border-brand-ink",
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-sm py-2.5 shadow-[0_4px_0_0_rgba(26,26,26,0.08)]"
          : "bg-brand-cream py-3.5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
            aria-label="Catalyst Crew Dev Community Home"
          >
            <div className="relative h-10 sm:h-11 w-36 sm:w-44">
              <Image
                src="/catalyst-crew-logo.png"
                alt="Catalyst Crew Dev Community"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-xs uppercase tracking-wider font-display font-bold rounded-brutal transition-all duration-150",
                    isActive
                      ? "bg-brand-yellow text-brand-ink border-2 border-brand-ink shadow-brutal-sm"
                      : "text-brand-ink hover:bg-brand-yellow/40 border-2 border-transparent hover:border-brand-ink"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-xs uppercase tracking-wider font-display font-bold rounded-brutal transition-all duration-150 border-2",
                  moreDropdownOpen
                    ? "bg-brand-yellow text-brand-ink border-brand-ink shadow-brutal-sm"
                    : "text-brand-ink border-transparent hover:bg-brand-yellow/40 hover:border-brand-ink"
                )}
              >
                More
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    moreDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-brutal border-3 border-brand-ink bg-brand-cream p-2 shadow-brutal-lg">
                  <div className="grid gap-1">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-brutal p-2.5 text-left transition-colors hover:bg-brand-yellow/30 group"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-brutal border-2 border-brand-ink bg-brand-white group-hover:bg-brand-red group-hover:text-white">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-bold text-brand-ink">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-brand-neutral line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/events"
              className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-display font-bold text-brand-ink hover:text-brand-red px-3 py-2 transition-colors"
            >
              <Flame className="h-3.5 w-3.5 text-brand-red" />
              Live Quests
            </Link>
            <Button
              href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
              isExternal
              variant="primary"
              size="sm"
              className="gap-2"
            >
              JOIN THE CREW
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-brutal border-2 border-brand-ink text-brand-ink hover:bg-brand-yellow shadow-brutal-sm hover:shadow-brutal-hover hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-3 border-brand-ink bg-brand-cream px-4 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-brutal text-sm uppercase tracking-wider font-display font-bold border-2 transition-all",
                  pathname === link.href
                    ? "bg-brand-yellow border-brand-ink shadow-brutal-sm"
                    : "text-brand-ink border-transparent hover:bg-brand-yellow/30 hover:border-brand-ink"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-3 border-t-2 border-brand-ink/20 pt-3">
              <span className="px-3 text-[10px] uppercase font-display font-bold tracking-widest text-brand-neutral">
                Ecosystem
              </span>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {moreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-brutal text-xs font-display font-bold text-brand-ink hover:bg-brand-yellow/30 border-2 border-transparent hover:border-brand-ink"
                  >
                    <item.icon className="h-3.5 w-3.5 text-brand-red" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t-2 border-brand-ink/20 flex flex-col gap-2.5">
              <Button
                href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center gap-2"
              >
                JOIN THE CREW
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/events"
                variant="secondary"
                size="md"
                className="w-full justify-center"
              >
                EXPLORE EVENTS
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
