"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { toggleThemeWithTransition } from "@/lib/theme-transition";
import { Dock, DockItem, DockSeparator } from "@/components/ui/dock";
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
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";
import { RESUME_FILENAME } from "@/lib/constants";

type DockItemType = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
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

const emptySubscribe = () => () => {};

export function FloatingDock() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const checkIsActive = (href: string) => {
    const basePath = href.split("#")[0] || "/";
    const hasHash = href.includes("#");
    if (hasHash) return false;
    return basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);
  };

  const handleNavigate = (item: DockItemType, e: React.MouseEvent) => {
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.href.includes("#")) {
      const [path, hash] = item.href.split("#");
      if (pathname === (path || "/")) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    }
    router.push(item.href);
  };

  return (
    <>
      {/* DESKTOP SPATIAL 3D DOCK */}
      <div className="fixed bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-[var(--z-sticky-header)] hidden md:flex items-center">
        <Dock distance={160}>
          {/* Main Navigation Items */}
          {MAIN_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = checkIsActive(item.href);
            return (
              <DockItem
                key={item.label}
                label={item.label}
                active={isActive}
                onClick={(e) => handleNavigate(item, e)}
              >
                <Icon className="h-5 w-5" />
              </DockItem>
            );
          })}

          <DockSeparator />

          {/* External Socials & Resume */}
          {UTILITY_NAV.map((item) => {
            const Icon = item.icon;
            return (
              <DockItem
                key={item.label}
                label={item.label}
                onClick={(e) => handleNavigate(item, e)}
              >
                <Icon className="h-5 w-5" />
              </DockItem>
            );
          })}

          <DockSeparator />

          {/* Theme Toggle Item */}
          <DockItem
            label={mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
            onClick={(e) => toggleThemeWithTransition(theme, setTheme, e)}
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </DockItem>
        </Dock>
      </div>

      {/* MOBILE COMPACT DOCK */}
      <div
        className="fixed left-0 right-0 z-[var(--z-sticky-header)] md:hidden px-4 pointer-events-none"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="pointer-events-auto mx-auto max-w-sm rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] shadow-lg p-1.5 flex items-center justify-between backdrop-blur-xl">
          {[MAIN_NAV[0], MAIN_NAV[3], MAIN_NAV[4]].map((item) => {
            const isActive = checkIsActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center h-12 flex-1 rounded-full transition-colors",
                  isActive ? "text-[color:var(--color-text-primary)] font-medium" : "text-[color:var(--color-text-secondary)]"
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
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/50 backdrop-blur-sm md:hidden flex flex-col justify-end"
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

                    <div className="pt-2">
                      <button
                        onClick={(e) => toggleThemeWithTransition(theme, setTheme, e)}
                        className="text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] flex items-center gap-2"
                      >
                        {mounted && theme === "dark" ? (
                          <>
                            <Sun className="h-4 w-4 text-amber-400" />
                            Light Mode
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4 text-slate-700" />
                            Dark Mode
                          </>
                        )}
                      </button>
                    </div>
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

