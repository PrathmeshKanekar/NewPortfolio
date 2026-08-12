"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PRIMARY_TECH = [
  "Angular", "TypeScript", "C#", "ASP.NET Core",
  "SQL Server", "PostgreSQL", "Docker", "Azure",
];

/** Full-viewport hero — recruiter-focused, technically confident */
export function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE_REVEAL },
        },
      };

  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
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

      <Container className="relative py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-3 py-1 text-xs font-medium text-[color:var(--color-text-secondary)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              {SITE_CONFIG.availabilityStatus}
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[color:var(--color-text-primary)] leading-[1.1]"
          >
            Prathmesh Kanekar
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl sm:text-2xl font-medium text-[color:var(--color-text-secondary)]"
          >
            Full Stack Software Engineer
          </motion.p>

          {/* Domain tag */}
          <motion.p
            variants={itemVariants}
            className="mt-2 font-mono text-sm text-[color:var(--color-text-tertiary)]"
          >
            Enterprise Banking Software · Angular + .NET · Docker + Azure
          </motion.p>

          {/* Statement */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-[color:var(--color-text-secondary)] leading-relaxed max-w-2xl"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[color:var(--color-text-primary)] px-5 text-sm font-medium text-[color:var(--color-surface-sunken)] transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-[color:var(--color-border-subtle)] px-5 text-sm font-medium text-[color:var(--color-text-primary)] transition-all duration-150 hover:bg-[color:var(--color-surface-hover)] active:scale-[0.98]"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-2"
          >
            <a
              href="https://github.com/prathmeshkanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-kanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Primary tech strip */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-6 border-t border-[color:var(--color-border-subtle)]"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-3">
              Primary Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {PRIMARY_TECH.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-2.5 py-1 font-mono text-xs text-[color:var(--color-text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5 text-[color:var(--color-text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
