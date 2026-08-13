"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { fadeUpVariants } from "@/lib/animation-variants";
import {
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { Code2, Server, Database, Cloud } from "lucide-react";
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon: IconType;
  tier: "primary" | "professional" | "working" | "exploring";
}

const TECH_STACK: { category: string; icon: any; items: TechItem[] }[] = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    items: [
      { name: "C#", Icon: TbBrandCSharp, tier: "primary" },
      { name: "TypeScript", Icon: SiTypescript, tier: "primary" },
      { name: "JavaScript", Icon: SiJavascript, tier: "professional" },
      { name: "Python", Icon: SiPython, tier: "working" },
      { name: "C++", Icon: SiCplusplus, tier: "exploring" },
      { name: "C", Icon: SiC, tier: "exploring" },
    ], 
  },
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "Angular", Icon: SiAngular, tier: "primary" },
      { name: "React", Icon: SiReact, tier: "professional" },
      { name: "HTML5", Icon: SiHtml5, tier: "professional" },
      { name: "CSS3", Icon: SiCss, tier: "professional" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, tier: "professional" },
      { name: "Bootstrap", Icon: SiBootstrap, tier: "professional" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "ASP.NET Core", Icon: SiDotnet, tier: "primary" },
      { name: "Django", Icon: SiDjango, tier: "working" },
      { name: "REST APIs", Icon: Server, tier: "primary" },
      { name: "Entity Framework", Icon: SiDotnet, tier: "professional" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "SQL Server", Icon: Database, tier: "primary" },
      { name: "PostgreSQL", Icon: SiPostgresql, tier: "primary" },
      { name: "MySQL", Icon: SiMysql, tier: "professional" },
      { name: "SQLite", Icon: SiSqlite, tier: "working" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "Docker", Icon: SiDocker, tier: "primary" },
      { name: "Azure", Icon: VscAzure, tier: "primary" },
      { name: "Git", Icon: SiGit, tier: "professional" },
      { name: "GitHub", Icon: SiGithub, tier: "professional" },
    ],
  },
];

const TIER_INDICATORS: Record<TechItem["tier"], { label: string; colorClass: string }> = {
  primary: { label: "Primary", colorClass: "bg-emerald-500" },
  professional: { label: "Professional", colorClass: "bg-blue-500" },
  working: { label: "Working", colorClass: "bg-amber-500" },
  exploring: { label: "Exploring", colorClass: "bg-slate-400" },
};

export function SkillsOverview() {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-slate-900/50" id="skills">
      <Container className="max-w-6xl">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-space text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Arsenal
            </h2>
            <div className="h-px bg-slate-200 dark:bg-white/10 flex-1 mt-2" />
          </div>
        </RevealOnScroll>

        {/* Legend */}
        <RevealOnScroll delay={0.1} className="mb-10 flex flex-wrap gap-4">
          {Object.entries(TIER_INDICATORS).map(([key, { label, colorClass }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${colorClass}`} />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 font-mono uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK.map((group, groupIndex) => (
            <RevealOnScroll key={group.category} delay={0.1 + groupIndex * 0.1}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-soft h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-space text-xl font-bold text-slate-800 dark:text-slate-200">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, i) => {
                    const indicator = TIER_INDICATORS[item.tier];
                    return (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 shadow-soft hover:shadow-hover hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 cursor-default"
                      >
                        <item.Icon className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${indicator.colorClass} ml-1`} title={indicator.label} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
