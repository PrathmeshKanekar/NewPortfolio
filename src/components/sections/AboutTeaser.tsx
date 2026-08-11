"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";
import { Code2, Server, Cloud } from "lucide-react";

/** About teaser on the Home page (Section 15) */
export function AboutTeaser() {
  return (
    <section
      className="py-24 md:py-32 bg-[color:var(--color-surface-sunken)]"
      aria-labelledby="about-teaser"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="About Me"
            heading="Engineer. Architect. Builder."
            id="about-teaser"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              I&apos;m a product-focused software architect who thrives at the
              intersection of system design and user experience. With 5+ years
              shipping enterprise banking, healthcare, and commerce software,
              I build systems that are as elegant internally as they are
              externally.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              My stack spans Angular, TypeScript, ASP.NET Core, C#, SQL Server,
              PostgreSQL, Docker, and Azure — but the technology is always in
              service of the product, never the other way around.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: "Full Stack",
                  desc: "Angular + .NET end-to-end engineering",
                },
                {
                  icon: Server,
                  title: "System Design",
                  desc: "Microservices, event-driven, multi-tenant",
                },
                {
                  icon: Cloud,
                  title: "Cloud Native",
                  desc: "Docker, Azure, CI/CD, IaC",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-5"
                >
                  <item.icon className="h-5 w-5 text-[color:var(--color-accent-default)]" />
                  <h3 className="mt-3 text-sm font-semibold text-[color:var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[color:var(--color-text-secondary)]">
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
