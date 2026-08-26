"use client";

import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";

/** Agency-grade closing CTA section with ShimmerButton, BorderBeam, & Sonner Toast */
export function ClosingCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    import("sonner").then(({ toast }) => {
      toast.success("Email copied to clipboard!", {
        description: SITE_CONFIG.email,
      });
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-10 md:py-16 relative overflow-hidden" aria-labelledby="closing-cta">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="relative flex flex-col items-center text-center p-8 md:p-16 rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] shadow-md overflow-hidden">


              <h2 id="closing-cta" className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--color-text-primary)] mb-6">
                Let&apos;s discuss your next project.
              </h2>

              <p className="text-lg md:text-xl text-[color:var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed">
                If you&apos;re looking for a full stack engineer to tackle complex enterprise challenges, build scalable architecture, or discuss technical opportunities—my inbox is open.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ShimmerButton
                  onClick={handleCopyEmail}
                  className="h-14 px-8 text-base font-bold"
                >
                  {copied ? (
                    <>
                      <Check className="h-5 w-5 text-[color:var(--color-status-success)]" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5" />
                      Copy Direct Email
                    </>
                  )}
                </ShimmerButton>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] px-8 text-base font-semibold text-[color:var(--color-text-primary)] shadow-xs transition-all duration-200 hover:bg-[color:var(--color-surface-hover)] hover:border-[color:var(--color-border-strong)] active:scale-95"
                >
                  Go to Contact Form
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* MagicUI Border Beam */}
              <BorderBeam size={250} duration={8} delay={0} colorFrom="var(--color-gradient-start)" colorTo="var(--color-gradient-end)" />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
