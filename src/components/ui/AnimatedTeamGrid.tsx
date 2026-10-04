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
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
          className="rounded-brutal brutal-card border-3 border-brand-ink bg-brand-white p-6 flex flex-col justify-between shadow-brutal hover:shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] transition-shadow duration-300 cursor-pointer"
        >
          <div>
            <div className="relative h-48 w-full overflow-hidden rounded-lg bg-brand-soft mb-4 border-2 border-brand-ink">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
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
        </motion.div>
      ))}
    </motion.div>
  );
}
