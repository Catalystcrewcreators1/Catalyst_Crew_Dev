"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { partnerTiers } from "@/data/partners";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export function PartnerInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    tier: "tech",
    timeline: "within_1_month",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Simulate high-reliability client-side submit
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
          Partnership Proposal Received
        </h3>
        <p className="mt-2 text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold">{formData.name}</span>. Our partnership lead (Arpit / Aviral) will review your objectives and reach out within 24 business hours to schedule an introductory alignment call.
        </p>
        <div className="mt-6">
          <Button
            variant="dark"
            size="sm"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                company: "",
                tier: "tech",
                timeline: "within_1_month",
                message: "",
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-brand-light bg-brand-white p-6 sm:p-8 shadow-card space-y-5">
      <div className="border-b border-brand-light pb-4">
        <h3 className="font-display text-xl font-bold text-brand-ink">
          Partner With Catalyst Crew
        </h3>
        <p className="text-xs text-brand-neutral mt-1">
          Tell us about your brand goals. We build high-impact, custom developer activations.
        </p>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-brand-red/10 p-3 text-xs text-brand-red border border-brand-red/20">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Please fill in all required fields (Name, Work Email, Company).</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
            Work Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
            Company / Organization *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. HyperScale AI"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
            Partnership Interest
          </label>
          <select
            value={formData.tier}
            onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
            className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
          >
            {partnerTiers.map((tier) => (
              <option key={tier.id} value={tier.id}>
                {tier.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Activation Timeline
        </label>
        <select
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"
        >
          <option value="immediate">Immediate / Next 2 Weeks</option>
          <option value="within_1_month">Within 1 Month</option>
          <option value="next_quarter">Next Quarter (Q4 / Early 2027)</option>
          <option value="exploratory">Exploratory / Annual Planning</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-display font-medium uppercase tracking-wider text-brand-ink mb-1.5">
          Campaign Goals or Brief
        </label>
        <textarea
          rows={4}
          placeholder="Describe what you want to achieve (e.g. 500 API integrations, recruiting 5 systems engineers, sponsored track at Catalyst Hack)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-button border border-brand-light bg-brand-cream/30 px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-neutral/50 focus:border-brand-red focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors resize-none"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "submitting"}
          className="w-full justify-center gap-2"
        >
          {status === "submitting" ? (
            "Submitting Proposal..."
          ) : (
            <>
              Submit Partnership Inquiry
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="mt-2.5 text-center text-[11px] text-brand-neutral">
          Protected by Catalyst Crew Privacy Policy. No spam, ever.
        </p>
      </div>
    </form>
  );
}
