'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.25, 0.25], // Brand red
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.0060], size: 0.06 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [28.6139, 77.2090], size: 0.1 },
        { location: [12.9716, 77.5946], size: 0.08 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.04 },
        { location: [1.3521, 103.8198], size: 0.06 },
        { location: [48.8566, 2.3522], size: 0.05 },
        { location: [25.2048, 55.2708], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center overflow-visible">
      <div className="absolute inset-0 bg-brand-yellow rounded-full blur-[100px] opacity-40 animate-pulse-slow"></div>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}
