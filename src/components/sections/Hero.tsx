"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";
import { BackgroundBeams } from "@/components/ui/background-beams";

// ============================================================================
// EASING & PROPS
// ============================================================================

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];
const HERO_PHOTO_SRC = ""; // Set to absolute image path e.g. "/images/prathmesh.jpg"

interface HeroProps {
  imageSrc?: string;
}

// ============================================================================
// 1. PHOTO COMPONENT (Single subtle border & shadow, no stacked glows)
// ============================================================================

function ProfilePhoto({ imageSrc = HERO_PHOTO_SRC }: { imageSrc?: string }) {
  return (
    <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full p-[2px] overflow-hidden group shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--color-accent-rgb,99,102,241),0.25)]">
      {/* Subtle animated gradient ring */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-gradient-start)] via-[color:var(--color-accent-default)] to-[color:var(--color-gradient-end)] animate-[spin_6s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner container */}
      <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-[color:var(--color-background)] bg-[color:var(--color-surface-sunken)] transition-transform duration-500 group-hover:scale-95">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Prathmesh Kanekar — Full Stack Developer"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPk6G0tawAAAABJRU5ErkJggg=="
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[color:var(--color-surface-sunken)] font-mono text-2xl font-bold tracking-tighter text-[color:var(--color-text-primary)]">
            PK
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// HERO COMPONENT — Exactly 6 Elements in Order (Photo, Name, Role, Desc, Contacts, CTAs)
// ============================================================================

export function Hero({ imageSrc }: HeroProps) {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.08,
        delayChildren: shouldReduce ? 0 : 0.04,
      },
    },
  };

  const itemVariants: any = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
      hidden: { opacity: 0, y: 16 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE_REVEAL },
      },
    };

  return (
    <section
      className="relative flex flex-col justify-center min-h-[calc(100vh-80px)] pt-20 pb-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Background Glow */}
      <BackgroundBeams />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center relative z-10"
        >
          {/* 1. PHOTO */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <ProfilePhoto imageSrc={imageSrc} />
          </motion.div>

          {/* 2. NAME */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[color:var(--color-text-primary)]"
          >
            Prathmesh <span className="bg-gradient-to-br from-[color:var(--color-text-primary)] via-[color:var(--color-text-primary)] to-[color:var(--color-text-tertiary)] bg-clip-text text-transparent">Kanekar</span>
          </motion.h1>

          {/* 3. ROLE */}
          <motion.div variants={itemVariants} className="mt-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)]/60 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent-default)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent-default)]"></span>
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[color:var(--color-text-secondary)]">
                Full Stack Developer, focused on enterprise banking software
              </span>
            </div>
          </motion.div>

          {/* 4. DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[color:var(--color-text-secondary)] text-balance"
          >
            Building secure, scalable modules for <span className="text-[color:var(--color-text-primary)] font-semibold">enterprise core banking systems</span> — from database architecture to high-performance UI.
          </motion.p>

          {/* 5. CONTACTS */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/prathmeshkanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)]/40 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-kanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)]/40 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)]/40 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] transition-all duration-300 shadow-sm"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* 6. CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)] hover:text-[color:var(--color-text-primary)] transition-all duration-300 relative"
            >
              <span className="relative z-10 flex items-center gap-2 px-3 py-1.5">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-[color:var(--color-accent-default)]" />
              </span>
              <span className="absolute inset-0 bg-[color:var(--color-surface-hover)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 -z-0 border border-[color:var(--color-border-subtle)]" />
            </Link>

            <span className="text-[color:var(--color-border-subtle)] text-sm font-mono">•</span>

            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-all duration-300 relative"
            >
              <span className="relative z-10 flex items-center gap-2 px-3 py-1.5">
                <Download className="h-4 w-4 text-[color:var(--color-text-tertiary)] group-hover:text-[color:var(--color-text-primary)] transition-colors" />
                Resume
              </span>
              <span className="absolute inset-0 bg-[color:var(--color-surface-hover)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 -z-0 border border-[color:var(--color-border-subtle)]" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}