"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqData } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { HelpCircle, ChevronDown, Search, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "all",
    "General",
    "Membership",
    "Events & Hackathons",
    "Partners & Sponsors",
    "Projects",
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                KNOWLEDGE BASE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              FREQUENTLY ASKED
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Everything you need to know about joining Catalyst Crew, participating in hackathons, team formation, project showcases, and company partnerships.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-brand-cream border-b-3 border-brand-ink sticky top-[73px] z-30 backdrop-blur-md bg-brand-cream/90">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-brutal text-xs font-display font-medium uppercase tracking-wider transition-colors shrink-0 ${
                    selectedCategory === cat
                      ? "bg-brand-ink text-white"
                      : "bg-brand-white border-3 border-brand-ink text-brand-neutral hover:text-brand-ink"
                  }`}
                >
                  {cat === "all" ? "All Questions" : cat}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-neutral/60" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-1.5 rounded-brutal border-3 border-brand-ink bg-brand-white text-xs text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container size="narrow">
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white transition-all overflow-hidden shadow-brutal-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-brand-cream/20 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-brand-ink">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cream border-3 border-brand-ink transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-brand-ink text-white border-brand-ink" : "text-brand-ink"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-brand-neutral leading-relaxed border-t border-brand-light/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-14 rounded-brutal brutal-card bg-brand-ink text-white p-8 text-center space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Have a question not answered here?
            </h3>
            <p className="text-xs sm:text-sm text-brand-light/70 max-w-md mx-auto">
              Our community team is active daily on WhatsApp, Discord, and email. Reach out and we&apos;ll be glad to help.
            </p>
            <div className="pt-2 flex justify-center">
              <Button href="/contact" variant="primary" size="sm" className="gap-2">
                CONTACT US DIRECTLY
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
