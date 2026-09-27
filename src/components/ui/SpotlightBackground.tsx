"use client";
import React, { useRef, useEffect } from "react";

export const SpotlightBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    let width = 0;
    let height = 0;

    let mouse = { x: -1000, y: -1000 };
    let trailingMouse = { x: -1000, y: -1000 };
    let isMouseActive = false;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
    };
    
    // Initial resize
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      isMouseActive = true;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      if (trailingMouse.x === -1000) {
        trailingMouse.x = mouse.x;
        trailingMouse.y = mouse.y;
      }
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
    };
    const handleMouseEnter = () => {
      isMouseActive = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    mouse.x = width / 2;
    mouse.y = height / 2;
    trailingMouse.x = width / 2;
    trailingMouse.y = height / 2;

    const draw = () => {
      time++;
      
      // Auto-pilot orbit if mouse is not active
      if (!isMouseActive) {
        mouse.x = (width / 2) + Math.cos(time * 0.005) * (width / 3);
        mouse.y = (height / 2) + Math.sin(time * 0.008) * (height / 3);
      }

      trailingMouse.x += (mouse.x - trailingMouse.x) * 0.08;
      trailingMouse.y += (mouse.y - trailingMouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const spacing = 35; // Dense grid
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          const dx = baseX - trailingMouse.x;
          const dy = baseY - trailingMouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 350;
          let intensity = Math.max(0, 1 - (dist / maxDist));
          intensity = intensity * intensity * (3 - 2 * intensity);

          // Global base wave (always moving) + Cursor interactive wave
          const baseWave = Math.sin(time * 0.015 + (i * 0.15) + (j * 0.15)) * 12;
          const cursorWave = Math.sin(time * 0.03 + (i * 0.3) + (j * 0.3)) * 25 * intensity;
          const offsetY = baseWave + cursorWave;

          const cx = baseX;
          const cy = baseY - offsetY;

          // Dots pulse slightly globally, but get much brighter near cursor
          const baseOpacity = 0.12 + (Math.sin(time * 0.02 + i * 0.1) * 0.05);
          const opacity = baseOpacity + (intensity * 0.8);
          const size = 1.2 + (intensity * 3);

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(cx, cy, size, 0, Math.PI * 2);
          ctx.fill();

          if (intensity > 0.5) {
            if (i < cols - 1) {
               const neighborX = (i + 1) * spacing;
               const neighborY = j * spacing;
               
               const ndx = neighborX - trailingMouse.x;
               const ndy = neighborY - trailingMouse.y;
               const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
               let nIntensity = Math.max(0, 1 - (nDist / maxDist));
               nIntensity = nIntensity * nIntensity * (3 - 2 * nIntensity);
               
               if (nIntensity > 0.5) {
                 const nBaseWave = Math.sin(time * 0.015 + ((i+1) * 0.15) + (j * 0.15)) * 12;
                 const nCursorWave = Math.sin(time * 0.03 + ((i+1) * 0.3) + (j * 0.3)) * 25 * nIntensity;
                 const nOffsetY = nBaseWave + nCursorWave;
                 
                 ctx.beginPath();
                 ctx.moveTo(cx, cy);
                 ctx.lineTo(neighborX, neighborY - nOffsetY);
                 const lineOpacity = (intensity + nIntensity) * 0.25 - 0.1;
                 ctx.strokeStyle = `rgba(230, 57, 70, ${Math.max(0, lineOpacity)})`;
                 ctx.lineWidth = 1.5;
                 ctx.stroke();
               }
            }
          }
        }
      }

      // Red trailing orb
      const gradient = ctx.createRadialGradient(
        trailingMouse.x, trailingMouse.y, 0,
        trailingMouse.x, trailingMouse.y, 400
      );
      gradient.addColorStop(0, 'rgba(230, 57, 70, 0.25)'); // Stronger glow
      gradient.addColorStop(0.4, 'rgba(230, 57, 70, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-ink">
      <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-brand-red/10 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-brand-cream/10 blur-[120px]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
