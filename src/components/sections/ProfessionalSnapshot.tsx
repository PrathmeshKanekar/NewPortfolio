"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KokonutGlowCard } from "@/components/ui/kokonut-glow-card";
import { Briefcase, Building2, Database } from "lucide-react";
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
      className="py-8 md:py-12"
      aria-labelledby="snapshot"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="About"
            heading="Professional Summary"
            id="snapshot"
          />
          <p className="text-base sm:text-lg text-[color:var(--color-text-secondary)] leading-relaxed mb-8 max-w-3xl">
            Software Engineer with hands-on expertise in building production enterprise banking systems, high-availability Web APIs, and responsive design architectures. Proven record of delivering resilient financial software with a strict focus on code quality, security, and performance.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SNAPSHOT_ITEMS.map((item) => (
              <KokonutGlowCard
                key={item.label}
                glowColor={item.brandColor}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] transition-all duration-200 hover:border-[color:var(--color-border-strong)] hover:shadow-sm"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] shadow-xs transition-transform duration-300 group-hover:scale-105"
                  style={{ color: item.brandColor }}
                >
                  <item.icon className="h-5 w-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[color:var(--color-text-tertiary)] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: item.brandColor }} />
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[color:var(--color-text-primary)] leading-snug">
                    {item.value}
                  </p>
                </div>
              </KokonutGlowCard>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
