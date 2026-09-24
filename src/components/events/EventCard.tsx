import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Users, Trophy, ArrowRight, ExternalLink } from "lucide-react";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export function EventCard({ event, featured = false }: EventCardProps) {
  const statusBadgeVariant =
    event.status === "live"
      ? "live"
      : event.status === "upcoming"
      ? "upcoming"
      : "ended";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-card border border-brand-light bg-brand-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-ink/40 hover:shadow-card-hover">
      {/* Event Header Image */}
      <div className="relative h-48 w-full overflow-hidden bg-brand-soft sm:h-52">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant={statusBadgeVariant}>
            {event.status.toUpperCase()}
          </Badge>
          <span className="rounded bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-white">
            {event.category}
          </span>
        </div>

        {/* Prize Overlay Banner if available */}
        {event.prize && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-mono font-semibold text-white drop-shadow">
            <Trophy className="h-4 w-4 text-amber-400 shrink-0" />
            <span className="truncate">{event.prize}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-brand-ink group-hover:text-brand-red transition-colors line-clamp-1">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h3>
          <p className="mt-2 text-sm text-brand-neutral line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          {/* Metadata Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-brand-neutral/90 border-t border-brand-light/60 pt-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-brand-red shrink-0" />
              <span className="truncate">{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-red shrink-0" />
              <span className="truncate">{event.mode} • {event.location.split("&")[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2">
              <Users className="h-3.5 w-3.5 text-brand-red shrink-0" />
              <span className="truncate">{event.teamSize} • {event.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-2 pt-2 border-t border-brand-light/60">
          <Button
            href={`/events/${event.slug}`}
            variant="dark"
            size="sm"
            className="flex-1 justify-center gap-1.5"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>

          {event.status !== "ended" ? (
            <Button
              href={event.registrationUrl}
              isExternal
              variant="primary"
              size="sm"
              className="gap-1 px-3"
              title="Register on Unstop"
            >
              <span>Register</span>
              <ExternalLink className="h-3 w-3" />
            </Button>
          ) : (
            <span className="text-[11px] font-mono text-brand-neutral/60 px-2 uppercase">
              Archived
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
