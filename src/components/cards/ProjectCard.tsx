"use client";

import Link from "next/link";
import { ArrowUpRight, Folder } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/** Professional engineering case study card */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className={cn(
          "group flex flex-col justify-between overflow-hidden rounded-[var(--radius-sm)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] shadow-sm p-6 h-full transition-all duration-250 ease-[var(--ease-reveal)] hover:-translate-y-1 hover:shadow-md hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)] cursor-pointer",
          className
        )}
      >
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-base font-semibold text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent-default)] transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.repoUrl, '_blank'); }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-base)] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-default)]"
                  aria-label="Repository"
                >
                  <Github className="h-4 w-4" />
                </span>
              )}
              {project.liveUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-base)] text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:border-[color:var(--color-border-default)]"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 gap-y-3 mb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] block mb-1">
                Overview
              </span>
              <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>
            
            {project.role && (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] block mb-1">
                  Role
                </span>
                <p className="text-sm text-[color:var(--color-text-primary)]">
                  {project.role}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] block mb-2">
            Technology
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded bg-[color:var(--color-surface-hover)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex items-center text-xs font-medium text-[color:var(--color-text-secondary)] group-hover:text-[color:var(--color-accent-default)] transition-colors">
            Read Case Study <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
