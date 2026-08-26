"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Github, Linkedin } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VelocityScroll } from "@/components/ui/velocity-scroll";

// ============================================================================

const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];
const HERO_PHOTO_SRC = "/me.png";

interface HeroProps {
  imageSrc?: string;
}

// ============================================================================
// 1. PHOTO COMPONENT (Single subtle border & shadow, no stacked glows)
// ============================================================================

function ProfilePhoto({ imageSrc = HERO_PHOTO_SRC }: { imageSrc?: string }) {
  return (
    <div className="relative h-40 w-40 sm:h-52 sm:w-52 rounded-full p-1 overflow-hidden shadow-xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] flex-shrink-0">
      {/* Inner container */}
      <div className="relative h-full w-full rounded-full overflow-hidden border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt="Prathmesh Kanekar"
            className="h-full w-full object-cover object-[50%_0%] scale-115 origin-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-[color:var(--color-text-primary)]">
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
      className="relative flex flex-col justify-center py-16 md:py-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Background Glow */}
      <BackgroundBeams />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl relative z-10"
        >
          {/* Top Flex Row: Text + Avatar */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            <div className="flex-1 space-y-4">
              <motion.h1
                id="hero-heading"
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[color:var(--color-text-primary)] leading-[1.1]"
              >
                Hi, I&apos;m Prathmesh{" "}
                <span className="inline-block animate-bounce-short">👋</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-[color:var(--color-text-secondary)] leading-relaxed max-w-xl"
              >
                Full Stack Developer specializing in scalable web apps, and modern design systems.
              </motion.p>

              {/* Contact & Social Icons */}
              <motion.div
                id="hero-contact-buttons"
                variants={itemVariants}
                className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5"
              >
                {/* GitHub Button */}
                <a
                  href={SOCIAL_LINKS[0].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-[color:var(--color-text-secondary)] transition-all duration-150 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text-primary)] active:scale-95"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href={SOCIAL_LINKS[1].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-[color:var(--color-text-secondary)] transition-all duration-150 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text-primary)] active:scale-95"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Send Email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-[color:var(--color-text-secondary)] transition-all duration-150 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] hover:text-[color:var(--color-text-primary)] active:scale-95"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="shrink-0">
              <ProfilePhoto imageSrc={imageSrc} />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}