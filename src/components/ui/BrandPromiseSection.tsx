"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const text = "Catalyst Crew is an authentic developer community for builders, innovators, and creators who don't just consume technology — they build with it. We believe in high-agency, relentless iteration, and shipping real products.";

const words = text.split(" ");

// Images for the peek effect
const peekImages: Record<string, string> = {
  "builders,": "/Ashwin.png",
  "innovators,": "/Aryan.jpg",
  "creators": "/poster1x1.png",
  "high-agency,": "/Vansh.png",
  "shipping": "/catalyst-hack-banner.jpg"
};

const Word = ({ 
  word, 
  progress, 
  range 
}: { 
  word: string, 
  progress: any, 
  range: [number, number] 
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const isAccent = Object.keys(peekImages).includes(word.toLowerCase());
  const [isHovered, setIsHovered] = useState(false);
  const imgUrl = isAccent ? peekImages[word.toLowerCase()] : "";

  // Mouse tracking for the floating image
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Relative to the word
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <span className="relative inline-block mr-[0.3em] mt-[0.2em]">
      <motion.span
        className={`inline-block ${
          isAccent 
            ? "text-brand-red cursor-crosshair relative z-20 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-brand-red/30 hover:after:bg-brand-red transition-all duration-300" 
            : "text-brand-ink"
        }`}
        style={{ opacity }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {word}
      </motion.span>
      
      {isAccent && (
        <AnimatePresence>
          {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute pointer-events-none z-50 w-48 h-32 md:w-64 md:h-40 rounded-brutal overflow-hidden border-3 border-brand-ink shadow-brutal"
                style={{
                  left: mousePos.x - 120, // Center roughly on mouse
                  top: mousePos.y - 180,  // Show above mouse
                }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-color-burn" />
              </motion.div>
          )}
        </AnimatePresence>
      )}
    </span>
  );
};

export const BrandPromiseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-brand-white border-b-3 border-brand-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block rounded-brutal border-2 border-brand-ink bg-brand-yellow px-3 py-1 text-xs font-display font-bold uppercase tracking-widest text-brand-ink mb-8 shadow-brutal-sm">
            01 // Our Core Promise
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              
              return (
                <Word 
                  key={i} 
                  word={word} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </h2>
        </div>
      </Container>
    </section>
  );
};
