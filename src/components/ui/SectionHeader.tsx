import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        action && "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2">
            <div className="inline-flex items-center rounded-brutal border-2 border-brand-ink bg-brand-peach px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest shadow-brutal-sm">
              {eyebrow}
            </div>
          </div>
        )}
        <h2 className={cn(
          "font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-brand-ink"
        )}>
          {title}
        </h2>
        {description && (
          <p className={cn(
            "mt-3 text-base leading-relaxed sm:text-lg font-sans",
            dark ? "text-brand-cream/70" : "text-brand-ink/60"
          )}>
            {description}
          </p>
        )}
      </div>

      {action && <div className="mt-4 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
}
