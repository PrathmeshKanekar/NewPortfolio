"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Full-viewport hero with statement, CTAs, and animated entrance (Section 15) */
export function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE_REVEAL },
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-eyebrow text-[color:var(--color-accent-default)]"
            >
              {SITE_CONFIG.title}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              id="hero-heading"
              className="mt-4 text-display font-bold text-[color:var(--color-text-primary)]"
            >
              Building premium{" "}
              <span className="text-[color:var(--color-accent-default)]">
                software
              </span>{" "}
              that scales.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-[color:var(--color-text-secondary)] leading-relaxed"
            >
              {SITE_CONFIG.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] px-5 text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)] active:translate-y-px"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] px-5 text-sm font-medium text-[color:var(--color-text-primary)] transition-all duration-150 hover:bg-[color:var(--color-surface-hover)] active:translate-y-px"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "2M+", label: "Transactions/Day" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-2xl font-bold text-[color:var(--color-text-primary)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[color:var(--color-text-tertiary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual placeholder (3D scene will go here) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-[color:var(--color-accent-subtle)] animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-4xl font-bold text-[color:var(--color-accent-default)]">
                    {"</>"}
                  </div>
                  <p className="mt-2 text-xs text-[color:var(--color-text-tertiary)]">
                    R3F scene placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[color:var(--color-text-tertiary)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-[color:var(--color-text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
