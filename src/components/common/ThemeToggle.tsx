"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/** Theme toggle with animated sun/moon cross-fade + rotate */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return (
      <button
        className={`inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-2)] ${className ?? ""}`}
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-2)] transition-colors duration-150 hover:bg-[color:var(--color-surface-hover)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface-base)] ${className ?? ""}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
          ) : (
            <Sun className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
