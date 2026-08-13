"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import { Code2, Server, Database, ShieldCheck, Cloud, Cpu } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Full Stack Development",
    tech: "Angular + ASP.NET Core",
    desc: "End-to-end development of robust enterprise applications with modern component-based frontends and strongly-typed backends.",
    accentColor: "#DD0031",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    tech: "REST APIs + C#",
    desc: "Designing and implementing scalable, secure, and well-documented RESTful APIs supporting complex business logic.",
    accentColor: "#512BD4",
  },
  {
    icon: Database,
    title: "Database Engineering",
    tech: "SQL Server + PostgreSQL",
    desc: "Relational database design, query optimization, indexing strategies, and reliable data migrations using Entity Framework and Dapper.",
    accentColor: "#CC292B",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Software",
    tech: "Banking apps + Business workflows",
    desc: "Building mission-critical software handling complex authorization rules, financial transactions, and compliance requirements.",
    accentColor: "#10B981",
  },
  {
    icon: Cloud,
    title: "DevOps & Infrastructure",
    tech: "Docker + Azure + IIS",
    desc: "Containerizing applications for consistent deployment and leveraging cloud infrastructure and web servers for scalable hosting.",
    accentColor: "#2496ED",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    tech: "SaaS + Scalable applications",
    desc: "Translating business requirements into technical architecture that scales with user growth and feature complexity.",
    accentColor: "#8B5CF6",
  },
];

/** Large capability cards section */
export function EngineeringCapabilities() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="capabilities-heading">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="06"
            eyebrow="Architecture"
            heading="Engineering Capabilities"
            id="capabilities-heading"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.title}
              variants={fadeUpVariants}
              className="group flex flex-col rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-white/20"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 shadow-inner transition-transform group-hover:scale-105"
                style={{ color: cap.accentColor }}
              >
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                {cap.title}
              </h3>
              <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 block">
                {cap.tech}
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
