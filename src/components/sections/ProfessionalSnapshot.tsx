"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const SNAPSHOT_DATA = [
  { label: "CURRENT ROLE", value: "Software Engineer" },
  { label: "DOMAIN", value: "Enterprise Banking Software" },
  { label: "FRONTEND", value: "Angular + TypeScript" },
  { label: "BACKEND", value: "ASP.NET Core + C#" },
  { label: "DATABASE", value: "SQL Server + PostgreSQL" },
  { label: "INFRASTRUCTURE", value: "Docker + Azure" },
];

/** Professional snapshot replacing fake statistics with verified signals */
export function ProfessionalSnapshot() {
  return (
    <section
      className="py-16 md:py-24 border-y border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]"
      aria-labelledby="professional-snapshot"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="02"
            eyebrow="Professional Snapshot"
            heading="Current Profile"
            id="professional-snapshot"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {SNAPSHOT_DATA.map((item) => (
              <div
                key={item.label}
                className="rounded-[var(--radius-sm)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-base)] shadow-sm p-5 transition-all duration-250 ease-[var(--ease-reveal)] hover:-translate-y-0.5 hover:shadow-md hover:border-[color:var(--color-border-default)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-text-tertiary)] mb-2">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-[color:var(--color-text-primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
