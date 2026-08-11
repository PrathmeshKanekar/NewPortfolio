"use client";

import { useEffect, useState } from "react";

/** Returns true when prefers-reduced-motion is NOT set (safe to animate) */
export function useReducedMotionSafe(): boolean {
  const [isSafe, setIsSafe] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsSafe(!mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsSafe(!e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isSafe;
}
