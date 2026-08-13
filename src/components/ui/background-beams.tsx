"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 select-none transform-gpu">
      {/* Primary Top Ambient Spotlight Glow - GPU Accelerated */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-gradient-to-b from-[color:var(--color-accent-subtle)] via-[color:var(--color-accent-default)]/20 to-transparent blur-3xl opacity-40 animate-pulse pointer-events-none transform-gpuWillChangeOpacity" />

      {/* Secondary Soft Depth Ambient Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-500/15 to-transparent blur-3xl opacity-25 pointer-events-none transform-gpu" />
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-3xl opacity-25 pointer-events-none transform-gpu" />
    </div>
  );
};
