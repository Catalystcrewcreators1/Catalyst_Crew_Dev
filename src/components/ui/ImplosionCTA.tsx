"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export const ImplosionCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "> return Catalyst.crew();";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let i = 0;
    
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeWriter, 100);
      } else {
        timeout = setTimeout(() => {
          i = 0;
          setTypedText("");
          typeWriter();
        }, 5000);
      }
    };
    
    timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative py-48 bg-[#050505] overflow-hidden border-t border-brand-light/10">
      {/* Dynamic Imploding Grid */}
      <motion.div 
        className="absolute inset-0 bg-grid-dark opacity-[0.15] origin-center"
        animate={{ 
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 0.15,
          rotate: isHovered ? 45 : 0 
        }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      />
      
      {/* Imploding Rings */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-red/30 rounded-full pointer-events-none"
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-red/10 rounded-full pointer-events-none"
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      />
      
      {/* Ambient center solid block */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red rounded-full opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-8 mb-8 font-mono text-brand-red text-sm tracking-widest font-bold drop-shadow-md">
            {typedText}<span className="animate-pulse">_</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-16 tracking-tight drop-shadow-lg">
            Ready to Build?
          </h2>

          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="rounded-brutal"
          >
            <Button
              href="/community"
              size="lg"
              className="group relative overflow-hidden bg-brand-red text-white hover:bg-brand-red px-14 py-8 text-lg rounded-brutal transition-all duration-150 border-3 border-brand-ink shadow-brutal-xl hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              <div className="absolute inset-0 bg-brand-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center font-display font-extrabold tracking-widest uppercase">
                JOIN THE CREW
                <ArrowRight className="ml-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
