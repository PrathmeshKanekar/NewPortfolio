import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/common/Container";
import { getDocumentBySlug, getAllDocuments } from "@/lib/mdx/loader";
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
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-12 text-xs font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1
              id="project-title"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--color-text-primary)] mb-6"
            >
              {project.frontmatter.title}
            </h1>
            <p className="text-xl text-[color:var(--color-text-secondary)] leading-relaxed">
              {project.frontmatter.description}
            </p>
          </header>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[color:var(--color-border-subtle)] mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-2">Year</p>
              <p className="text-sm font-medium text-[color:var(--color-text-primary)]">{new Date(project.frontmatter.date).getFullYear()}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-2">Role</p>
              <p className="text-sm font-medium text-[color:var(--color-text-primary)]">Full Stack Engineer</p>
            </div>
            {project.frontmatter.repository && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-2">Source</p>
                <a
                  href={project.frontmatter.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            )}
            {project.frontmatter.url && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-2">Live</p>
                <a
                  href={project.frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Visit Site
                </a>
              </div>
            )}
          </div>

          {/* Stack */}
          <div className="mb-16">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-4">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-3 py-1.5 font-mono text-xs text-[color:var(--color-text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none">
            <CustomMDX source={project.source} />
          </div>
        </div>
      </Container>
    </article>
  );
}
