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
      "inline-flex items-center justify-center font-display font-bold border-2 border-brand-ink transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none rounded-brutal shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]";

    const variantStyles = {
      primary:
        "bg-brand-red text-white",
      secondary:
        "bg-brand-yellow text-brand-ink",
      dark: "bg-brand-ink text-brand-cream",
      outline:
        "bg-brand-cream text-brand-ink",
      ghost:
        "bg-transparent text-brand-ink border-transparent shadow-none hover:shadow-none hover:bg-brand-light/50 hover:translate-x-0 hover:translate-y-0",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase",
      md: "h-11 px-6 text-sm tracking-wider uppercase",
      lg: "h-13 px-8 text-base tracking-wider uppercase py-3.5",
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
            {...(props as any)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses} {...(props as any)}>
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
