"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";

interface TechItem {
  name: string;
  tier: "primary" | "professional" | "working" | "exploring";
}

const TECH_STACK: { category: string; items: TechItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "C#", tier: "primary" },
      { name: "TypeScript", tier: "primary" },
      { name: "JavaScript", tier: "professional" },
      { name: "Python", tier: "working" },
      { name: "C", tier: "exploring" },
      { name: "C++", tier: "exploring" },
      { name: "Java", tier: "exploring" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Angular", tier: "primary" },
      { name: "React", tier: "professional" },
      { name: "Next.js", tier: "working" },
      { name: "HTML5", tier: "professional" },
      { name: "CSS3", tier: "professional" },
      { name: "Tailwind CSS", tier: "professional" },
      { name: "Bootstrap", tier: "professional" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "ASP.NET Core", tier: "primary" },
      { name: "REST APIs", tier: "primary" },
      { name: "Entity Framework Core", tier: "professional" },
      { name: "Dapper", tier: "professional" },
      { name: "Django", tier: "working" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", tier: "primary" },
      { name: "PostgreSQL", tier: "primary" },
      { name: "MySQL", tier: "professional" },
      { name: "SQLite", tier: "working" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", tier: "primary" },
      { name: "Azure", tier: "primary" },
      { name: "Git", tier: "professional" },
      { name: "GitHub", tier: "professional" },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "REST API Design", tier: "primary" },
      { name: "Database Design", tier: "primary" },
      { name: "Enterprise Applications", tier: "primary" },
      { name: "System Design", tier: "professional" },
      { name: "Auth & Authorization", tier: "professional" },
      { name: "Performance Optimization", tier: "professional" },
    ],
  },
];

const TIER_STYLES: Record<TechItem["tier"], string> = {
  primary:
    "border-[color:var(--color-accent-default)]/30 bg-[color:var(--color-accent-subtle)] text-[color:var(--color-text-primary)]",
  professional:
    "border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] text-[color:var(--color-text-secondary)]",
  working:
    "border-[color:var(--color-border-subtle)] bg-transparent text-[color:var(--color-text-tertiary)]",
  exploring:
    "border-dashed border-[color:var(--color-border-subtle)] bg-transparent text-[color:var(--color-text-tertiary)]",
};

/** Tech stack showcase with visual proficiency hierarchy */
export function SkillsOverview() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="skills-overview" id="skills">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="03"
            eyebrow="Technical Skills"
            heading="Tech Stack"
            description="Technologies I use in production, grouped by domain."
            id="skills-overview"
          />
        </RevealOnScroll>

        {/* Tier legend */}
        <RevealOnScroll className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-text-tertiary)]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent-default)]" />
              Primary
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-surface-hover)]" />
              Professional
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-[color:var(--color-border-subtle)]" />
              Working Knowledge
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-dashed border-[color:var(--color-border-subtle)]" />
              Exploring
            </div>
          </div>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TECH_STACK.map((group) => (
            <motion.div key={group.category} variants={fadeUpVariants}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs transition-colors ${TIER_STYLES[item.tier]}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
