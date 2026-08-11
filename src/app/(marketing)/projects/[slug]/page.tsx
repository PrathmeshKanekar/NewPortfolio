import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { getAllProjects } from "@/content/projects/projects-data";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/common/Icons";
import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getAllProjects().find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const project = getAllProjects().find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-24 md:py-32" aria-labelledby="project-title">
      <Container>
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 mb-8 text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Projects
        </Link>

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-eyebrow text-[color:var(--color-accent-default)]">
            {project.role} · {project.year}
          </p>
          <h1
            id="project-title"
            className="mt-3 text-heading-1 font-bold text-[color:var(--color-text-primary)]"
          >
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] leading-relaxed">
            {project.summary}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] px-4 text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] px-4 text-sm font-medium text-[color:var(--color-text-primary)] transition-all duration-150 hover:bg-[color:var(--color-surface-hover)]"
              >
                <Github className="h-3.5 w-3.5" />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-3xl">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-4"
              >
                <p className="font-mono text-2xl font-bold text-[color:var(--color-accent-default)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-text-tertiary)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-heading-3 font-semibold text-[color:var(--color-text-primary)]">
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-[var(--radius-full)] bg-[color:var(--color-accent-subtle)] px-3 py-1 font-mono text-xs text-[color:var(--color-accent-default)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Placeholder for MDX case study content */}
        <div className="mt-16 max-w-3xl rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-8">
          <p className="text-sm text-[color:var(--color-text-tertiary)]">
            Full case study content will be rendered from MDX here — including
            problem context, architecture decisions, technical challenges,
            outcomes, and diagrams.
          </p>
        </div>
      </Container>
    </article>
  );
}
