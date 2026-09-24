import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Mail,
  MessageSquare,
  MapPin,
  Calendar,
  Briefcase,
  Users2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Inquiries, Partnerships & Support",
  description:
    "Get in touch with the Catalyst Crew team for hackathons, brand partnerships, student chapters, or general community inquiries.",
};

export default function ContactPage() {
  const contactChannels = [
    {
      title: "Partnerships & Brands",
      email: "partners@catalystxcrew.in",
      desc: "For API challenges, prize bounties, and recruitment sponsorships.",
      icon: Briefcase,
    },
    {
      title: "Hackathons & Events",
      email: "events@catalystxcrew.in",
      desc: "For college co-hosting, judge applications, and mentor inquiries.",
      icon: Calendar,
    },
    {
      title: "Community & Chapters",
      email: "crew@catalystxcrew.in",
      desc: "For student ambassador programs and general membership help.",
      icon: Users2,
    },
    {
      title: "WhatsApp Community",
      email: "Direct Join Link",
      desc: "Join our active announcement groups and chat channels.",
      link: "https://chat.whatsapp.com/catalyst-crew-placeholder",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-ink text-white py-16 border-b border-brand-soft">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-4 w-4 text-brand-red" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-red">
                COMMUNICATION CHANNELS
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              GET IN TOUCH
            </h1>
            <p className="mt-3 text-base text-brand-light/80 leading-relaxed">
              Whether you are an ambitious student builder looking for guidance or a tech company launching a hackathon bounty, we respond swiftly.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-brand-cream flex-1">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Direct Channel Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  Direct Inquiries
                </h2>
                <p className="text-xs text-brand-neutral leading-relaxed">
                  Route your inquiry directly to the appropriate operational lead for the fastest turnaround.
                </p>
              </div>

              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.title}
                    className="rounded-card border border-brand-light bg-brand-white p-5 shadow-subtle flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-ink text-white mt-0.5">
                      <channel.icon className="h-5 w-5 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-ink">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-brand-neutral mt-0.5 leading-relaxed">
                        {channel.desc}
                      </p>
                      {channel.link ? (
                        <a
                          href={channel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-mono text-brand-red hover:underline font-semibold"
                        >
                          Join WhatsApp Group
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <a
                          href={`mailto:${channel.email}`}
                          className="mt-2 inline-block text-xs font-mono text-brand-ink hover:text-brand-red transition-colors font-medium"
                        >
                          {channel.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Base Location */}
              <div className="rounded-card border border-brand-light bg-brand-white p-5 shadow-subtle flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-cream border border-brand-light text-brand-ink">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-brand-ink">
                    Base Ecosystem
                  </h4>
                  <p className="text-xs text-brand-neutral">
                    Bengaluru, Karnataka, India • Global Virtual Network
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
