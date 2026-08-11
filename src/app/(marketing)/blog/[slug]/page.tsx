import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { getAllBlogPosts } from "@/content/blog/blog-data";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getAllBlogPosts().find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = getAllBlogPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-24 md:py-32" aria-labelledby="post-title">
      <Container>
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 mb-8 text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Posts
        </Link>

        {/* Header */}
        <div className="max-w-3xl">
          {post.tags[0] && (
            <span className="text-eyebrow text-[color:var(--color-accent-default)]">
              {post.tags[0]}
            </span>
          )}
          <h1
            id="post-title"
            className="mt-3 text-heading-1 font-bold text-[color:var(--color-text-primary)]"
          >
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-[color:var(--color-text-tertiary)]">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime} min read
            </span>
          </div>
        </div>

        {/* Placeholder for MDX content */}
        <div className="mt-12 max-w-3xl">
          <div className="rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-8">
            <p className="text-[color:var(--color-text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
            <p className="mt-6 text-sm text-[color:var(--color-text-tertiary)]">
              Full article content will be rendered from MDX here — including
              syntax-highlighted code blocks, diagrams, and a table of contents.
            </p>
          </div>
        </div>
      </Container>
    </article>
  );
}
