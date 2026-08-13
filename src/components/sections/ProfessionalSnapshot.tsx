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
      className="py-16 md:py-24 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-slate-950/60 backdrop-blur-md"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SNAPSHOT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-white/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-surface-sunken)] to-[color:var(--color-surface-base)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-[color:var(--color-border-subtle)] group-hover:scale-105 transition-transform"
                    style={{ color: item.brandColor }}
                  >
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {item.label}
                  </span>
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-white font-space">
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
