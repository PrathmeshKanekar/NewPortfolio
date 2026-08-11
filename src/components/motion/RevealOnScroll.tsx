"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUpVariants,
  reducedMotionVariants,
} from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Wraps children in a scroll-triggered fade-up reveal (Section 11/27) */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce ? reducedMotionVariants : fadeUpVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
