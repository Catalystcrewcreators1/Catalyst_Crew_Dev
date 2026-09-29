import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { teamData } from "@/data/team";
import {
  Terminal,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Mission, Vision & Team",
  description:
    "Learn about Catalyst Crew, our founding mission to empower student builders, our architectural beliefs, and the core team behind the movement.",
};

export default function AboutPage() {
  const foundingTeam = teamData.filter((m) => m.category === "Founding Team");

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-brand-ink text-white py-20 border-b-3 border-brand-ink">
        <Container size="narrow" className="text-center">
          <Badge variant="red" size="md" className="mb-4">
            OUR PURPOSE & ETHOS
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
            BUILT BY BUILDERS, <br />
            <span className="text-brand-red">FOR BUILDERS</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            Catalyst Crew is an engineering community dedicated to transforming curious students into relentless software architects who build, compete, and ship production software.
          </p>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white mb-6">
                  <Eye className="h-6 w-6 text-brand-red" />
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-brand-red font-semibold">
                  OUR VISION
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-ink">
                  Where Builders Discover Their Next Horizon
                </h2>
                <p className="mt-4 text-sm text-brand-neutral leading-relaxed">
                  To make Catalyst Crew the premier launchpad where any student developer discovers the next big thing they can build, compete in, learn from, or become a part of.
                </p>
              </div>
            </div>

            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white mb-6">
                  <Target className="h-6 w-6 text-brand-red" />
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-brand-red font-semibold">
                  OUR MISSION
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-ink">
                  Learn Together, Ship Real Outcomes
                </h2>
                <p className="mt-4 text-sm text-brand-neutral leading-relaxed">
                  To build a collaborative community where developers learn cutting-edge systems, build real-world software, support peer squads, and connect with high-agency career opportunities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We Exist & What We Believe */}
      <section className="py-20 bg-brand-white border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="PHILOSOPHY"
            title="Why Catalyst Crew Exists"
            description="University curriculum often lags years behind the modern production software landscape. We exist to bridge the gap with hands-on grit."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-7">
              <Zap className="h-6 w-6 text-brand-red mb-3" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                No Certificate Chasing
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                Passive webinar attendance certificates carry zero weight in hiring. We celebrate deployed URLs, automated test suites, and GitHub commit histories.
              </p>
            </div>

            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-7">
              <Users className="h-6 w-6 text-brand-red mb-3" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                Peer Squad Dynamics
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                Coding alone leads to tutorial fatigue. When you build alongside ambitious peers, your iteration speed increases by 10x.
              </p>
            </div>

            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-cream/30 p-7">
              <Shield className="h-6 w-6 text-brand-red mb-3" />
              <h3 className="font-display text-xl font-bold text-brand-ink">
                Merit-Based Access
              </h3>
              <p className="mt-2 text-sm text-brand-neutral leading-relaxed">
                It doesn&apos;t matter what tier your college is. If you can write robust code, design clean UX, or architect scalable databases, you belong here.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founding Team Spotlight */}
      <section className="py-20 bg-brand-cream border-b-3 border-brand-ink">
        <Container>
          <SectionHeader
            eyebrow="LEADERSHIP"
            title="The Founding Team"
            description="The engineers and organizers driving the mission of Catalyst Crew forward every day."
            action={
              <Button href="/crew" variant="outline" size="sm">
                VIEW FULL CREW ROSTER
              </Button>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundingTeam.map((member) => (
              <div
                key={member.name}
                className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg bg-brand-soft mb-4">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-brand-ink text-white text-center">
        <Container size="narrow">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Ready to Build With Us?
          </h2>
          <p className="mt-3 text-brand-light/80 text-sm sm:text-base">
            Join the WhatsApp community and start your first quest today.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              href="https://chat.whatsapp.com/JMueST1O52NEmwY7Xji92l"
              isExternal
              variant="primary"
              size="md"
              className="gap-2"
            >
              JOIN THE CREW
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
