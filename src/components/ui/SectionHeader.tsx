import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
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
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-neutral">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-brand-neutral sm:text-lg">
            {description}
          </p>
        )}
      </div>

      {action && <div className="mt-4 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
}
