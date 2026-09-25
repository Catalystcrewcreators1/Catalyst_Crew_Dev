"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    content: "I have been participating in Catalyst Crew events for over a year now and I love it! I can't imagine my dev journey without it. It's so easy to collaborate, and the projects are great.",
    author: "Imtiaz Ali",
    role: "VP, Design, Apple Inc",
    image: "https://i.pravatar.cc/150?img=11",
    bgColor: "bg-brand-white",
    textColor: "text-brand-ink",
    borderColor: "border-brand-light",
  },
  {
    content: "The hackathons organized by Catalyst Crew are top-notch. The community is incredibly supportive and I've learned more here than in my college classes.",
    author: "Sarah Jenkins",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=9",
    bgColor: "bg-brand-cream",
    textColor: "text-brand-ink",
    borderColor: "border-brand-light",
  },
  {
    content: "Finding co-founders and team members used to be a pain. Through this community, I found my current startup team. Absolutely invaluable resource.",
    author: "Rahul Sharma",
    role: "Founder, TechStart",
    image: "https://i.pravatar.cc/150?img=12",
    bgColor: "bg-brand-ink",
    textColor: "text-white",
    borderColor: "border-brand-soft",
  },
  {
    content: "The level of engineering talent here is insane. As a recruiter, this is my go-to place to find developers who actually know how to build and ship.",
    author: "Emily Chen",
    role: "Technical Recruiter",
    image: "https://i.pravatar.cc/150?img=5",
    bgColor: "bg-brand-red",
    textColor: "text-white",
    borderColor: "border-brand-red",
  },
  {
    content: "I love the focus on practical building rather than just tutorials. The masterclasses are dense with information and immediately applicable.",
    author: "David Kumar",
    role: "Systems Engineer",
    image: "https://i.pravatar.cc/150?img=14",
    bgColor: "bg-brand-cream",
    textColor: "text-brand-ink",
    borderColor: "border-brand-light",
  },
  {
    content: "The Catalyst Crew environment pushes you to ship code fast and efficiently. It's unlike any other dev community I've seen on campus.",
    author: "Ananya Desai",
    role: "Student Developer",
    image: "https://i.pravatar.cc/150?img=20",
    bgColor: "bg-brand-white",
    textColor: "text-brand-ink",
    borderColor: "border-brand-light",
  },
  {
    content: "Sponsoring their flagship hackathon gave us direct access to 500+ top tier developers. The ROI for our dev-tools platform was absolutely incredible.",
    author: "Michael Ross",
    role: "DevRel, TechCorp",
    image: "https://i.pravatar.cc/150?img=33",
    bgColor: "bg-brand-ink",
    textColor: "text-white",
    borderColor: "border-brand-soft",
  },
  {
    content: "I built my first real-world production app here. The mentors don't just give you the answers; they teach you how to think like an engineer.",
    author: "Priya Patel",
    role: "Software Intern",
    image: "https://i.pravatar.cc/150?img=47",
    bgColor: "bg-brand-red",
    textColor: "text-white",
    borderColor: "border-brand-red",
  },
  {
    content: "If you want to surround yourself with people who are actually building the future instead of just talking about it, this is the place to be.",
    author: "Rohan Gupta",
    role: "AI Researcher",
    image: "https://i.pravatar.cc/150?img=53",
    bgColor: "bg-brand-cream",
    textColor: "text-brand-ink",
    borderColor: "border-brand-light",
  }
];

export const TestimonialSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Matching the target image's specific rotation pattern
  const rotations = [-4, 2, -3, 3, -2];

  return (
    <section className="py-24 bg-brand-white border-b border-brand-light/80 overflow-hidden" ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow="COMMUNITY LOVE"
          title="What Builders Are Saying"
          description="Hear from developers, founders, and recruiters who have experienced the Catalyst Crew ecosystem firsthand."
        />
      </Container>
      
      <div className="relative w-full mt-12 pb-20 overflow-hidden" ref={carouselRef}>
        <motion.div 
          drag="x"
          dragConstraints={carouselRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="flex gap-0 w-max items-center py-12 px-6 sm:px-12 md:px-24 xl:px-48 cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((testimonial, i) => {
            const rotation = rotations[i % rotations.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`
                  relative shrink-0 select-none
                  w-[300px] sm:w-[320px] min-h-[300px] rounded-3xl p-8
                  shadow-xl border ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.borderColor}
                  -ml-4 sm:-ml-6 first:ml-0
                  flex flex-col justify-between
                `}
                style={{
                  zIndex: testimonials.length - i,
                }}
              >
                <p className="text-base sm:text-[17px] leading-[1.6] font-medium tracking-tight mb-8">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-brand-light/50 bg-brand-light shrink-0">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-sm leading-none mb-1">
                      {testimonial.author}
                    </h4>
                    <p className={`text-xs ${testimonial.textColor === 'text-white' ? 'text-white/80' : 'text-brand-neutral'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
