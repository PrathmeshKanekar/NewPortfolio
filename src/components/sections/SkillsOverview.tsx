"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiRedis,
  SiK6,
} from "react-icons/si";
import { Server, Database, Cloud, ShieldCheck, Terminal, Code2, Cpu } from "lucide-react";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  Icon: IconType | any;
  brandColor: string;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Tech Stack & Languages",
    skills: [
      { name: "Angular 17", Icon: SiAngular, brandColor: "#DD0031" },
      { name: "TypeScript", Icon: SiTypescript, brandColor: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, brandColor: "#F7DF1E" },
      { name: "ASP.NET Core", Icon: SiDotnet, brandColor: "#512BD4" },
      { name: "C#", Icon: SiDotnet, brandColor: "#512BD4" },
      { name: "Node.js", Icon: SiNodedotjs, brandColor: "#5FA04E" },
      { name: "Next.js", Icon: SiNextdotjs, brandColor: "#000000" },
      { name: "HTML5", Icon: SiHtml5, brandColor: "#E34F26" },
      { name: "CSS3", Icon: SiCss, brandColor: "#1572B6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, brandColor: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, brandColor: "#7952B3" },
      { name: "Flutter", Icon: SiFlutter, brandColor: "#02569B" },
    ],
  },
  {
    category: "Databases & Backend Infrastructure",
    skills: [
      { name: "SQL Server", Icon: Database, brandColor: "#CC292B" },
      { name: "PostgreSQL", Icon: SiPostgresql, brandColor: "#4169E1" },
      { name: "PostGIS", Icon: SiPostgresql, brandColor: "#336791" },
      { name: "Redis", Icon: SiRedis, brandColor: "#DC382D" },
      { name: "REST APIs", Icon: Server, brandColor: "#6366F1" },
      { name: "Dapper ORM", Icon: Database, brandColor: "#E0234E" },
      { name: "JWT Auth", Icon: ShieldCheck, brandColor: "#00B4D8" },
      { name: "SQL Stored Procs", Icon: Terminal, brandColor: "#F59E0B" },
    ],
  },
  {
    category: "DevOps, Cloud & Testing",
    skills: [
      { name: "Docker", Icon: SiDocker, brandColor: "#2496ED" },
      { name: "Azure Cloud", Icon: Cloud, brandColor: "#0089D6" },
      { name: "GitHub", Icon: SiGithub, brandColor: "#181717" },
      { name: "IIS Web Server", Icon: Server, brandColor: "#0089D6" },
      { name: "k6 Performance", Icon: SiK6, brandColor: "#7D64FF" },
      { name: "System Design", Icon: Cpu, brandColor: "#8B5CF6" },
    ],
  },
];

export function SkillsOverview() {
  return (
    <section className="py-8 md:py-12 relative" id="skills">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Technical Skills"
            heading="Skills & Expertise"
            description="Core technologies and frameworks I work with daily across full stack development, databases, and infrastructure."
            id="skills"
          />
        </RevealOnScroll>

        <div className="space-y-8 mt-6">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <RevealOnScroll key={group.category} delay={groupIdx * 0.1}>
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[color:var(--color-text-tertiary)] uppercase flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-text-primary)]" />
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-xs sm:text-sm font-medium text-[color:var(--color-text-primary)] transition-all duration-200 hover:border-[color:var(--color-border-strong)] hover:shadow-xs"
                    >
                      <skill.Icon className="h-4 w-4 shrink-0" style={{ color: skill.brandColor }} />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
