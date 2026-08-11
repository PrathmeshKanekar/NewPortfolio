"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animation-variants";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

interface ProjectCaseStudyProps {
  title: string;
  description: string;
  techStack: string[];
  repository?: string;
  url?: string;
  metrics?: Record<string, string>;
  gallery?: string[];
  children?: React.ReactNode;
}

export function ProjectCaseStudy({
  title,
  description,
  techStack,
  repository,
  url,
  metrics,
  gallery,
  children,
}: ProjectCaseStudyProps) {
  return (
    <article className="mx-auto max-w-4xl py-12 md:py-20">
      {/* Hero Section */}
      <motion.header
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16 space-y-6 text-center"
      >
        <motion.h1 variants={fadeUpVariants} className="text-heading-1 font-bold text-[color:var(--color-text-primary)]">
          {title}
        </motion.h1>
        <motion.p variants={fadeUpVariants} className="text-lg text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
          {description}
        </motion.p>
        
        {/* Links */}
        <motion.div variants={fadeUpVariants} className="flex justify-center gap-4 pt-4">
          {repository && (
            <a href={repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-base)] text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)] transition-colors">
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-[color:var(--color-text-primary)] text-[color:var(--color-surface-base)] hover:bg-[color:var(--color-text-secondary)] transition-colors">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>
      </motion.header>

      {/* Metrics Strip */}
      {metrics && Object.keys(metrics).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)]"
        >
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[color:var(--color-accent-default)]">{value}</div>
              <div className="text-xs uppercase tracking-wider font-medium text-[color:var(--color-text-tertiary)] mt-1">{key}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <div className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-text-tertiary)] mb-4 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-hover)] text-sm font-medium text-[color:var(--color-text-secondary)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* MDX Content Body */}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-[color:var(--color-border-subtle)]">
        {children}
      </div>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <div className="mt-20">
          <h2 className="text-heading-3 font-bold text-[color:var(--color-text-primary)] mb-8">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]">
                <Image src={img} alt={`Gallery image ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
