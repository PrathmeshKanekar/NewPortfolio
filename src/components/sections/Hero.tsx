"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";

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
    <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm dark:border-white/15 dark:bg-slate-900 transition-transform duration-300 hover:scale-105">
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
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 font-space text-xl font-bold text-slate-500 dark:from-slate-900 dark:to-slate-950 dark:text-slate-400">
          PK
        </div>
      )}
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
      className="relative flex flex-col justify-center min-h-[calc(85vh-80px)] py-20 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* 1. PHOTO */}
          <motion.div variants={itemVariants} className="mb-6">
            <ProfilePhoto imageSrc={imageSrc} />
          </motion.div>

          {/* 2. NAME (Single most visually dominant element) */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-space text-[clamp(2.75rem,7vw,5.25rem)] font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white"
          >
            Prathmesh <span className="text-indigo-600 dark:text-indigo-400">Kanekar</span>
          </motion.h1>

          {/* 3. ROLE (One line: what I do / specialization) */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300"
          >
            Full Stack Developer, focused on enterprise banking software
          </motion.h2>

          {/* 4. DESCRIPTION (1-2 lines max) */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            Building secure, scalable modules for enterprise core banking systems — from database to UI.
          </motion.p>

          {/* 5. CONTACTS (Icon-only links for GitHub, LinkedIn, Email) */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <a
              href="https://github.com/prathmeshkanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-kanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          {/* 6. CTA BUTTONS (Exactly two: View My Work & Resume) */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none active:scale-[0.98] dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}