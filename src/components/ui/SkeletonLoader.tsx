import React from "react";
import { Container } from "./Container";

export function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-brand-cream py-24">
      <Container>
        {/* Header Skeleton */}
        <div className="mb-16 space-y-6">
          <div className="h-8 w-32 bg-brand-soft rounded-brutal border-2 border-brand-ink/20 animate-pulse"></div>
          <div className="h-16 w-3/4 max-w-2xl bg-brand-soft rounded-brutal border-3 border-brand-ink/20 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-brand-soft rounded animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="p-6 rounded-brutal brutal-card border-3 border-brand-ink/20 bg-brand-white animate-pulse h-64 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-10 w-10 bg-brand-soft rounded-full"></div>
                <div className="h-6 w-3/4 bg-brand-soft rounded"></div>
                <div className="h-4 w-full bg-brand-soft rounded"></div>
                <div className="h-4 w-5/6 bg-brand-soft rounded"></div>
              </div>
              <div className="h-10 w-full bg-brand-soft rounded-brutal mt-4 border-2 border-brand-ink/10"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
