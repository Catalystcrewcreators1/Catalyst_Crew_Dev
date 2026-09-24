import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Catalyst Crew",
  description: "Privacy policy regarding data collection, usage, and protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream pb-20">
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container size="narrow">
          <Badge variant="red" size="sm" className="mb-3">
            LEGAL & PRIVACY
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            PRIVACY POLICY
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-light/80 leading-relaxed">
            Last Updated: September 2026 • Catalyst Crew (catalystxcrew.in)
          </p>
        </Container>
      </section>

      <Container size="narrow" className="mt-12">
        <div className="rounded-card border border-brand-light bg-brand-white p-8 sm:p-12 shadow-subtle space-y-6 text-sm sm:text-base leading-relaxed text-brand-neutral">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when filling out partnership inquiries, contacting our team, registering for hackathons via external partners (like Unstop), or joining our communication channels. This includes your name, email address, company or college affiliation, and public GitHub profile link.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              2. How We Use Information
            </h2>
            <p>
              We use collected information solely to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Coordinate hackathon logistics, prizes, and team matching.</li>
              <li>Respond to inquiries submitted via our contact and partner forms.</li>
              <li>Send critical community updates and event announcements.</li>
              <li>Prevent spam, abuse, and violations of our Code of Conduct.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              3. Data Sharing & Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. When you register for events hosted on third-party platforms (such as Unstop, Lu.ma, or Discord), your interaction is governed by their respective privacy terms. With your explicit permission, we may share finalist project resumes with verified hiring sponsors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              4. Cookies and Analytics
            </h2>
            <p>
              Our website uses lightweight, privacy-friendly analytics to count unique visitors and measure page performance without storing persistent cross-site tracking cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-ink">
              5. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request deletion of any submitted inquiry data, please contact{" "}
              <a
                href="mailto:privacy@catalystxcrew.in"
                className="font-mono text-brand-red font-semibold hover:underline"
              >
                privacy@catalystxcrew.in
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
