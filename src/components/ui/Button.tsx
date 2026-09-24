import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-medium rounded-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

    const variantStyles = {
      primary:
        "bg-brand-red text-white hover:bg-brand-red-hover shadow-sm active:scale-[0.99]",
      secondary:
        "bg-white text-brand-ink border border-brand-light hover:border-brand-ink hover:bg-brand-cream/40 active:scale-[0.99]",
      dark: "bg-brand-ink text-brand-cream hover:bg-brand-soft border border-brand-soft shadow-sm active:scale-[0.99]",
      outline:
        "border border-brand-light bg-transparent text-brand-ink hover:border-brand-red hover:text-brand-red active:scale-[0.99]",
      ghost:
        "bg-transparent text-brand-ink hover:bg-brand-light/50 active:scale-[0.99]",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs tracking-wider uppercase",
      md: "h-11 px-5 text-sm tracking-wider uppercase",
      lg: "h-13 px-7 text-base tracking-wider uppercase py-3.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
