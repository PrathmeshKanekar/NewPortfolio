"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/common/Icons";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/common/Container";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
} as const;

/** Site footer with nav, social links, and back-to-top (Section 18) */
export function Footer() {
  return (
    <footer
      className="border-t border-[color:var(--color-border-subtle)] py-16 md:py-24"
      role="contentinfo"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-[color:var(--color-text-primary)]">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
              {SITE_CONFIG.title}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-eyebrow mb-4 text-[color:var(--color-text-tertiary)]">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--color-text-secondary)] transition-colors duration-150 hover:text-[color:var(--color-text-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-eyebrow mb-4 text-[color:var(--color-text-tertiary)]">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-2)] text-[color:var(--color-text-secondary)] transition-colors duration-150 hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-[color:var(--color-border-subtle)] pt-8">
          <p className="text-xs text-[color:var(--color-text-tertiary)]">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-2)] text-[color:var(--color-text-secondary)] transition-colors duration-150 hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
