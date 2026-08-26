"use client";

/**
 * Ultimate Hybrid Dock Component
 * Combining:
 * 1. Magic UI (https://portfolio-magicui.vercel.app/) — High-contrast black pill tooltips with triangle arrow notch, clean glass pill container, and fluid distance calculation.
 * 2. Jack UI (https://jack-ui-ten.vercel.app/docs/components/dock) — 3D spatial perspective, Z-axis popping, Y-elevation, domino tilt, and active floor glow platform.
 */

import React, { createContext, useContext, useRef, useState, useId } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useReducedMotion,
  HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type DockContextValue = {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  distance: number;
  magnification: number;
  pillLayoutId: string;
};

const DockContext = createContext<DockContextValue | null>(null);

export interface DockProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  magnification?: number;
}

const DEFAULT_DISTANCE = 140;
const DEFAULT_MAGNIFICATION = 58;

// Physical liquid spring config
const SPRING_CONFIG = { mass: 0.08, stiffness: 350, damping: 20 };

export function Dock({
  children,
  className,
  distance = DEFAULT_DISTANCE,
  magnification = DEFAULT_MAGNIFICATION,
  ...rest
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const pillLayoutId = useId();

  return (
    <DockContext.Provider value={{ mouseX, distance, magnification, pillLayoutId }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{ perspective: 1200 }}
        className={cn(
          "relative mx-auto flex h-16 w-max items-center gap-2 rounded-full border border-stone-200/80 dark:border-stone-800/80 bg-white/85 dark:bg-stone-950/85 px-3 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/60 dark:ring-transparent backdrop-blur-2xl transition-colors",
          className
        )}
        {...rest}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export interface DockItemProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
  label?: string;
}

export function DockItem({
  children,
  className,
  onClick,
  active,
  label,
  ...rest
}: DockItemProps) {
  const dock = useContext(DockContext);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  if (!dock) {
    throw new Error("DockItem must be used within a Dock component");
  }

  const { mouseX, distance, magnification, pillLayoutId } = dock;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const maxDist = distance;

  // 1. Dynamic Width & Height Magnification (Magic UI style)
  const sizeSync = useTransform(
    distanceCalc,
    [-maxDist, 0, maxDist],
    [40, magnification, 40]
  );
  const size = useSpring(sizeSync, SPRING_CONFIG);

  // 2. Spatial 3D Transforms (Jack UI style)
  const ySync = useTransform(
    distanceCalc,
    [-maxDist, 0, maxDist],
    [0, -14, 0]
  );
  const zSync = useTransform(
    distanceCalc,
    [-maxDist, 0, maxDist],
    [0, 35, 0]
  );
  const rotateXSync = useTransform(
    distanceCalc,
    [-maxDist, 0, maxDist],
    [0, 10, 0]
  );
  const rotateYSync = useTransform(
    distanceCalc,
    [-maxDist, -maxDist / 2, 0, maxDist / 2, maxDist],
    [0, -20, 0, 20, 0]
  );

  const y = useSpring(ySync, SPRING_CONFIG);
  const z = useSpring(zSync, SPRING_CONFIG);
  const rotateX = useSpring(rotateXSync, SPRING_CONFIG);
  const rotateY = useSpring(rotateYSync, SPRING_CONFIG);

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
      {/* Magic UI Style High-Contrast Tooltip Badge */}
      <AnimatePresence>
        {hovered && label && (
          <motion.div
            initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.88 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.88 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-14 left-1/2 z-[100] whitespace-nowrap rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900 shadow-md pointer-events-none flex flex-col items-center"
          >
            <span>{label}</span>
            {/* Triangle Arrow Notch */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: reduce ? 40 : size,
          height: reduce ? 40 : size,
          y: reduce ? 0 : y,
          z: reduce ? 0 : z,
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileTap={{ scale: 0.88 }}
        className={cn(
          "relative flex items-center justify-center rounded-full border transition-colors duration-200 cursor-pointer outline-none",
          // Active state styling with Portfolio Teal accent theme
          active
            ? "border-teal-600/70 dark:border-teal-400/80 bg-teal-500/15 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300 font-bold shadow-[0_0_16px_rgba(15,118,110,0.25)] dark:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            : "border-stone-200/70 dark:border-stone-800/70 bg-stone-100/60 dark:bg-stone-900/60 text-stone-600 dark:text-stone-300 hover:bg-stone-200/80 dark:hover:bg-stone-800/80 hover:text-stone-900 dark:hover:text-white",
          hovered && !active && "border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-md",
          className
        )}
        {...rest}
      >
        <motion.div
          animate={{ scale: hovered ? 1.12 : 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="flex items-center justify-center"
        >
          {children}
        </motion.div>
      </motion.button>

      {/* Jack UI 3D Floor Glow Platform for Active Item */}
      {active && (
        <motion.div
          layoutId={`${pillLayoutId}-platform`}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 25 }}
          className="absolute -bottom-2.5 h-1 w-5 rounded-full bg-teal-600/60 dark:bg-teal-400/70 shadow-[0_0_14px_3px_rgba(15,118,110,0.4)] dark:shadow-[0_0_14px_3px_rgba(45,212,191,0.5)] blur-[1.5px] pointer-events-none"
          style={{ rotateX: 60 }}
        />
      )}
    </div>
  );
}

export interface DockSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function DockSeparator({ className, ...rest }: DockSeparatorProps) {
  return (
    <div className="relative flex h-full items-center justify-center px-1" {...rest}>
      <span
        aria-hidden
        className={cn("h-6 w-[1px] bg-stone-200 dark:bg-stone-800 rounded-full", className)}
      />
    </div>
  );
}
