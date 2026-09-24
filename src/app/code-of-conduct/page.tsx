import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Heart, AlertOctagon, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Code of Conduct — Community Standards",
  description:
    "Our standards for fostering an open, welcoming, and harassment-free developer community.",
};

export default function CodeOfConductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream pb-20">
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container size="narrow">
          <Badge variant="red" size="sm" className="mb-3">
            COMMUNITY TRUST & SAFETY
          </Badge>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            CODE OF CONDUCT
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-light/80 leading-relaxed">
            Catalyst Crew is committed to providing a friendly, safe, and welcoming environment for everyone, regardless of experience level, gender identity, race, or background.
          </p>
        </Container>
      </section>

      <Container size="narrow" className="mt-12">
        <div className="rounded-card border border-brand-light bg-brand-white p-8 sm:p-12 shadow-subtle space-y-8 text-sm sm:text-base leading-relaxed text-brand-ink/90">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
              <Heart className="h-5 w-5 text-brand-red" />
              1. Our Pledge
            </h2>
            <p className="text-brand-neutral">
              We as contributors and leaders pledge to make participation in Catalyst Crew a harassment-free experience for everyone. We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy developer community.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              2. Expected Behavior
            </h2>
            <ul className="space-y-2 text-brand-neutral list-disc list-inside">
              <li>Demonstrating empathy and kindness toward other members.</li>
              <li>Being respectful of differing technical opinions and viewpoints.</li>
              <li>Giving and gracefully accepting constructive code review feedback.</li>
              <li>Accepting responsibility and apologizing to those affected by our mistakes.</li>
              <li>Focusing on what is best not just for us as individuals, but for the overall builder community.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
              <AlertOctagon className="h-5 w-5 text-brand-red" />
              3. Unacceptable Behavior
            </h2>
            <ul className="space-y-2 text-brand-neutral list-disc list-inside">
              <li>The use of sexualized language or imagery, and unwelcome sexual attention or advances.</li>
              <li>Trolling, insulting or derogatory comments, and personal or political attacks.</li>
              <li>Public or private harassment, doxxing, or publishing private information without consent.</li>
              <li>Plagiarism, dishonesty regarding hackathon submissions, or submitting pre-built closed work as original competition code.</li>
              <li>Commercial spam, shilling unverified crypto tokens, or aggressive affiliate marketing.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-brand-light/60 pt-6">
            <h2 className="font-display text-2xl font-bold text-brand-ink flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-red" />
              4. Enforcement & Reporting
            </h2>
            <p className="text-brand-neutral">
              Instances of abusive, harassing, or otherwise unacceptable behavior may be reported directly to community stewards at{" "}
              <a
                href="mailto:conduct@catalystxcrew.in"
                className="font-mono text-brand-red font-semibold hover:underline"
              >
                conduct@catalystxcrew.in
              </a>
              . All complaints will be reviewed and investigated promptly and fairly. Community leaders reserve the right to temporarily or permanently ban any member for violations of this code.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
