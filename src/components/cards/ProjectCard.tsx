"use client";

import Link from "next/link";
import Image from "next/image";
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
          "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-soft h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-slate-300 dark:hover:border-white/20",
          className
        )}
      >
        {/* Cover Image in browser frame */}
        <div className="relative w-full aspect-[16/10] border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-slate-200/50 dark:bg-slate-800 flex items-center px-3 gap-1.5 z-10 border-b border-slate-200 dark:border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="relative w-full h-full mt-8 overflow-hidden">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.coverImageAlt || project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-800 transition-transform duration-500 group-hover:scale-105">
                <Folder className="w-12 h-12 opacity-50" />
              </div>
            )}
            {/* Glow overlay on hover */}
            <div className="absolute inset-0 bg-emerald-500/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-emerald-500/20 pointer-events-none" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-space text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.repoUrl, '_blank'); }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Repository"
                >
                  <Github className="h-4 w-4" />
                </span>
              )}
              {project.liveUrl && (
                <span
                  onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-6">
            {project.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] font-medium px-2.5 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[11px] font-medium px-2.5 py-1 text-slate-500">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
