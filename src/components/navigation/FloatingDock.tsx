"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { toggleThemeWithTransition } from "@/lib/theme-transition";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Layers,
  BookOpen,
  Mail,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink
} from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";

type DockItemType = {
  label: string;
  href: string;
  icon: any;
  external?: boolean;
};

const MAIN_NAV: DockItemType[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/#experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Code2 },
  { label: "Skills", href: "/#skills", icon: Layers },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

const UTILITY_NAV: DockItemType[] = [
  { label: "GitHub", href: "https://github.com/prathmeshkanekar", icon: Github, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prathmesh-kanekar", icon: Linkedin, external: true },
  { label: "Resume", href: `/resume/${RESUME_FILENAME}`, icon: FileText, external: true },
];

function DockIcon({ item, isActive }: { item: DockItemType; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div className="relative group flex items-center justify-center">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-2 py-1 rounded-md bg-[color:var(--color-tooltip-bg)] text-[color:var(--color-tooltip-text)] text-[11px] font-medium whitespace-nowrap shadow-md pointer-events-none"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={item.href}
        target={item.external ? "_blank" : "_self"}
        rel={item.external ? "noopener noreferrer" : ""}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-200 hover:scale-110 hover:-translate-y-0.5",
          isActive ? "text-[color:var(--color-text-primary)]" : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]",
          !isActive && "hover:bg-[color:var(--color-surface-hover)]"
        )}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-full bg-[color:var(--color-surface-sunken)] -z-10" />
        )}
        <Icon className="h-5 w-5" />
      </a>
    </div>
  );
}

function DockThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative group flex items-center justify-center">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-2 py-1 rounded-md bg-[color:var(--color-tooltip-bg)] text-[color:var(--color-tooltip-text)] text-[11px] font-medium whitespace-nowrap shadow-md pointer-events-none"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={(e) => toggleThemeWithTransition(theme, setTheme, e)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center h-10 w-10 rounded-full text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        aria-label="Toggle theme"
      >
        {mounted && theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export function FloatingDock() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const checkIsActive = (href: string) => {
    const basePath = href.split("#")[0] || "/";
    const hasHash = href.includes("#");
    if (hasHash) return false;
    return basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);
  };

  return (
    <>
      {/* DESKTOP DOCK */}
      <div
        className="fixed bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-[var(--z-sticky-header)] hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] shadow-xl"
      >
        <div className="flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <DockIcon key={item.label} item={item} isActive={checkIsActive(item.href)} />
          ))}
        </div>

        <div className="w-px h-6 bg-[color:var(--color-border-default)] mx-1" />

        <div className="flex items-center gap-1">
          {UTILITY_NAV.map((item) => (
            <DockIcon key={item.label} item={item} isActive={false} />
          ))}
        </div>

        <div className="w-px h-6 bg-[color:var(--color-border-default)] mx-1" />

        <DockThemeToggle />
      </div>

      {/* MOBILE COMPACT DOCK */}
      <div 
        className="fixed left-0 right-0 z-[var(--z-sticky-header)] md:hidden px-4 pointer-events-none"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="pointer-events-auto mx-auto max-w-sm rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] shadow-lg p-1.5 flex items-center justify-between">
          {[MAIN_NAV[0], MAIN_NAV[3], MAIN_NAV[4]].map((item) => {
            const isActive = checkIsActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center h-12 flex-1 rounded-full",
                  isActive ? "text-[color:var(--color-text-primary)]" : "text-[color:var(--color-text-secondary)]"
                )}
              >
                {isActive && (
                  <div className="absolute inset-1 rounded-full bg-[color:var(--color-surface-sunken)] -z-10" />
                )}
                <Icon className="h-4 w-4 mb-0.5" />
                <span className="text-[9px] font-medium">{item.label}</span>
              </Link>
            );
          })}

          <div className="w-px h-6 bg-[color:var(--color-border-subtle)] mx-1" />

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-full text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
          >
            <Menu className="h-4 w-4 mb-0.5" />
            <span className="text-[9px] font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* MOBILE FULL MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/40 md:hidden flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[color:var(--color-surface-base)] rounded-t-3xl border-t border-[color:var(--color-border-subtle)] pb-safe"
            >
              <div className="flex items-center justify-between p-6 border-b border-[color:var(--color-border-subtle)]">
                <span className="font-mono text-sm tracking-widest text-[color:var(--color-text-primary)]">~/prathmesh</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-[color:var(--color-surface-sunken)] text-[color:var(--color-text-secondary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <p className="text-[10px] font-mono uppercase text-[color:var(--color-text-tertiary)] tracking-wider">Navigation</p>
                  <div className="flex flex-col gap-3">
                    {MAIN_NAV.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-mono uppercase text-[color:var(--color-text-tertiary)] tracking-wider">Connect</p>
                  <div className="flex flex-col gap-3">
                    {UTILITY_NAV.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                        {item.label}
                        <ExternalLink className="h-3 w-3 opacity-40 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
