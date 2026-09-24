"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="rounded-card border border-emerald-500/30 bg-emerald-50/60 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-emerald-950">
          Message Dispatched
        </h3>
        <p className="mt-2 text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out! Our team has received your message and will reply to <span className="font-semibold">{formData.email}</span> shortly.
        </p>
        <div className="mt-6">
          <Button
            variant="dark"
            size="sm"
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", email: "", subject: "general", message: "" });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-brand-light bg-brand-white p-6 sm:p-8 shadow-card space-y-5">
      <div className="border-b border-brand-light pb-4">
        <h3 className="font-display text-xl font-bold text-brand-ink">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-brand-neutral mt-1">
          Have questions, suggestions, or want to collaborate? Drop us a note.
        </p>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-brand-red/10 p-3 text-xs text-brand-red border border-brand-red/20">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Please complete all fields (Name, Email, Message).</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Your Name *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Alex Chen"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          required
          placeholder="alex@domain.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Topic / Channel
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
        >
          <option value="general">General Community Question</option>
          <option value="partnerships">Brand / Startup Partnership</option>
          <option value="events">Event & Hackathon Collaboration</option>
          <option value="hiring">Hiring Developers & Job Postings</option>
          <option value="media">Media, Press & Speaking</option>
          <option value="campus">Campus Chapter Program</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Your Message *
        </label>
        <textarea
          rows={5}
          required
          placeholder="Write your message here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors resize-none"
        ></textarea>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "submitting"}
        className="w-full justify-center gap-2"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
