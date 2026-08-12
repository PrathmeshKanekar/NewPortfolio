"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";

/** Closing CTA section on the Home page */
export function ClosingCTA() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="closing-cta">
      <Container>
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="closing-cta"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--color-text-primary)]"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 text-[color:var(--color-text-secondary)] leading-relaxed">
              I&apos;m currently {SITE_CONFIG.availabilityStatus.toLowerCase()}.
              If you&apos;re looking for a full stack engineer for your team or a
              collaboration — I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[color:var(--color-text-primary)] px-6 text-sm font-medium text-[color:var(--color-surface-sunken)] transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex h-11 items-center rounded-lg border border-[color:var(--color-border-subtle)] px-6 text-sm font-medium text-[color:var(--color-text-primary)] transition-colors hover:bg-[color:var(--color-surface-hover)]"
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
