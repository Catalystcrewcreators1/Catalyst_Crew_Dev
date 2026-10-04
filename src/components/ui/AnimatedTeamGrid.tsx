"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface AnimatedTeamGridProps {
  team: TeamMember[];
}

export function AnimatedTeamGrid({ team }: AnimatedTeamGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
  };

  return (
    <motion.div 
      className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          variants={item}
          whileHover={{ 
            scale: 1.02, 
            rotate: 1,
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 flex flex-col sm:flex-row gap-6 shadow-brutal hover:shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] transition-shadow duration-300 cursor-pointer items-start"
        >
          {/* Left: Avatar */}
          <div className="relative h-48 w-full sm:w-48 sm:h-48 shrink-0 overflow-hidden rounded-lg bg-brand-soft border-2 border-brand-ink">
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-110"
            />
          </div>
          
          {/* Right: Info */}
          <div className="flex flex-col justify-center h-full py-2">
            <h3 className="font-display text-2xl font-bold text-brand-ink">
              {member.name}
            </h3>
            <div className="inline-block px-3 py-1 bg-brand-yellow/20 border-2 border-brand-ink rounded-brutal text-xs font-mono font-bold text-brand-ink uppercase mt-2 w-max shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
              {member.role}
            </div>
            <p className="mt-4 text-sm text-brand-neutral/90 leading-relaxed font-sans">
              {member.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
