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
              className="group flex flex-col rounded-2xl border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[color:var(--color-border-strong)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-surface-sunken)] mb-6 transition-transform group-hover:scale-105"
                style={{ color: cap.accentColor }}
              >
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[color:var(--color-text-primary)] mb-1.5">
                {cap.title}
              </h3>
              <span className="font-mono text-xs font-semibold bg-gradient-to-r from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] bg-clip-text text-transparent mb-4 block">
                {cap.tech}
              </span>
              <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed mt-auto">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
