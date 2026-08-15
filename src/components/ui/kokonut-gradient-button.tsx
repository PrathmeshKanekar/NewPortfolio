"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface KokonutGradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function KokonutGradientButton({
  children,
  variant = "primary",
  className,
  ...props
}: KokonutGradientButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden",
        variant === "primary" &&
          "bg-gradient-to-r from-[color:var(--color-gradient-start)] via-[color:var(--color-accent-default)] to-[color:var(--color-gradient-end)] text-white shadow-md hover:shadow-lg hover:brightness-110",
        variant === "secondary" &&
          "bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)]",
        variant === "outline" &&
          "border border-[color:var(--color-accent-default)]/40 text-[color:var(--color-accent-default)] hover:bg-[color:var(--color-accent-subtle)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Kokonut Shine effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </button>
  );
}
