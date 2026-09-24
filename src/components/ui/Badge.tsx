import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "red" | "live" | "upcoming" | "ended" | "outline" | "dark";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-brand-light text-brand-ink border-transparent",
    red: "bg-brand-red/10 text-brand-red border-brand-red/20 font-semibold",
    live: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 font-semibold",
    upcoming: "bg-amber-500/10 text-amber-800 border-amber-500/30 font-semibold",
    ended: "bg-brand-light/60 text-brand-neutral border-brand-light",
    outline: "bg-transparent text-brand-neutral border-brand-light",
    dark: "bg-brand-soft text-brand-cream border-brand-soft",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] tracking-wider uppercase font-medium",
    md: "px-2.5 py-1 text-xs tracking-wider uppercase font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
