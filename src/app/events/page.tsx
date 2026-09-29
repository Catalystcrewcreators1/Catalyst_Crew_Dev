"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EventCard } from "@/components/events/EventCard";
import { eventsData } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Search, Flame, Filter } from "lucide-react";

export default function EventsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesStatus =
        selectedStatus === "all" || event.status === selectedStatus;
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [selectedStatus, selectedCategory, searchQuery]);

  const categories = ["all", "Hackathon", "Workshop", "Challenge"];
  const statuses = [
    { id: "all", label: "All Quests" },
    { id: "live", label: "Live Now" },
    { id: "upcoming", label: "Upcoming" },
    { id: "ended", label: "Archived" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b-3 border-brand-ink">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                DEV COMPETITIONS & WORKSHOPS
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              CURRENT QUESTS
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Step into national hackathons, build sprints, and competitive quests. Official announcements, team coordination, and Round 1 PPT submissions are conducted via our verified community channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Content Controls */}
      <section className="py-8 bg-brand-cream border-b-3 border-brand-ink sticky top-[73px] z-30 backdrop-blur-md bg-brand-cream/90">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Status Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  className={`px-3.5 py-1.5 rounded-brutal text-xs font-display font-medium uppercase tracking-wider transition-colors shrink-0 ${
                    selectedStatus === status.id
                      ? "bg-brand-ink text-white"
                      : "bg-brand-white border-3 border-brand-ink text-brand-neutral hover:text-brand-ink"
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>

            {/* Search Input & Category Dropdown */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-neutral/60" />
                <input
                  type="text"
                  placeholder="Search quests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-1.5 rounded-brutal border-3 border-brand-ink bg-brand-white text-xs text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:outline-none"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1.5 rounded-brutal border-3 border-brand-ink bg-brand-white text-xs font-display text-brand-ink focus:border-brand-red focus:outline-none shrink-0"
              >
                <option value="all">All Categories</option>
                <option value="Hackathon">Hackathons</option>
                <option value="Workshop">Workshops</option>
                <option value="Challenge">Challenges</option>
              </select>
            </div>
          </div>
        </Container>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-brand-cream flex-1">
        <Container>
          {filteredEvents.length === 1 ? (
            <div className="max-w-2xl mx-auto">
              <EventCard key={filteredEvents[0].slug} event={filteredEvents[0]} />
            </div>
          ) : filteredEvents.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-12 text-center my-8">
              <p className="font-display text-lg font-bold text-brand-ink">
                No quests match your selected criteria.
              </p>
              <p className="mt-1 text-xs text-brand-neutral">
                Try clearing your search query or selecting &quot;All Quests&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedStatus("all");
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-display uppercase tracking-wider rounded-brutal bg-brand-ink text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
