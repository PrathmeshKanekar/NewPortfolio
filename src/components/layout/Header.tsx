"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Download } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { NAV_LINKS, RESUME_FILENAME } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";

/** Premium floating navbar */
export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = useScrolled(20);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-sticky-header)] transition-all duration-300",
          isScrolled
            ? "py-2"
            : "py-3"
        )}
      >
        <div
          className={cn(
            "mx-auto w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] xl:w-[calc(100%-8rem)] max-w-[1280px] rounded-full border transition-all duration-300 px-1",
            isScrolled
              ? "bg-[color:var(--color-surface-overlay)] border-[color:var(--color-border-default)] shadow-lg"
              : "bg-[color:var(--color-surface-overlay)] border-[color:var(--color-border-subtle)] shadow-sm"
          )}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          } as React.CSSProperties}
        >
          <div className="flex h-12 items-center justify-between px-3 md:px-4">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
              {NAV_LINKS.map((link) => {
                const basePath = link.href.split("#")[0] || "/";
                const hasHash = link.href.includes("#");
                const isActive = hasHash
                  ? false // Hash links never show as active in nav
                  : basePath === "/"
                    ? pathname === "/"
                    : pathname.startsWith(basePath);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-150 rounded-full",
                      isActive
                        ? "text-[color:var(--color-text-primary)]"
                        : "text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 z-0 rounded-full bg-[color:var(--color-surface-hover)]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/prathmeshkanekar"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                aria-label="GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <ThemeToggle />
              <a
                href={`/resume/${RESUME_FILENAME}`}
                download
                className="hidden lg:inline-flex h-7 items-center gap-1.5 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-3 text-[11px] font-medium text-[color:var(--color-text-primary)] transition-all hover:bg-[color:var(--color-surface-hover)] active:scale-[0.97]"
              >
                <Download className="h-3 w-3" />
                Resume
              </a>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="inline-flex lg:hidden h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[color:var(--color-surface-hover)]"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
