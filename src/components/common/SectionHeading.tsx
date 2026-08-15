"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

/** Human-crafted, authentic section heading component */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  id,
  align = "left",
}: SectionHeadingProps) {
  const headingId = id ?? heading.toLowerCase().replace(/\s+/g, "-");
  const shouldReduce = useReducedMotion();

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "flex flex-col items-center text-center mx-auto max-w-3xl",
        className
      )}
    >
      {/* 1. Eyebrow */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={cn(
            "mb-2.5 font-mono text-xs font-semibold tracking-widest text-[color:var(--color-accent-default)] uppercase",
            align === "center" && "text-center"
          )}
        >
          {eyebrow}
        </motion.p>
      )}

      {/* 2. Main Title */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className={cn("flex flex-col gap-2", align === "center" && "items-center")}
      >
        <h2
          id={headingId}
          className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--color-text-primary)] leading-tight"
        >
          {heading}
        </h2>
      </motion.div>

      {/* 3. Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "mt-3 text-base sm:text-lg text-[color:var(--color-text-secondary)] leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
