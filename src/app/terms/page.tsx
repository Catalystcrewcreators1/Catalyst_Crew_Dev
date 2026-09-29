import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service — Catalyst Crew",
  description: "Terms and conditions governing the use of Catalyst Crew platforms and events.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream pb-20">
      <section className="bg-brand-ink text-white py-16 border-b-3 border-brand-ink">
        <Container size="narrow">
          <Badge variant="red" size="sm" className="mb-3">
            LEGAL AGREEMENT
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            TERMS OF SERVICE
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-light/80 leading-relaxed">
            Effective Date: September 2026 • Catalyst Crew (catalystxcrew.in)
          </p>
        </Container>
      </section>

      <Container size="narrow" className="mt-12">
        <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-8 sm:p-12 shadow-brutal-sm space-y-6 text-sm sm:text-base leading-relaxed text-brand-neutral">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website at catalystxcrew.in, participating in our hackathons, or joining our WhatsApp/Discord communities, you agree to comply with and be bound by these Terms of Service and our Code of Conduct.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              2. Intellectual Property & Project Ownership
            </h2>
            <p>
              You retain 100% full intellectual property ownership of all code, designs, and prototypes you build during Catalyst Crew events, hackathons, and cohorts. We claim zero equity or IP ownership over participant creations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              3. Competition Integrity & Disqualification
            </h2>
            <p>
              Participants must adhere strictly to fair-play rules. Any code plagiarism, unauthorized use of private proprietary codebases without disclosure, or unsportsmanlike conduct will result in immediate disqualification and forfeiture of prizes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              4. Disclaimer of Warranties
            </h2>
            <p>
              Our website, resources, and event platforms are provided &ldquo;as is&rdquo; without warranties of any kind. We strive for high uptime and accurate event information, but do not guarantee uninterrupted availability.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              5. Contact Information
            </h2>
            <p>
              Questions regarding these Terms may be directed to{" "}
              <a
                href="mailto:legal@catalystxcrew.in"
                className="font-mono text-brand-red font-semibold hover:underline"
              >
                legal@catalystxcrew.in
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
