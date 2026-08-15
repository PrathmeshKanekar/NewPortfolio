"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Pure zero-lag instant container for maximum 60fps scroll performance */
export function RevealOnScroll({
  children,
  className,
}: RevealOnScrollProps) {
  return <div className={cn(className)}>{children}</div>;
}
