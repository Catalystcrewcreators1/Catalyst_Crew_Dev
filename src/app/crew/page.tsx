import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { teamData } from "@/data/team";
import { Users, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Crew — Leadership & Core Contributors",
  description:
    "Meet the founders, community architects, and technical leads driving Catalyst Crew.",
};

export default function CrewPage() {
  const founding = teamData.filter((m) => m.category === "Founding Team");
  const core = teamData.filter((m) => m.category !== "Founding Team");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                ORGANIZATIONAL ROSTER
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              MEET THE CREW
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              We are developers, community architects, and hackers committed to building an ecosystem where merit, shipped software, and technical grit reign supreme.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Leadership */}
      <section className="py-16 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="FOUNDING COUNCIL"
            title="Executive Leadership"
            description="The original stewards responsible for the vision, technical standards, community health, and operations of Catalyst Crew."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {founding.map((member) => (
              <div
                key={member.name}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 flex flex-col justify-between transition-all hover:border-brand-ink/40 shadow-brutal-sm"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden rounded-lg bg-brand-soft mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-ink">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-medium text-brand-red uppercase mt-0.5">
                    {member.role}
                  </div>
                  <p className="mt-3 text-xs text-brand-neutral leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-light/60 flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-brand-neutral hover:text-brand-ink hover:bg-brand-cream"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-brand-neutral hover:text-brand-ink hover:bg-brand-cream"
                      aria-label="Twitter / X"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-brand-neutral hover:text-brand-ink hover:bg-brand-cream"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Engineering, Ops & Design */}
      <section className="py-16 bg-brand-white border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="DOMAIN LEADS"
            title="Core Team & Leads"
            description="Leading our open-source programs, student workshops, hackathon logistics, and visual design systems."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {core.map((member) => (
              <div
                key={member.name}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden rounded-lg bg-brand-soft mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-ink">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-medium text-brand-red uppercase mt-0.5">
                    {member.role}
                  </div>
                  <p className="mt-2.5 text-xs text-brand-neutral leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-brand-ink text-white text-center">
        <Container size="narrow">
          <h2 className="font-display text-3xl font-bold">
            Want to Join the Core Crew?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-brand-light/80 max-w-md mx-auto">
            We are always scouting passionate student leads for campus ambassadors, open-source maintainers, and community mentors.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="primary" size="sm" className="gap-2">
              APPLY FOR CORE TEAM
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
