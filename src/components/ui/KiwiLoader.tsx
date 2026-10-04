"use client";

import React from "react";
import "./KiwiLoader.css";

export function KiwiLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-brand-cream">
      <div className="loader">
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <g id="gnd">
            <ellipse cx="100" cy="180" rx="80" ry="10" fill="#3f3f46" />
          </g>
          
          <g className="legr">
            <path d="M0,0 Q10,15 0,30 L15,30" stroke="#3f3f46" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          
          <g className="legl">
            <path d="M0,0 Q10,15 0,30 L15,30" stroke="#3f3f46" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          
          <g className="bod">
            <ellipse cx="50" cy="90" rx="55" ry="45" fill="#facc15" stroke="#3f3f46" strokeWidth="6" />
          </g>
          
          <g className="head">
            <circle cx="85" cy="55" r="28" fill="#facc15" stroke="#3f3f46" strokeWidth="6" />
            {/* Eye */}
            <circle cx="95" cy="50" r="4" fill="#3f3f46" />
            {/* Beak */}
            <path d="M110,55 L135,62 L105,70 Z" fill="#ff6b6b" stroke="#3f3f46" strokeWidth="4" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
