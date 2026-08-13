"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
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

// ============================================================================
// TYPES & CONFIG
// ============================================================================

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

// ============================================================================
// DOCK ITEM COMPONENT (Desktop)
// ============================================================================

interface DockIconProps {
  item: DockItemType;
  mouseX: any;
  isActive: boolean;
}

function DockIcon({ item, mouseX, isActive }: DockIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Compute distance from mouse
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Calculate scaling
  const scaleSync = useTransform(distance, [-100, 0, 100], [1, 1.25, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 200, damping: 15 });

  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div className="relative group flex items-center justify-center">
      {/* Tooltip */}
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

      <motion.a
        ref={ref}
        href={item.href}
        target={item.external ? "_blank" : "_self"}
        rel={item.external ? "noopener noreferrer" : ""}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ scale }}
        className={cn(
          "relative flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-200",
          isActive ? "text-[color:var(--color-text-primary)]" : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]",
          !isActive && "hover:bg-[color:var(--color-surface-hover)]"
        )}
      >
        {isActive && (
          <motion.div
            layoutId="dock-active"
            className="absolute inset-0 rounded-full bg-[color:var(--color-surface-sunken)] -z-10"
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.3 }}
          />
        )}
        <Icon className="h-5 w-5" />
      </motion.a>
    </div>
  );
}

// ============================================================================
// THEME TOGGLE (Desktop)
// ============================================================================

function DockThemeToggle({ mouseX }: { mouseX: any }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-100, 0, 100], [1, 1.25, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 200, damping: 15 });

  const [hovered, setHovered] = useState(false);

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

      <motion.button
        ref={ref}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ scale }}
        className="relative flex items-center justify-center h-10 w-10 rounded-full text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {mounted && theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function FloatingDock() {
  const pathname = usePathname();
  const mouseX = useMotionValue(Infinity);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const checkIsActive = (href: string) => {
    const basePath = href.split("#")[0] || "/";
    const hasHash = href.includes("#");
    if (hasHash) return false;
    return basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);
  };

  return (
    <>
      {/* DESKTOP DOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="fixed bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-[var(--z-sticky-header)] hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-overlay)]/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15),0_2px_8px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6),0_2px_12px_-4px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)]"
        style={{
          backdropFilter: "blur(24px) saturate(1.2)",
          WebkitBackdropFilter: "blur(24px) saturate(1.2)",
        } as React.CSSProperties}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <div className="flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <DockIcon
              key={item.label}
              item={item}
              mouseX={mouseX}
              isActive={checkIsActive(item.href)}
            />
          ))}
        </div>

        <div className="w-px h-6 bg-[color:var(--color-border-default)] mx-1" />

        <div className="flex items-center gap-1">
          {UTILITY_NAV.map((item) => (
            <DockIcon
              key={item.label}
              item={item}
              mouseX={mouseX}
              isActive={false}
            />
          ))}
        </div>

        <div className="w-px h-6 bg-[color:var(--color-border-default)] mx-1" />

        <DockThemeToggle mouseX={mouseX} />
      </motion.div>

      {/* MOBILE COMPACT DOCK */}
      <div 
        className="fixed left-0 right-0 z-[var(--z-sticky-header)] md:hidden px-4 pointer-events-none"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="pointer-events-auto mx-auto max-w-sm rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-overlay)] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_0_1px_rgba(255,255,255,0.05)] p-1.5 flex items-center justify-between"
             style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } as React.CSSProperties}>
          
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
                  <motion.div
                    layoutId="mobile-dock-active"
                    className="absolute inset-1 rounded-full bg-[color:var(--color-surface-sunken)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.3 }}
                  />
                )}
                <Icon className="h-4 w-4 mb-0.5" />
                <span className="text-[9px] font-medium">{item.label}</span>
              </Link>
            )
          })}

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-full text-[color:var(--color-text-secondary)] hover:bg-[color:var(--color-surface-hover)] transition-colors"
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
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/40 backdrop-blur-sm md:hidden flex flex-col justify-end"
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
                        className="text-sm font-medium text-[color:var(--color-text-secondary)] flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4 text-[color:var(--color-text-tertiary)]" />
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
                        className="text-sm font-medium text-[color:var(--color-text-secondary)] flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4 text-[color:var(--color-text-tertiary)]" />
                        {item.label}
                        <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-[color:var(--color-border-subtle)]">
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="text-sm font-medium text-[color:var(--color-text-secondary)] flex items-center gap-2 w-full"
                    >
                      {mounted && theme === "dark" ? (
                        <><Sun className="h-4 w-4 text-[color:var(--color-text-tertiary)]" /> Light Mode</>
                      ) : (
                        <><Moon className="h-4 w-4 text-[color:var(--color-text-tertiary)]" /> Dark Mode</>
                      )}
                    </button>
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
