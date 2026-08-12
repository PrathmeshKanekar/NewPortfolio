"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/** Engineering case study card */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        initial="rest"
        whileHover="hover"
        className={cn(
          "group relative flex flex-col justify-between overflow-hidden rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-6 h-full transition-all duration-200 hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)] hover:shadow-md cursor-pointer",
          className
        )}
      >
        <div>
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)]">
              <Folder className="h-4 w-4 text-[color:var(--color-text-tertiary)]" />
            </div>
            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.repoUrl, '_blank'); }}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                  aria-label="Source code"
                >
                  <Github className="h-3.5 w-3.5" />
                </span>
              )}
              {project.liveUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[color:var(--color-text-tertiary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
                  aria-label="Live demo"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-[color:var(--color-text-primary)] mb-2 group-hover:text-[color:var(--color-accent-default)] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[color:var(--color-border-subtle)]">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-[color:var(--color-surface-hover)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-tertiary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
