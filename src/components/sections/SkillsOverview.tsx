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
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiRedis,
} from "react-icons/si";
import { Code2, Server, Database, Cloud, Cpu, ShieldCheck, Terminal, CpuIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  Icon: IconType | any;
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
      { name: "Angular 17", Icon: SiAngular },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "HTML5/CSS3", Icon: SiCss },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "GSAP", Icon: Code2 },
    ],
  },
  {
    title: "Backend Development",
    description: "Designing RESTful Web APIs, business logic, and security protocols.",
    icon: Server,
    skills: [
      { name: "ASP.NET Core Web API", Icon: SiDotnet },
      { name: "C#", Icon: SiDotnet },
      { name: "REST APIs", Icon: Server },
      { name: "Dapper", Icon: Database },
      { name: "JWT Authentication", Icon: ShieldCheck },
      { name: "API Security", Icon: ShieldCheck },
    ],
  },
  {
    title: "Database Engineering",
    description: "Relational data modeling, indexing, and query optimization.",
    icon: Database,
    skills: [
      { name: "SQL Server", Icon: Database },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "PostGIS", Icon: Database },
      { name: "SQL Optimization", Icon: Terminal },
      { name: "Stored Procedures", Icon: Terminal },
      { name: "Transactions", Icon: ShieldCheck },
      { name: "Database Design", Icon: Database },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Containerization, web server hosting, and performance validation.",
    skills: [
      { name: "Docker", Icon: SiDocker },
      { name: "Azure", Icon: Cloud },
      { name: "IIS", Icon: Server },
      { name: "Git/GitHub", Icon: SiGithub },
      { name: "CI/CD concepts", Icon: Cloud },
      { name: "Load/Performance Testing", Icon: Terminal },
      { name: "k6", Icon: Terminal },
    ],
  },
  {
    title: "Other & Architecture",
    icon: Cpu,
    description: "Cross-platform mobile, caching, and modern architectural concepts.",
    skills: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Redis", Icon: SiRedis },
      { name: "Microservices concepts", Icon: Server },
      { name: "System Design", Icon: Cpu },
    ],
  },
];

export function SkillsOverview() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-slate-900/50" id="skills">
      <Container className="max-w-6xl">
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
              <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 shadow-soft h-full flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
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
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 shadow-sm hover:border-indigo-500/30 transition-all duration-200"
                      >
                        <skill.Icon className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
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
