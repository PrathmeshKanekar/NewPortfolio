"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Code2, Database, Cloud, Shield } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "Angular + ASP.NET Core end-to-end",
  },
  {
    icon: Database,
    title: "Database Engineering",
    desc: "SQL Server, PostgreSQL, Dapper, EF Core",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Docker, Azure, Git, CI/CD",
  },
  {
    icon: Shield,
    title: "Enterprise Software",
    desc: "Banking, auth, authorization workflows",
  },
];

/** Professional snapshot on the Home page */
export function AboutTeaser() {
  return (
    <section
      className="py-24 md:py-32 border-y border-[color:var(--color-border-subtle)]"
      aria-labelledby="about-teaser"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="02"
            eyebrow="Engineering Focus"
            heading="What I Build"
            id="about-teaser"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3">
            <p className="text-base sm:text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              I am a Full Stack Software Engineer focused on building secure, scalable enterprise applications. Currently working on banking software — building customer management, account workflows, financial transactions, and authorization systems.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              My stack spans Angular, TypeScript, ASP.NET Core, C#, SQL Server, PostgreSQL, Docker, and Azure — but the technology is always in service of the product, never the other way around.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FOCUS_AREAS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-4 transition-colors hover:bg-[color:var(--color-surface-raised)]"
                >
                  <item.icon className="h-4 w-4 text-[color:var(--color-text-tertiary)] mb-3" />
                  <h3 className="text-sm font-semibold text-[color:var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[color:var(--color-text-tertiary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
