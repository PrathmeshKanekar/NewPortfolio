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
    <section className="pt-24 pb-40 md:pt-32 md:pb-48 relative overflow-hidden" aria-labelledby="closing-cta">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <RevealOnScroll>
          <div className="relative flex flex-col items-center text-center p-8 md:p-16 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-glow overflow-hidden">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {SITE_CONFIG.availabilityStatus}
            </div>

            <h2 id="closing-cta" className="font-space text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Let&apos;s build something <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">extraordinary.</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
              If you&apos;re looking for a full stack engineer to tackle complex enterprise challenges, build scalable architecture, or discuss technical opportunities—my inbox is open.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <ShimmerButton
                onClick={handleCopyEmail}
                className="h-14 px-8 text-base font-bold"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5 text-emerald-400" />
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
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 px-8 text-base font-semibold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-white/20 active:scale-95"
              >
                Go to Contact Form
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* MagicUI Border Beam */}
            <BorderBeam size={250} duration={8} delay={0} colorFrom="#6366f1" colorTo="#a855f7" />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
