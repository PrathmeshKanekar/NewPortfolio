"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * delay, duration: 0.4 },
    }),
  },
  className,
}: WordFadeInProps) {
  const wordsArray = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-tight text-black dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {wordsArray.map((word, i) => (
        <motion.span key={word + i} custom={i} variants={variants}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
