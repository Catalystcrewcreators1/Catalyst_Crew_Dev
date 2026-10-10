import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import SwipeDeck from "@/components/matchmaking/SwipeDeck";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Hackathon Matchmaking — Find Your Squad",
  description: "Swipe to find developers with complementary skills for the next big Catalyst Hack.",
};

export default function MatchmakingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-red selection:text-white pb-32">
      <section className="bg-brand-ink text-brand-white pt-20 pb-24 border-b-3 border-brand-ink text-center">
        <Container size="narrow">
          <Badge variant="yellow" size="md" className="mb-4">
            BETA FEATURE
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
            FIND YOUR <span className="text-brand-red">SQUAD</span>.
          </h1>
          <p className="mt-5 text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            Never enter a hackathon solo again. Swipe right on developers with complementary skills to form an unstoppable team.
          </p>
        </Container>
      </section>

      <section className="mt-[-4rem]">
        <Container>
          <SwipeDeck />
        </Container>
      </section>
    </div>
  );
}
