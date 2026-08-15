"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import type { Project } from "@/types/project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      className="py-8 md:py-12"
      aria-labelledby="featured-projects"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Portfolio"
            heading="Featured Projects"
            description="Production applications and systems I've designed and developed."
            id="featured-projects"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div key={project.slug} variants={fadeUpVariants}>
                <ProjectCard project={project} featured={index === 0} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 p-12 text-center text-sm text-[color:var(--color-text-tertiary)] border border-dashed border-[color:var(--color-border-subtle)] rounded-2xl">
              No featured projects found.
            </div>
          )}
        </motion.div>

        <RevealOnScroll className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] px-8 text-sm font-semibold text-[color:var(--color-text-primary)] transition-all duration-200 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-hover)] active:scale-95"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
