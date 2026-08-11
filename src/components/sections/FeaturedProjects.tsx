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

/** Featured projects grid on the Home page (Section 15) */
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="featured-projects"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Selected Work"
            heading="Featured Projects"
            description="Enterprise-grade systems I've designed and built — from banking platforms to healthcare solutions."
            id="featured-projects"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent-default)] transition-colors duration-150 hover:text-[color:var(--color-accent-hover)]"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
