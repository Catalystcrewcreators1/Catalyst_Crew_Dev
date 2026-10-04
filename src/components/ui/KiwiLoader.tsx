"use client";

import React from "react";
import "./KiwiLoader.css";

export function KiwiLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="simple-loader flex gap-2">
        <div className="w-8 h-8 bg-brand-red border-3 border-brand-ink rounded-sm animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-8 h-8 bg-brand-yellow border-3 border-brand-ink rounded-sm animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-8 h-8 bg-brand-primary border-3 border-brand-ink rounded-sm animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
      <div className="font-display font-bold text-xl uppercase tracking-widest text-brand-ink animate-pulse">
        Loading...
      </div>
    </div>
  );
}
