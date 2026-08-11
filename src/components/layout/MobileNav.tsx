"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { NAV_LINKS, RESUME_FILENAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const menuVariants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/** Full-screen mobile nav Sheet with staggered link entrance (Section 18) */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/40"
            style={{ zIndex: "var(--z-overlay)" } as React.CSSProperties}
          />

          {/* Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-[min(85vw,360px)] bg-[color:var(--color-surface-base)] border-l border-[color:var(--color-border-subtle)] p-6 flex flex-col"
            style={{ zIndex: "var(--z-modal)" } as React.CSSProperties}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-2)] transition-colors duration-150 hover:bg-[color:var(--color-surface-hover)]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-[color:var(--color-text-secondary)]" />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-[var(--radius-2)] px-4 py-3 text-lg font-medium transition-colors duration-150",
                        isActive
                          ? "text-[color:var(--color-accent-default)] bg-[color:var(--color-accent-subtle)]"
                          : "text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-[color:var(--color-border-subtle)]">
              <a
                href={`/resume/${RESUME_FILENAME}`}
                download
                className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
