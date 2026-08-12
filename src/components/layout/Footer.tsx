"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/common/Container";

/** Sophisticated developer footer */
export function Footer() {
  return (
    <footer
      className="border-t border-[color:var(--color-border-subtle)] py-16"
      role="contentinfo"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-mono text-sm font-semibold text-[color:var(--color-text-primary)]">
              Prathmesh Kanekar
            </p>
            <p className="mt-1 text-sm text-[color:var(--color-text-tertiary)]">
              Full Stack Software Engineer
            </p>
            <p className="mt-3 text-xs text-[color:var(--color-text-tertiary)] leading-relaxed max-w-xs">
              Building enterprise banking software with Angular, ASP.NET Core, and SQL Server.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-4" aria-label="Footer navigation">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
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

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-3">
              Connect
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/prathmeshkanekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/prathmesh-kanekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-3 block text-sm text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)]"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-[color:var(--color-border-subtle)] pt-6">
          <div className="flex items-center gap-3">
            <p className="text-[11px] text-[color:var(--color-text-tertiary)]">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
            <span className="text-[color:var(--color-text-tertiary)]">·</span>
            <p className="text-[11px] font-mono text-[color:var(--color-text-tertiary)]">
              Built with Next.js + TypeScript
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
