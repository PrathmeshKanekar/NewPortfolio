"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/** Project card with thumbnail, tech badges, and hover reveal (Section 9) */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] transition-colors duration-200",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden bg-[color:var(--color-surface-sunken)]">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.02 },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="h-full w-full"
        >
          <div className="h-full w-full bg-gradient-to-br from-[color:var(--color-accent-subtle)] to-[color:var(--color-surface-sunken)] flex items-center justify-center">
            <span className="font-mono text-sm text-[color:var(--color-text-tertiary)]">
              {project.title}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-heading-3 font-semibold text-[color:var(--color-text-primary)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[color:var(--color-text-secondary)] line-clamp-2">
          {project.summary}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-[var(--radius-full)] bg-[color:var(--color-accent-subtle)] px-2.5 py-0.5 font-mono text-xs text-[color:var(--color-accent-default)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover-reveal link */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent-default)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
        >
          View case study
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
