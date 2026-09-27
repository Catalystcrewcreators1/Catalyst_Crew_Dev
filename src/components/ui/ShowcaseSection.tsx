"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export const ShowcaseSection = () => {
  // Take top 4 for a 2x2 cinematic grid
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4); 
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-white relative overflow-hidden border-b border-brand-light/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeader
            eyebrow="BUILDER SHOWCASE"
            title="Built at Catalyst"
            description="Explore top projects shipped by the community during our hackathons and sprints."
          />
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;

            return (
              <Link href={`/showcase/${project.slug}`} key={project.slug} className="block">
                <motion.div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative aspect-[4/3] rounded-brutal overflow-hidden transition-all duration-300 border-3 border-brand-ink bg-brand-white brutal-card
                    ${isOtherHovered ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100 hover:shadow-brutal-xl'}
                  `}
                >
                  {/* Background Image with Parallax-like scale */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      transform: isHovered ? "scale(1.08)" : "scale(1)"
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent ${isHovered ? 'opacity-90' : 'opacity-70'}`} 
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-x-8 bottom-8 flex flex-col justify-end pointer-events-none z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.stack || []).slice(0, 3).map((tag: string) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-0.5 rounded-brutal bg-brand-yellow text-[10px] font-display font-bold uppercase tracking-widest text-brand-ink border-2 border-brand-ink shadow-brutal-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ y: isHovered ? -10 : 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h3 className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-2 tracking-tight">
                          <span className="bg-brand-ink px-2">{project.name}</span>
                        </h3>
                        <p className="text-brand-ink text-sm bg-brand-white border-2 border-brand-ink p-3 rounded-brutal shadow-brutal-sm font-sans leading-relaxed mt-2 inline-block max-w-[90%]">
                          {project.description}
                        </p>
                    </motion.div>
                  </div>
                  
                  {/* Animated Floating Action Button */}
                  <motion.div 
                    className="absolute top-6 right-6 w-12 h-12 rounded-brutal border-2 border-brand-ink bg-brand-red text-white flex items-center justify-center shadow-brutal-sm z-20"
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      scale: isHovered ? 1 : 0.5,
                      rotate: isHovered ? 0 : -45
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
