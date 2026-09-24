"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  Terminal,
  Compass,
  BookOpen,
  Briefcase,
  Users,
  HelpCircle,
  Mail,
  Flame,
  ArrowRight,
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
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Showcase", href: "/showcase" },
    { name: "Partners", href: "/partners" },
  ];

  const moreLinks = [
    {
      name: "Opportunities",
      href: "/opportunities",
      desc: "Internships, fellowships & bounties",
      icon: Briefcase,
    },
    {
      name: "Resources",
      href: "/resources",
      desc: "Roadmaps, toolkits & starter kits",
      icon: BookOpen,
    },
    {
      name: "Blog",
      href: "/blog",
      desc: "Deep-dives & builder stories",
      icon: Compass,
    },
    {
      name: "The Crew",
      href: "/crew",
      desc: "Founders & core contributors",
      icon: Users,
    },
    {
      name: "FAQ",
      href: "/faq",
      desc: "Answers to common questions",
      icon: HelpCircle,
    },
    {
      name: "Contact",
      href: "/contact",
      desc: "Partnerships & community inquiries",
      icon: Mail,
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-brand-ink/95 backdrop-blur-md border-brand-soft shadow-dark py-3"
          : "bg-brand-ink border-brand-soft/80 py-4"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Terminal className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white leading-none">
                CATALYST<span className="text-brand-red">CREW</span>
              </span>
              <span className="text-[10px] tracking-widest text-brand-light/60 uppercase font-mono mt-0.5">
                DEV COMMUNITY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-xs uppercase tracking-wider font-display font-medium rounded-button transition-colors duration-150",
                    isActive
                      ? "text-white bg-brand-soft"
                      : "text-brand-light/80 hover:text-white hover:bg-brand-soft/60"
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
                  "flex items-center gap-1 px-3.5 py-2 text-xs uppercase tracking-wider font-display font-medium rounded-button text-brand-light/80 hover:text-white hover:bg-brand-soft/60 transition-colors duration-150",
                  moreDropdownOpen && "bg-brand-soft text-white"
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
                <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-card border border-brand-soft bg-brand-soft/95 p-2 backdrop-blur-lg shadow-dark ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100">
                  <div className="grid gap-1">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-button p-2.5 text-left transition-colors hover:bg-brand-ink/80 group"
                      >
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand-ink text-brand-light group-hover:text-brand-red">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-semibold text-white group-hover:text-brand-red">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-brand-light/60 line-clamp-1">
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
              className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-display text-brand-light hover:text-white px-3 py-2 transition-colors"
            >
              <Flame className="h-3.5 w-3.5 text-brand-red" />
              Live Quests
            </Link>
            <Button
              href="https://chat.whatsapp.com/catalyst-crew-placeholder"
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
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-button border border-brand-soft text-brand-light hover:text-white hover:bg-brand-soft"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-soft bg-brand-ink px-4 py-6 shadow-dark animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className={cn(
                "px-3 py-2.5 rounded-button text-sm uppercase tracking-wider font-display font-medium text-brand-light hover:text-white hover:bg-brand-soft",
                pathname === "/" && "bg-brand-soft text-white"
              )}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2.5 rounded-button text-sm uppercase tracking-wider font-display font-medium text-brand-light hover:text-white hover:bg-brand-soft",
                  pathname === link.href && "bg-brand-soft text-white"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 border-t border-brand-soft pt-2">
              <span className="px-3 text-[10px] uppercase font-mono tracking-widest text-brand-neutral">
                Ecosystem
              </span>
              <div className="mt-2 grid grid-cols-2 gap-1">
                {moreLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-button text-xs font-display text-brand-light/80 hover:text-white hover:bg-brand-soft"
                  >
                    <item.icon className="h-3.5 w-3.5 text-brand-red" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-soft flex flex-col gap-2.5">
              <Button
                href="https://chat.whatsapp.com/catalyst-crew-placeholder"
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center gap-2"
              >
                JOIN THE CREW (WHATSAPP)
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/events"
                variant="dark"
                size="md"
                className="w-full justify-center"
              >
                EXPLORE EVENTS & QUESTS
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
