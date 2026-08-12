"use client";

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

/** Featured projects grid on the Home page */
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="featured-projects"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="04"
            eyebrow="{ projects }"
            heading="Featured Projects"
            description="Enterprise-grade systems I've designed and built."
            id="featured-projects"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)]"
          >
            View all projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
