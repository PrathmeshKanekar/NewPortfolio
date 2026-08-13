"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { fadeUpVariants } from "@/lib/animation-variants";
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
import { Code2, Server, Database, Cloud, Cpu, ShieldCheck, Terminal } from "lucide-react";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  Icon: IconType | any;
  brandColor?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: any;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, component-driven client web applications.",
    icon: Code2,
    skills: [
      { name: "Angular 17", Icon: SiAngular, brandColor: "#DD0031" },
      { name: "TypeScript", Icon: SiTypescript, brandColor: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, brandColor: "#F7DF1E" },
      { name: "HTML5", Icon: SiHtml5, brandColor: "#E34F26" },
      { name: "CSS3", Icon: SiCss, brandColor: "#1572B6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, brandColor: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, brandColor: "#7952B3" },
      { name: "GSAP", Icon: SiGreensock, brandColor: "#88CE02" },
    ],
  },
  {
    title: "Backend Development",
    description: "Designing RESTful Web APIs, business logic, and security protocols.",
    icon: Server,
    skills: [
      { name: "ASP.NET Core Web API", Icon: SiDotnet, brandColor: "#512BD4" },
      { name: "C#", Icon: SiDotnet, brandColor: "#512BD4" },
      { name: "REST APIs", Icon: Server, brandColor: "#6366F1" },
      { name: "Dapper", Icon: Database, brandColor: "#CC292B" },
      { name: "JWT Authentication", Icon: ShieldCheck, brandColor: "#00B4D8" },
      { name: "API Security", Icon: ShieldCheck, brandColor: "#10B981" },
    ],
  },
  {
    title: "Database Engineering",
    description: "Relational data modeling, indexing, and query optimization.",
    icon: Database,
    skills: [
      { name: "SQL Server", Icon: Database, brandColor: "#CC292B" },
      { name: "PostgreSQL", Icon: SiPostgresql, brandColor: "#4169E1" },
      { name: "PostGIS", Icon: SiPostgresql, brandColor: "#336791" },
      { name: "SQL Optimization", Icon: Terminal, brandColor: "#F59E0B" },
      { name: "Stored Procedures", Icon: Terminal, brandColor: "#EC4899" },
      { name: "Transactions", Icon: ShieldCheck, brandColor: "#10B981" },
      { name: "Database Design", Icon: Database, brandColor: "#6366F1" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Containerization, web server hosting, and performance validation.",
    skills: [
      { name: "Docker", Icon: SiDocker, brandColor: "#2496ED" },
      { name: "Azure", Icon: Cloud, brandColor: "#0089D6" },
      { name: "IIS", Icon: Server, brandColor: "#0089D6" },
      { name: "Git/GitHub", Icon: SiGithub, brandColor: "#181717" },
      { name: "CI/CD concepts", Icon: Cloud, brandColor: "#6366F1" },
      { name: "Load/Performance Testing", Icon: Terminal, brandColor: "#8B5CF6" },
      { name: "k6", Icon: SiK6, brandColor: "#7D64FF" },
    ],
  },
  {
    title: "Other & Architecture",
    icon: Cpu,
    description: "Cross-platform mobile, caching, and modern architectural concepts.",
    skills: [
      { name: "Flutter", Icon: SiFlutter, brandColor: "#02569B" },
      { name: "Node.js", Icon: SiNodedotjs, brandColor: "#5FA04E" },
      { name: "Next.js", Icon: SiNextdotjs, brandColor: "#000000" },
      { name: "Redis", Icon: SiRedis, brandColor: "#DC382D" },
      { name: "Microservices concepts", Icon: Server, brandColor: "#6366F1" },
      { name: "System Design", Icon: Cpu, brandColor: "#8B5CF6" },
    ],
  },
];

export function SkillsOverview() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-slate-900/50" id="skills">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="03"
            eyebrow="Capabilities"
            heading="Technical Arsenal"
            description="Verified technical skills across full stack development, enterprise banking domain, databases, and DevOps."
            id="skills"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <RevealOnScroll key={group.title} delay={0.05 + groupIndex * 0.08}>
              <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 shadow-sm h-full flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                      <group.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        custom={i}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-800/60 shadow-sm hover:border-indigo-500/30 transition-all duration-200"
                      >
                        <skill.Icon
                          className="w-3.5 h-3.5 group-hover:scale-110 transition-transform dark:text-slate-200"
                          style={{ color: skill.brandColor }}
                        />
                        <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
