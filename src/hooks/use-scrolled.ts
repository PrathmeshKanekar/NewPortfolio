"use client";

import { useEffect, useState } from "react";

/** Returns true when page has scrolled past a threshold (pixels) */
export function useScrolled(threshold = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return isScrolled;
}
