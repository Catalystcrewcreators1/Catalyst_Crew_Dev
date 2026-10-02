"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const cardThemes = [
  { bg: "bg-brand-red", text: "text-white", subText: "text-white/80" },
  { bg: "bg-brand-ink", text: "text-white", subText: "text-white/80" },
  { bg: "bg-brand-white", text: "text-brand-ink", subText: "text-brand-ink/70" },
];

const testimonials = [
  {
    content: "I have been participating in Catalyst Crew events for over a year now and I love it! I can't imagine my dev journey without it.",
    author: "Imtiaz Ali",
    role: "VP, Design, Apple Inc",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content: "The hackathons organized by Catalyst Crew are top-notch. The community is incredibly supportive and I've learned more here than in my college classes.",
    author: "Sarah Jenkins",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    content: "Finding co-founders and team members used to be a pain. Through this community, I found my current startup team. Absolutely invaluable resource.",
    author: "Rahul Sharma",
    role: "Founder, TechStart",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    content: "The level of engineering talent here is insane. As a recruiter, this is my go-to place to find developers who actually know how to build and ship.",
    author: "Emily Chen",
    role: "Technical Recruiter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    content: "I love the focus on practical building rather than just tutorials. The masterclasses are dense with information and immediately applicable.",
    author: "David Kumar",
    role: "Systems Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    content: "The Catalyst Crew environment pushes you to ship code fast and efficiently. It's unlike any other dev community I've seen on campus.",
    author: "Ananya Desai",
    role: "Student Developer",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    content: "Sponsoring their flagship hackathon gave us direct access to 500+ top tier developers. The ROI for our dev-tools platform was absolutely incredible.",
    author: "Michael Ross",
    role: "DevRel, TechCorp",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    content: "I built my first real-world production app here. The mentors don't just give you the answers; they teach you how to think like an engineer.",
    author: "Priya Patel",
    role: "Software Intern",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    content: "If you want to surround yourself with people who are actually building the future instead of just talking about it, this is the place to be.",
    author: "Rohan Gupta",
    role: "AI Researcher",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  }
];

export const TestimonialSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Custom state for intersection since framer-motion useInView can sometimes be buggy with horizontal overflow
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Set drag constraints dynamically based on content width
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      setDragConstraints({
        left: -innerRef.current.scrollWidth + carouselRef.current.offsetWidth - 100,
        right: 0,
      });
    }
  }, [isVisible]); // Recalculate when rendered

  const rotations = [-4, 2, -3, 3, -2];

  return (
    <section className="py-24 bg-brand-white overflow-hidden" ref={sectionRef}>
      <Container>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-brutal border-2 border-brand-ink bg-brand-yellow px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider shadow-brutal-sm mb-5">
            Community Love
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-ink tracking-tight">
            What Builders Are <span className="bg-brand-red text-white px-2 inline-block border-2 border-brand-ink -rotate-1">Saying</span>
          </h2>
          <p className="mt-4 text-lg text-brand-neutral max-w-2xl mx-auto font-sans">
            Hear from developers, founders, and recruiters who have experienced the Catalyst Crew ecosystem firsthand.
          </p>
        </div>
      </Container>
      
      <div className="relative w-full mt-12 pb-20 overflow-hidden" ref={carouselRef}>
        <motion.div 
          ref={innerRef}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="flex gap-0 w-max items-center py-12 px-6 sm:px-12 md:px-24 xl:px-48 cursor-grab active:cursor-grabbing"
        >
          {testimonials.map((testimonial, i) => {
            const rotation = rotations[i % rotations.length];
            const theme = cardThemes[i % cardThemes.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={isVisible ? { opacity: 1, y: 0, rotate: rotation } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`
                  relative shrink-0 select-none
                  w-[300px] sm:w-[340px] min-h-[320px] rounded-[32px] p-10
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)] ${theme.bg} ${theme.text}
                  -ml-4 sm:-ml-6 first:ml-0
                  flex flex-col justify-between
                `}
                style={{
                  zIndex: i,
                }}
              >
                <p className="text-[17px] sm:text-[19px] leading-[1.4] font-medium tracking-tight mb-8 relative z-10 font-sans">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-4 mt-auto relative z-10 pt-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold font-sans text-base leading-none mb-1.5 ${theme.text}`}>
                      {testimonial.author}
                    </h4>
                    <p className={`text-[13px] font-sans font-medium ${theme.subText}`}>
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
