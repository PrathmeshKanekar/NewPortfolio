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

/** Featured projects section on the Home page */
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
            eyebrow="Projects"
            heading="Projects"
            description="Enterprise-grade systems I've designed and built."
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
          {projects.map((project, index) => (
            <motion.div key={project.slug} variants={fadeUpVariants}>
              <ProjectCard project={project} featured={index === 0} />
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-200 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
