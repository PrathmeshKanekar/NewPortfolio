"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Subtle background grid pattern component */
function EngineeringSystem() {
  const shouldReduce = useReducedMotion();
  
  const pulseVariant: any = shouldReduce ? {} : {
    animate: { opacity: [0.3, 0.7, 0.3], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] h-[480px] pointer-events-none hidden lg:flex flex-col items-center justify-center opacity-50 dark:opacity-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface-sunken)_0%,transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex flex-col items-center w-full h-full justify-center gap-10"
      >
        {/* Node 1 */}
        <div className="relative flex flex-col items-center group">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[color:var(--color-surface-base)] border border-[color:var(--color-border-subtle)] rounded shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="font-mono text-[11px] text-[color:var(--color-text-secondary)] tracking-wide">Angular</span>
          </div>
        </div>

        {/* Connection */}
        <motion.div variants={pulseVariant} animate="animate" className="absolute top-[80px] w-px h-[40px] bg-gradient-to-b from-[color:var(--color-border-default)] to-transparent" />

        {/* Node 2 */}
        <div className="relative flex flex-col items-center group z-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-[color:var(--color-surface-overlay)] border border-[color:var(--color-border-default)] rounded-md shadow-md backdrop-blur-sm">
            <span className="font-mono text-xs font-medium text-[color:var(--color-text-primary)]">ASP.NET Core</span>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="w-4 h-px bg-[color:var(--color-border-subtle)]" />
            <div className="w-6 h-6 bg-[color:var(--color-surface-hover)] border border-[color:var(--color-border-subtle)] rounded-full flex items-center justify-center">
              <span className="font-mono text-[9px] text-[color:var(--color-text-secondary)]">PK</span>
            </div>
          </div>
        </div>

        {/* Connection */}
        <motion.div variants={pulseVariant} animate="animate" className="absolute top-[170px] w-px h-[40px] bg-gradient-to-b from-transparent via-[color:var(--color-border-default)] to-transparent" />

        {/* Node 3 */}
        <div className="relative flex flex-col items-center group">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[color:var(--color-surface-base)] border border-[color:var(--color-border-subtle)] rounded shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
            <span className="font-mono text-[11px] text-[color:var(--color-text-secondary)] tracking-wide">SQL Server / PostgreSQL</span>
          </div>
        </div>

        {/* Connection */}
        <motion.div variants={pulseVariant} animate="animate" className="absolute top-[260px] w-px h-[40px] bg-gradient-to-b from-transparent to-[color:var(--color-border-default)]" />

        {/* Node 4 */}
        <div className="relative flex flex-col items-center group">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] rounded shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
            <span className="font-mono text-[11px] text-[color:var(--color-text-tertiary)] tracking-wide">Docker / Azure</span>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}

/** Full-viewport hero — recruiter-focused, technically confident */
export function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_REVEAL },
        },
      };

  return (
    <section
      className="relative flex flex-col justify-start min-h-[calc(100svh-100px)] lg:min-h-[85vh] pt-[12vh] lg:pt-[16vh] pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-mesh-subtle)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-8 flex flex-col items-start"
          >
            {/* Status */}
            {SITE_CONFIG.availabilityStatus && (
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]/50 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-[color:var(--color-text-secondary)] shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  {SITE_CONFIG.availabilityStatus}
                </div>
              </motion.div>
            )}

            {/* Name */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 font-mono text-[13px] tracking-wider text-[color:var(--color-text-secondary)]">
              ~/prathmesh
            </motion.div>
            
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-[40px] sm:text-5xl lg:text-[64px] xl:text-[80px] font-bold tracking-[-0.03em] text-[color:var(--color-text-primary)] leading-[1.05]"
            >
              Prathmesh Kanekar
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-[-0.01em] text-[color:var(--color-text-secondary)]"
            >
              Full Stack Software Engineer
            </motion.h2>

            {/* Domain tag */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs sm:text-[13px] text-[color:var(--color-text-tertiary)]"
            >
              <span className="text-[color:var(--color-text-primary)] font-medium">
                Enterprise Banking Software
              </span>
              <span className="hidden sm:inline-block text-[color:var(--color-border-default)]">·</span>
              <span>Angular + .NET</span>
              <span className="hidden sm:inline-block text-[color:var(--color-border-default)]">·</span>
              <span>Docker + Azure</span>
            </motion.div>

            {/* Statement */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-[15px] sm:text-base lg:text-[17px] text-[color:var(--color-text-secondary)] leading-[1.7] max-w-[65ch]"
            >
              {SITE_CONFIG.description}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[color:var(--color-text-primary)] px-6 text-[13px] font-medium text-[color:var(--color-surface-sunken)] shadow-sm transition-all duration-150 hover:bg-[color:var(--color-text-secondary)]"
              >
                View My Work
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
              
              <a
                href={`/resume/${RESUME_FILENAME}`}
                download
                className="inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[color:var(--color-border-subtle)] bg-transparent px-5 text-[13px] font-medium text-[color:var(--color-text-primary)] transition-all duration-150 hover:bg-[color:var(--color-surface-hover)] hover:border-[color:var(--color-border-default)]"
              >
                <Download className="h-3.5 w-3.5 text-[color:var(--color-text-secondary)]" />
                Resume
              </a>
              
              <div className="flex items-center gap-1.5 ml-2">
                <a
                  href="https://github.com/prathmeshkanekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-[color:var(--color-text-secondary)] border border-transparent transition-all duration-150 hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] hover:border-[color:var(--color-border-subtle)]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prathmesh-kanekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-[color:var(--color-text-secondary)] border border-transparent transition-all duration-150 hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] hover:border-[color:var(--color-border-subtle)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Element (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[400px]">
            <EngineeringSystem />
          </div>

        </div>
      </Container>
    </section>
  );
}
