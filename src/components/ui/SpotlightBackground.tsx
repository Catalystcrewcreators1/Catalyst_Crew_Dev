"use client";
import React, { useRef, useState, useEffect } from "react";

export const SpotlightBackground = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      
      // Check if mouse is roughly inside the hero section bounds to handle opacity
      if (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return <div className="absolute inset-0 bg-grid-dark opacity-10" />;

  return (
    <div
      ref={divRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Static faint grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-10" />
      
      {/* Ambient static blurs */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-brand-red/5 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-brand-cream/5 blur-[120px]" />

      {/* Dynamic Red ambient glow spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(230,57,70,0.1), transparent 50%)`,
        }}
      />

      {/* Dynamic Bright Grid Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-grid-dark"
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(400px circle at ${position.x}px ${position.y}px, black 0%, transparent 60%)`,
          maskImage: `radial-gradient(400px circle at ${position.x}px ${position.y}px, black 0%, transparent 60%)`,
        }}
      />
    </div>
  );
};
