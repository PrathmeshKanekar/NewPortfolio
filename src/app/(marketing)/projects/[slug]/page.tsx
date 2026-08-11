import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { getDocumentBySlug, getAllDocuments } from "@/lib/mdx/loader";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/common/Icons";
import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = getAllDocuments("projects");
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getDocumentBySlug("projects", slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const project = getDocumentBySlug("projects", slug);
  if (!project) notFound();
  
  const { CustomMDX } = await import("@/components/mdx/MDXRemote");

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
            {project.frontmatter.date}
          </p>
          <h1
            id="project-title"
            className="mt-3 text-heading-1 font-bold text-[color:var(--color-text-primary)]"
          >
            {project.frontmatter.title}
          </h1>
          <p className="mt-4 text-lg text-[color:var(--color-text-secondary)] leading-relaxed">
            {project.frontmatter.description}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.frontmatter.url && (
              <a
                href={project.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] px-4 text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {project.frontmatter.repository && (
              <a
                href={project.frontmatter.repository}
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
        {project.frontmatter.metrics && Object.keys(project.frontmatter.metrics).length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-3xl">
            {Object.entries(project.frontmatter.metrics).map(([label, value]) => (
              <div
                key={label}
                className="rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-4"
              >
                <p className="font-mono text-2xl font-bold text-[color:var(--color-accent-default)]">
                  {value as string}
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-text-tertiary)]">
                  {label}
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
            {project.frontmatter.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-[var(--radius-full)] bg-[color:var(--color-accent-subtle)] px-3 py-1 font-mono text-xs text-[color:var(--color-accent-default)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* MDX Content */}
        <div className="mt-16 max-w-3xl rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-8">
          <CustomMDX source={project.source} />
        </div>
      </Container>
    </article>
  );
}
