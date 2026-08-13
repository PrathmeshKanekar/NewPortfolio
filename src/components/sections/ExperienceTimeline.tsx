"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
}

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export function ExperienceTimeline({ items, className }: ExperienceTimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-slate-200 dark:border-white/10 text-slate-500">
        No experience entries available.
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-white/10 before:to-transparent", className)}
    >
      {items.map((item, index) => (
        <motion.div
          key={`${item.company}-${index}`}
          variants={fadeUpVariants}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-emerald-500 shadow-soft shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
              <time className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full w-fit">
                {item.duration}
              </time>
            </div>
            <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">{item.company}</div>
            <ul className="list-disc list-outside ml-4 space-y-2 mb-4 text-[14px] leading-relaxed text-slate-600 dark:text-slate-400 marker:text-emerald-500">
              {item.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="font-mono text-[11px] font-medium px-2 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
