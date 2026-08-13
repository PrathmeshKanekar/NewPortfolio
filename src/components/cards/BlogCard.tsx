"use client";

import Link from "next/link";
import { Calendar, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

/** Agency-grade blog card with graphic header, category pill, reading time, and hover glow */
export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:border-indigo-500/40 dark:hover:border-indigo-500/40",
        className
      )}
    >
      {/* Decorative graphic preview header */}
      <div className="relative w-full h-36 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-slate-100 dark:to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center justify-between z-10">
          {post.tags[0] ? (
            <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 font-mono text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              {post.tags[0]}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-white/10 font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              Article
            </span>
          )}

          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-200/50 dark:border-white/10">
            <Clock className="h-3 w-3 text-indigo-500" />
            {post.readingTime} min read
          </span>
        </div>

        <div className="flex items-center gap-2 z-10">
          <BookOpen className="w-5 h-5 text-indigo-500 opacity-60" />
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Engineering Insights</span>
        </div>

        {/* Subtle background glow circle */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="flex items-start justify-between gap-2">
              <span>{post.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
            </Link>
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">Read Article →</span>
        </div>
      </div>
    </article>
  );
}
