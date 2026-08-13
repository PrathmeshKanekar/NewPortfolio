"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";
import {
  SiAngular,
  SiDotnet,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { Cloud } from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { Hero3DScene } from "@/components/three/Hero3DScene";

// ============================================================================
// CONSTANTS
// ============================================================================

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];
const STAGGER_MS = 0.08;

const HERO_PHOTO_SRC = ""; // Set to "/images/prathmesh.jpg" when available

const TECH_BADGES = [
  { label: "Angular", Icon: SiAngular, color: "#DD0031" },
  { label: ".NET", Icon: SiDotnet, color: "#512BD4" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Azure", Icon: Cloud, color: "#0078D4" },
] as const;

const HERO_STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Daily Transactions", value: 2, suffix: "M+" },
  { label: "System Uptime", value: 99.9, suffix: "%", decimalPlaces: 1 },
];

// ============================================================================
// ANIMATED HEADLINE
// ============================================================================

function StaggeredName({ shouldReduce }: { shouldReduce: boolean | null }) {
  const words = ["Prathmesh", "Kanekar"];

  const wordVariants: any = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28, rotateX: 35 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.7, ease: EASE_REVEAL },
        },
      };

  return (
    <h1
      id="hero-heading"
      className="font-space text-[clamp(2.75rem,5.5vw,5.25rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-2"
      style={{ perspective: "600px" }}
    >
      <span className="sr-only">Prathmesh Kanekar</span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          aria-hidden="true"
          variants={wordVariants}
          className="inline-block mr-[0.22em] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-600 dark:from-white dark:via-slate-100 dark:to-indigo-400 bg-clip-text text-transparent"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

// ============================================================================
// PORTRAIT & 3D COMBINED FRAME
// ============================================================================

function PortraitAnd3DFrame() {
  const [activeTab, setActiveTab] = useState<"3d" | "photo">("3d");

  return (
    <div className="relative w-full max-w-[340px] lg:max-w-[420px] mx-auto">
      {/* Background ambient glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,var(--color-accent-default)_0%,transparent_70%)] opacity-[0.12] blur-3xl pointer-events-none" />

      {/* Main card with BorderBeam */}
      <div className="relative rounded-3xl p-1 bg-white/40 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-glow backdrop-blur-xl overflow-hidden">
        
        {/* Toggle switch between 3D scene & Photo */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("3d")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-all ${
              activeTab === "3d"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            3D View
          </button>
          <button
            onClick={() => setActiveTab("photo")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-all ${
              activeTab === "photo"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Portrait
          </button>
        </div>

        <div className="rounded-[22px] overflow-hidden bg-slate-50/50 dark:bg-slate-950/60 aspect-[4/4.8] relative flex items-center justify-center">
          {activeTab === "3d" ? (
            <Hero3DScene />
          ) : (
            <>
              {HERO_PHOTO_SRC ? (
                <Image
                  src={HERO_PHOTO_SRC}
                  alt="Prathmesh Kanekar — Full Stack Software Engineer"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPk6G0tawAAAABJRU5ErkJggg=="
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/10 via-slate-100 dark:via-slate-900 to-purple-500/10 p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 shadow-inner">
                    <User className="w-10 h-10 text-indigo-500 dark:text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <span className="font-space text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Prathmesh Kanekar
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Software Engineer
                  </span>
                </div>
              )}
            </>
          )}

          {/* Status Chip */}
          <div
            className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-md text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Engineering Roles
          </div>
        </div>

        {/* MagicUI Animated Border Beam */}
        <BorderBeam size={180} duration={7} delay={0} colorFrom="#6366f1" colorTo="#a855f7" />
      </div>
    </div>
  );
}

// ============================================================================
// TECH BADGES
// ============================================================================

function TechBadges({ shouldReduce }: { shouldReduce: boolean | null }) {
  const badgeVariants: any = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: 0.7 + i * 0.05, duration: 0.4, ease: EASE_REVEAL },
        }),
      };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-8">
      {TECH_BADGES.map((badge, i) => (
        <motion.div
          key={badge.label}
          custom={i}
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-[12px] font-mono font-medium text-slate-700 dark:text-slate-300 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-colors"
        >
          <badge.Icon className="w-3.5 h-3.5" style={{ color: badge.color }} />
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================================
// STATS COUNTER ROW
// ============================================================================

function StatsRow({ shouldReduce }: { shouldReduce: boolean | null }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200/80 dark:border-white/10 max-w-xl">
      {HERO_STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <div className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
            <NumberTicker
              value={stat.value}
              decimalPlaces={stat.decimalPlaces || 0}
              suffix={stat.suffix}
            />
          </div>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// HERO COMPONENT
// ============================================================================

export function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : STAGGER_MS,
        delayChildren: shouldReduce ? 0 : 0.05,
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
          transition: { duration: 0.6, ease: EASE_REVEAL },
        },
      };

  return (
    <section
      className="relative flex flex-col justify-center min-h-[calc(100svh-80px)] py-16 md:py-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Particles Texture */}
      <Particles quantity={35} ease={60} className="z-0" />

      {/* Glow gradient blobs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          {/* LEFT COLUMN: Main Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Status Badge */}
            {SITE_CONFIG.availabilityStatus && (
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {SITE_CONFIG.availabilityStatus}
                </div>
              </motion.div>
            )}

            {/* Terminal Path Line */}
            <motion.div
              variants={itemVariants}
              className="mb-2 font-mono text-xs sm:text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center"
            >
              ~/prathmesh
              <span className="inline-block w-[2px] h-[14px] bg-indigo-600 dark:bg-indigo-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <StaggeredName shouldReduce={shouldReduce} />

            {/* Role title */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-slate-700 dark:text-slate-300 mt-2"
            >
              Full Stack Software Engineer
            </motion.h2>

            {/* Stack Metadata Tags */}
            <motion.div
              variants={itemVariants}
              className="mt-3 flex flex-wrap items-center gap-2"
            >
              {["Enterprise Banking Software", "Angular + .NET", "Docker + Azure"].map(
                (tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="hidden sm:block w-px h-3.5 bg-slate-300 dark:bg-white/10" />
                    )}
                    <span
                      className={`font-mono text-xs sm:text-[13px] tracking-wide ${
                        i === 0
                          ? "text-slate-900 dark:text-white font-medium"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {tag}
                    </span>
                  </span>
                )
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              {SITE_CONFIG.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/projects">
                <ShimmerButton className="text-sm font-semibold shadow-glow">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </ShimmerButton>
              </Link>

              <a
                href={`/resume/${RESUME_FILENAME}`}
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 px-6 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-white/20 active:scale-95"
              >
                <Download className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                Resume
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/prathmeshkanekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prathmesh-kanekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-md transition-all duration-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Tech Brand Badges */}
            <TechBadges shouldReduce={shouldReduce} />

            {/* Stats Row */}
            <StatsRow shouldReduce={shouldReduce} />
          </motion.div>

          {/* RIGHT COLUMN: 3D Scene / Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE_REVEAL, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <PortraitAnd3DFrame />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
