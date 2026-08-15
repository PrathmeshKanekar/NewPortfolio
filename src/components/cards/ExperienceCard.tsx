"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experience";
import { Building2, ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  isLast?: boolean;
}

export function ExperienceCard({ experience, className, isLast }: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(true);

  const dateDisplay =
    experience.startDate === "Unknown" || experience.startDate === "Current"
      ? "Present"
      : `${experience.startDate} — ${experience.endDate}`;

  return (
    <div className={cn("relative pl-6 sm:pl-8 pb-8 group last:pb-0", className)}>
      {/* Vertical Timeline Line */}
      {!isLast && (
        <div className="absolute left-[9px] top-6 bottom-0 w-[2px] bg-[color:var(--color-border-subtle)] group-hover:bg-[color:var(--color-border-default)] transition-colors duration-200" />
      )}

      {/* Timeline Node */}
      <div className="absolute left-0 top-2.5 h-5 w-5 rounded-full border-2 border-[color:var(--color-border-default)] bg-[color:var(--color-background)] flex items-center justify-center transition-all duration-200 group-hover:border-[color:var(--color-text-primary)] shadow-xs">
        <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-text-primary)]" />
      </div>

      {/* Magic UI Style Resume Card Item */}
      <div className="rounded-xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-4 sm:p-5 transition-all duration-200 hover:border-[color:var(--color-border-strong)]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 text-left focus:outline-none"
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] shadow-xs">
              <Building2 className="w-5 h-5 text-[color:var(--color-text-primary)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 font-bold text-base sm:text-lg text-[color:var(--color-text-primary)]">
                <span className="truncate">{experience.company}</span>
                <span className="text-[color:var(--color-text-tertiary)]">
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  )}
                </span>
              </div>
              <p className="text-xs font-semibold text-[color:var(--color-text-secondary)] truncate">
                {experience.role}
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-[color:var(--color-text-tertiary)] shrink-0 text-right">
            {dateDisplay}
          </div>
        </button>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-3 border-t border-[color:var(--color-border-subtle)] space-y-3">
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[color:var(--color-text-primary)] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[color:var(--color-text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
