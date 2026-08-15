"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as MotionProps;

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({
  children,
  className,
  onClick,
  disabled,
  type = "button",
  ...props
}: ShinyButtonProps) {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        "relative rounded-lg px-6 py-2.5 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--color-accent-default)_20%,transparent)_0%,transparent_60%)] flex items-center justify-center border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-[color:var(--color-text-primary)] shadow-sm",
        className
      )}
    >
      <span
        className="relative block size-full text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-primary)]"
        style={{
          maskImage:
            "linear-gradient(-75deg, var(--color-accent-default) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--color-accent-default) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,color-mix(in_srgb,var(--color-accent-default)_10%,transparent)_calc(var(--x)+20%),color-mix(in_srgb,var(--color-accent-default)_50%,transparent)_calc(var(--x)+25%),color-mix(in_srgb,var(--color-accent-default)_10%,transparent)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
}
