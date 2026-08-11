"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Download } from "lucide-react";
import { NAV_LINKS, RESUME_FILENAME } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";

/** Sticky header with transparent-to-solid on scroll (Section 9/18) */
export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = useScrolled(20);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300",
          isScrolled
            ? "bg-[color:var(--color-glass-overlay-bg)] border-b border-[color:var(--color-glass-overlay-border)]"
            : "bg-transparent border-b border-transparent"
        )}
        style={{
          zIndex: "var(--z-sticky-header)",
          backdropFilter: isScrolled
            ? `blur(var(--glass-overlay-blur))`
            : "none",
          WebkitBackdropFilter: isScrolled
            ? `blur(var(--glass-overlay-blur))`
            : "none",
        } as React.CSSProperties}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-8 xl:px-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-150",
                    isActive
                      ? "text-[color:var(--color-text-primary)]"
                      : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[color:var(--color-accent-default)]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="hidden lg:inline-flex h-8 items-center gap-1.5 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] px-3 text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)] active:translate-y-px"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-[var(--radius-2)] transition-colors duration-150 hover:bg-[color:var(--color-surface-hover)]"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-[color:var(--color-text-secondary)]" />
            </button>
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
