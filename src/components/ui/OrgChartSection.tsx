"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { teamData, TeamMember } from "@/data/team";
import { Github, Twitter, Linkedin, Crown, Star, Briefcase, GraduationCap, ChevronDown } from "lucide-react";

// ─── CONNECTOR LINES (SVG drawn between nodes) ───
function ConnectorLine({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden md:block absolute bg-brand-ink ${className}`} />
  );
}

// ─── LEVEL BADGE ───
function LevelBadge({ level }: { level: TeamMember["level"] }) {
  const config = {
    founder: { label: "FOUNDER", bg: "bg-brand-red", text: "text-white", icon: Crown },
    "co-founder": { label: "CO-FOUNDER", bg: "bg-brand-ink", text: "text-white", icon: Star },
    permanent: { label: "PERMANENT", bg: "bg-brand-yellow", text: "text-brand-ink", icon: Briefcase },
    intern: { label: "INTERNSHIP", bg: "bg-brand-mint", text: "text-brand-ink", icon: GraduationCap },
  };
  const c = config[level];
  const Icon = c.icon;

  return (
    <span className={`inline-flex items-center gap-1 rounded-brutal border-2 border-brand-ink px-2 py-0.5 text-[9px] font-display font-bold uppercase tracking-widest ${c.bg} ${c.text} shadow-brutal-sm`}>
      <Icon className="h-3 w-3" />
      {c.label}
    </span>
  );
}

// ─── MEMBER CARD (Neo-Brutalist) ───
function MemberCard({ member, size = "normal", highlight = false }: { member: TeamMember; size?: "large" | "normal" | "compact"; highlight?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    large: "w-[260px] sm:w-[280px]",
    normal: "w-[220px] sm:w-[240px]",
    compact: "w-[200px] sm:w-[220px]",
  };
  const imgHeight = {
    large: "h-56",
    normal: "h-44",
    compact: "h-36",
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, rotate: isHovered ? (Math.random() > 0.5 ? 1 : -1) : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative ${sizeClasses[size]} rounded-brutal border-3 border-brand-ink bg-brand-white p-5 flex flex-col shadow-brutal transition-all duration-300 brutal-card group ${
        highlight ? "ring-4 ring-brand-red/20" : ""
      } ${isHovered ? "shadow-brutal-xl z-30" : "z-10"}`}
    >
      {/* Avatar */}
      <div className={`relative ${imgHeight[size]} w-full overflow-hidden rounded-brutal border-2 border-brand-ink mb-4 bg-brand-soft`}>
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Colored overlay on hover */}
        <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-300" />
      </div>

      {/* Level Badge */}
      <div className="mb-3">
        <LevelBadge level={member.level} />
      </div>

      {/* Name & Role */}
      <h3 className="font-display text-lg font-extrabold text-brand-ink tracking-tight leading-tight">
        {member.name}
      </h3>
      <div className="text-[11px] font-mono font-bold text-brand-red uppercase tracking-wider mt-1">
        {member.role}
      </div>

      {/* Bio */}
      <p className="mt-3 text-[11px] text-brand-neutral leading-relaxed font-sans line-clamp-3">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="mt-auto pt-4 border-t-2 border-brand-ink/10 flex items-center gap-2">
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-brutal border-2 border-brand-ink bg-brand-cream text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-200 shadow-brutal-sm">
            <Github className="h-3 w-3" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-brutal border-2 border-brand-ink bg-brand-cream text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-200 shadow-brutal-sm">
            <Twitter className="h-3 w-3" />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-brutal border-2 border-brand-ink bg-brand-cream text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-200 shadow-brutal-sm">
            <Linkedin className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ─── TREE CONNECTOR SVG ───
function TreeConnectors() {
  return (
    <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
          <circle cx="4" cy="4" r="3" fill="#1A1A1A" />
        </marker>
      </defs>
    </svg>
  );
}

// ─── HIERARCHY LEVEL ROW ───
function HierarchyRow({
  children,
  label,
  sublabel,
  lineColor = "bg-brand-ink",
  delay = 0,
}: {
  children: React.ReactNode;
  label: string;
  sublabel?: string;
  lineColor?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 80 }}
      className="relative"
    >
      {/* Hierarchy Label */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`h-1 w-10 sm:w-16 ${lineColor} rounded-full`} />
        <div>
          <div className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-ink/50">
            {label}
          </div>
          {sublabel && (
            <div className="text-[9px] font-mono text-brand-neutral mt-0.5">{sublabel}</div>
          )}
        </div>
        <div className={`flex-1 h-[2px] ${lineColor}/20`} />
      </div>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// ─── VERTICAL CONNECTOR PIPE ───
