"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";

/** Closing CTA section on the Home page */
export function ClosingCTA() {
  return (
    <section className="pt-24 pb-40 md:pt-32 md:pb-48 relative overflow-hidden" aria-labelledby="closing-cta">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <RevealOnScroll>
          <div className="flex flex-col items-center text-center p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-soft">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {SITE_CONFIG.availabilityStatus}
            </div>

            <h2 id="closing-cta" className="font-space text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Let&apos;s build something <span className="text-emerald-600 dark:text-emerald-400">useful.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
              If you&apos;re looking for a full stack engineer to tackle complex enterprise challenges, build scalable architecture, or just want to connect—my inbox is open.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-8 text-base font-bold text-white dark:text-slate-900 shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Say Hello
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-8 text-base font-bold text-slate-700 dark:text-slate-300 shadow-soft transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-1 hover:shadow-hover"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
