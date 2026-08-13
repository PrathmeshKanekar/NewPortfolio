"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 select-none">
      {/* Primary Static Ambient Spotlight - Zero GPU overhead */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-b from-[color:var(--color-accent-subtle)] via-[color:var(--color-accent-default)]/15 to-transparent blur-2xl opacity-50" />
    </div>
  );
};
