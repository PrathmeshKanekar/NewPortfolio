"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";

/** Closing CTA section on the Home page (Section 15) */
export function ClosingCTA() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="closing-cta">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-[var(--radius-4)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-10 md:p-16 text-center">
            {/* Accent glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--color-accent-default)" }}
              aria-hidden="true"
            />

            <p className="text-eyebrow text-[color:var(--color-accent-default)] relative">
              Let&apos;s Build Something
            </p>
            <h2
              id="closing-cta"
              className="mt-4 text-heading-1 font-bold text-[color:var(--color-text-primary)] relative"
            >
              Ready to work together?
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-[color:var(--color-text-secondary)] relative">
              I&apos;m currently {SITE_CONFIG.availabilityStatus.toLowerCase()}.
              Whether you need an architect for a new system or a senior
              engineer on an existing team — let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] px-6 text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)] active:translate-y-px"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex h-11 items-center rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] px-6 text-sm font-medium text-[color:var(--color-text-primary)] transition-all duration-150 hover:bg-[color:var(--color-surface-hover)]"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
