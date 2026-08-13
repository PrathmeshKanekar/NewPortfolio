"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "12px",
      background = "var(--color-text-primary)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--color-shimmer": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
            "--border-radius": borderRadius,
            "--bg-button": background,
          } as CSSProperties
        }
        className={cn(
          "group relative flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-semibold text-[color:var(--color-surface-base)] shadow-glow transition-all duration-300 active:scale-95",
          "rounded-[var(--border-radius)] bg-[var(--bg-button)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Shimmer overlay */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-spin [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="absolute inset-[-100%] a-shimmer bg-[radial-gradient(ellipse_at_center,var(--color-shimmer),transparent_70%)] opacity-30" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>

        {/* Highlight ring */}
        <div className="absolute inset-0 rounded-[var(--border-radius)] ring-1 ring-inset ring-white/20 pointer-events-none" />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
