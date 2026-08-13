"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Folder, TrendingUp } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import Tilt from "react-parallax-tilt";
import { BorderBeam } from "@/components/ui/border-beam";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

/** Professional case study card with browser frame, metrics, and BorderBeam */
export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={2000} className="h-full">
      <Link href={`/projects/${project.slug}`}>
        <div
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-md h-full transition-all duration-300 hover:shadow-lg hover:border-indigo-500/40 dark:hover:border-indigo-500/40",
            className
          )}
        >
          {/* Cover Image in Browser Device Frame */}
          <div className="relative w-full aspect-[16/9] border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 overflow-hidden">
            {/* Top Browser Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-slate-200/70 dark:bg-slate-900/90 flex items-center justify-between px-3 z-10 border-b border-slate-200 dark:border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white/60 dark:bg-black/40 text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 truncate max-w-[180px]">
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
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-950/80 transition-transform duration-700 group-hover:scale-105">
                  <Folder className="w-10 h-10 opacity-40 mb-1" />
                  <span className="text-xs font-mono opacity-60">{project.title}</span>
                </div>
              )}

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-xs font-mono text-indigo-300 flex items-center gap-1">
                  View Full Architecture Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            {/* Metric pill callout if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 self-start">
                <TrendingUp className="w-3 h-3" />
                {project.metrics[0].value} {project.metrics[0].label}
              </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-space text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex items-center gap-2">
                {project.repoUrl && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.repoUrl, "_blank");
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-6">
              {project.summary}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] font-medium px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-600 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className="font-mono text-[11px] font-medium px-2 py-0.5 text-slate-500">
                  +{project.stack.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* BorderBeam effect for featured projects */}
          {featured && (
            <BorderBeam size={200} duration={8} delay={0} colorFrom="#6366f1" colorTo="#a855f7" />
          )}
        </div>
      </Link>
    </Tilt>
  );
}