function VerticalPipe({ height = "h-16" }: { height?: string }) {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-[3px] ${height} bg-brand-ink origin-top relative`}
      >
        {/* Top node */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-brand-ink border-2 border-brand-white" />
        {/* Bottom node */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-brand-red border-2 border-brand-white" />
      </motion.div>
    </div>
  );
}

// ─── HORIZONTAL BRANCHING LINE ───
function HorizontalBranch({ count }: { count: number }) {
  if (count <= 1) return null;

  return (
    <div className="hidden md:flex justify-center mb-2">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center"
        style={{ width: `${Math.min(count * 260, 900)}px` }}
      >
        <div className="w-full h-[3px] bg-brand-ink" />
        {/* Branch nodes */}
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-brand-ink border-2 border-brand-white"
            style={{ left: `${(i / (count - 1)) * 100}%`, transform: "translateX(-50%)" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── MAIN COMPONENT ───
export function OrgChartSection() {
  const founder = teamData.find(m => m.level === "founder")!;
  const coFounders = teamData.filter(m => m.level === "co-founder");
  const permanentTeam = teamData.filter(m => m.level === "permanent");
  const interns = teamData.filter(m => m.level === "intern");

  return (
    <section className="py-24 sm:py-32 bg-brand-cream relative overflow-hidden border-b-3 border-brand-ink">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-brand-ink/10 rounded-tl-brutal pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-brand-ink/10 rounded-br-brutal pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-yellow px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider shadow-brutal-sm mb-6 transform -rotate-1">
            Organizational Hierarchy
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-ink tracking-tight uppercase">
            The <span className="text-white bg-brand-red px-3 inline-block border-3 border-brand-ink transform rotate-1">Crew</span>
          </h2>
          <p className="mt-4 text-base text-brand-neutral max-w-2xl mx-auto font-sans leading-relaxed">
            Our organizational structure is flat by design — every voice matters, every contribution counts. Here&apos;s who makes Catalyst Crew tick.
          </p>
        </motion.div>

        {/* ─── HIERARCHICAL ORG TREE ─── */}
        <div className="flex flex-col items-center space-y-2">
          
          {/* ── TIER 1: FOUNDER ── */}
          <HierarchyRow label="TIER I" sublabel="// FOUNDER" lineColor="bg-brand-red" delay={0}>
            <MemberCard member={founder} size="large" highlight />
          </HierarchyRow>

          {/* Vertical Pipe */}
          <VerticalPipe height="h-14" />

          {/* Horizontal Branch to Co-Founders */}
          <HorizontalBranch count={coFounders.length} />

          {/* ── TIER 2: CO-FOUNDERS ── */}
          <HierarchyRow label="TIER II" sublabel="// CO-FOUNDERS" lineColor="bg-brand-ink" delay={0.15}>
            {coFounders.map((member) => (
              <MemberCard key={member.name} member={member} size="normal" />
            ))}
          </HierarchyRow>

          {/* Vertical Pipe */}
          <VerticalPipe height="h-14" />

          {/* Horizontal Branch to Permanent Team */}
          <HorizontalBranch count={permanentTeam.length} />

          {/* ── TIER 3: PERMANENT TEAM ── */}
          <HierarchyRow label="TIER III" sublabel="// CORE TEAM — PERMANENT" lineColor="bg-brand-yellow" delay={0.3}>
            {permanentTeam.map((member) => (
              <MemberCard key={member.name} member={member} size="normal" />
            ))}
          </HierarchyRow>

          {/* Vertical Pipe */}
          <VerticalPipe height="h-14" />

          {/* Horizontal Branch to Interns */}
          <HorizontalBranch count={interns.length} />

          {/* ── TIER 4: INTERNS ── */}
          <HierarchyRow label="TIER IV" sublabel="// RISING TALENT — INTERNSHIP" lineColor="bg-brand-mint" delay={0.45}>
            {interns.map((member) => (
              <MemberCard key={member.name} member={member} size="compact" />
            ))}
          </HierarchyRow>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-brand-ink shadow-brutal-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            10 Members Strong & Growing
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
