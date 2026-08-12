"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import { Folder, Star, GitFork, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/common/Icons";
import { GITHUB_USERNAME } from "@/lib/constants";

const REPOS = [
  {
    name: "NewPortfolio",
    description: "Enterprise-grade professional portfolio built with Next.js, MDX, and Tailwind.",
    language: "TypeScript",
    stars: "—",
    url: `https://github.com/${GITHUB_USERNAME}/NewPortfolio`,
  },
  {
    name: "banking-ledger-api",
    description: "Core banking ledger REST API implementation.",
    language: "C#",
    stars: "—",
    url: `https://github.com/${GITHUB_USERNAME}/banking-ledger-api`,
  },
  {
    name: "pathology-lis",
    description: "Laboratory Information System for pathology clinics.",
    language: "TypeScript",
    stars: "—",
    url: `https://github.com/${GITHUB_USERNAME}/pathology-lis`,
  },
  {
    name: "creator-commerce-platform",
    description: "Modular monolith backend for a commerce platform.",
    language: "C#",
    stars: "—",
    url: `https://github.com/${GITHUB_USERNAME}/creator-commerce-platform`,
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-400",
  "C#": "bg-purple-500",
  Java: "bg-orange-500",
};

/** GitHub representation section */
export function GithubOpenSource() {
  return (
    <section
      className="py-24 md:py-32 bg-[color:var(--color-surface-sunken)] border-y border-[color:var(--color-border-subtle)]"
      aria-labelledby="github-heading"
    >
      <Container>
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              number="07"
              eyebrow="Open Source"
              heading="GitHub"
              id="github-heading"
              className="mb-0"
            />
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 md:mt-0 text-sm font-medium text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors"
            >
              <Github className="h-4 w-4" />
              @{GITHUB_USERNAME}
            </a>
          </div>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {REPOS.map((repo) => (
            <motion.div key={repo.name} variants={fadeUpVariants}>
              <a
                href={repo.url}
                target="_blank"
                className="group flex flex-col justify-between h-full rounded-[var(--radius-sm)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-base)] shadow-sm p-5 transition-all duration-250 ease-[var(--ease-reveal)] hover:-translate-y-1 hover:shadow-md hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-4 w-4 text-[color:var(--color-text-tertiary)]" />
                    <h3 className="font-semibold text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent-default)] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[color:var(--color-text-secondary)] line-clamp-2 mb-4">
                    {repo.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-mono text-[color:var(--color-text-tertiary)]">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${LANGUAGE_COLORS[repo.language] || 'bg-gray-400'}`} />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.stars}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
