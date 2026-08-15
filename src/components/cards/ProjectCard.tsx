"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Folder, TrendingUp } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import Tilt from "react-parallax-tilt";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

/** Professional case study card with browser frame, metrics, and BorderBeam */
export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="h-full block">
      <div
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] shadow-sm h-full transition-all duration-200 hover:shadow-md hover:border-[color:var(--color-border-strong)]",
          className
        )}
      >
          {/* Cover Image in Browser Device Frame */}
          <div className="relative w-full aspect-[16/9] border-b border-[color:var(--color-border-default)] bg-[color:var(--color-surface-sunken)] overflow-hidden">
            {/* Top Browser Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-[color:var(--color-surface-sunken)]/70 flex items-center justify-between px-3 z-10 border-b border-[color:var(--color-border-subtle)] backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-[color:var(--color-surface-raised)]/60 text-[10px] font-mono text-[color:var(--color-text-tertiary)] border border-[color:var(--color-border-subtle)] truncate max-w-[180px]">
                https://{project.slug}.internal
              </div>
              <div className="w-4" />
            </div>

            <div className="relative w-full h-full mt-8 overflow-hidden">
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.coverImageAlt || project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[color:var(--color-text-tertiary)] bg-[color:var(--color-surface-sunken)] transition-transform duration-700 group-hover:scale-105">
                  <Folder className="w-10 h-10 opacity-40 mb-1" />
                  <span className="text-xs font-mono opacity-60">{project.title}</span>
                </div>
              )}

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-xs font-mono text-[color:var(--color-accent-hover)] flex items-center gap-1">
                  View Full Architecture Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            {/* Metric pill callout if available */}
            {project.metrics && project.metrics.length > 0 && (
              <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--color-accent-subtle)] border-[color:var(--color-accent-default)]/20 text-[11px] font-mono font-semibold text-[color:var(--color-accent-default)] self-start">
                <TrendingUp className="w-3 h-3" />
                {project.metrics[0].value} {project.metrics[0].label}
              </Badge>
            )}

            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-bold text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent-default)] transition-colors">
                {project.title}
              </h3>

              <div className="flex items-center gap-2">
                {project.repoUrl && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.repoUrl, "_blank");
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-sunken)] text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] transition-colors"
                    aria-label="Repository"
                  >
                    <Github className="h-4 w-4" />
                  </span>
                )}
                {project.liveUrl && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.liveUrl, "_blank");
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-sunken)] text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] transition-colors"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-6">
              {project.summary}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-mono text-[11px] font-medium px-2.5 py-0.5 bg-[color:var(--color-surface-sunken)] border-[color:var(--color-border-subtle)] rounded-full text-[color:var(--color-text-secondary)]"
                >
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 5 && (
                <Badge
                  variant="outline"
                  className="font-mono text-[11px] font-medium px-2 py-0.5 text-[color:var(--color-text-tertiary)] border-[color:var(--color-border-subtle)] rounded-full"
                >
                  +{project.stack.length - 5}
                </Badge>
              )}
            </div>
          </div>

      </div>
    </Link>
  );
}
