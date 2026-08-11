import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

/** Blog card with title, excerpt, reading time, and publish date (Section 9) */
export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-5 transition-all duration-200 hover:border-[color:var(--color-border-default)] hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      {/* Tag */}
      {post.tags[0] && (
        <span className="text-eyebrow text-[color:var(--color-accent-default)]">
          {post.tags[0]}
        </span>
      )}

      <h3 className="mt-2 text-heading-3 font-semibold text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent-default)] transition-colors duration-150">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>

      <p className="mt-2 text-sm text-[color:var(--color-text-secondary)] line-clamp-2">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--color-text-tertiary)]">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(post.publishDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readingTime} min read
        </span>
      </div>
    </article>
  );
}
