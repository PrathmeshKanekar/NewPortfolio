"use client";

import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/** Thin progress bar at top of viewport reflecting page scroll */
export function ScrollProgress({ className }: { className?: string }) {
  const progress = useScrollProgress();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-[2px]",
        className
      )}
      style={{ zIndex: "var(--z-toast)" } as React.CSSProperties}
    >
      <div
        className="h-full bg-[color:var(--color-accent-default)] transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
