"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Briefcase, Building2, Code2, Server, Database, Cloud } from "lucide-react";
import { SiAngular, SiDotnet, SiDocker } from "react-icons/si";

const SNAPSHOT_ITEMS = [
  {
    label: "CURRENT ROLE",
    value: "Full Stack Software Engineer",
    icon: Briefcase,
    brandColor: "#6366F1",
  },
  {
    label: "DOMAIN",
    value: "Enterprise Core Banking Software",
    icon: Building2,
    brandColor: "#10B981",
  },
  {
    label: "FRONTEND",
    value: "Angular 17 + TypeScript",
    icon: SiAngular,
    brandColor: "#DD0031",
  },
  {
    label: "BACKEND",
    value: "ASP.NET Core Web API + C#",
    icon: SiDotnet,
    brandColor: "#512BD4",
  },
  {
    label: "DATABASE",
    value: "SQL Server + PostgreSQL",
    icon: Database,
    brandColor: "#CC292B",
  },
  {
    label: "INFRASTRUCTURE",
    value: "Docker + Azure + IIS",
    icon: SiDocker,
    brandColor: "#2496ED",
  },
];

export function ProfessionalSnapshot() {
  return (
    <section
      className="py-16 md:py-24 border-y border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]/60 backdrop-blur-md"
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
          <div className="relative rounded-3xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)]/50 backdrop-blur-xl p-6 sm:p-8 shadow-xl overflow-hidden">
            {/* Background Glow Accent */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[color:var(--color-accent-default)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {SNAPSHOT_ITEMS.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-[color:var(--color-surface-hover)]/60"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] shadow-inner transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.brandColor }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[color:var(--color-text-tertiary)] uppercase flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.brandColor }} />
                      {item.label}
                    </span>
                    <p className="text-base font-semibold text-[color:var(--color-text-primary)] leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
