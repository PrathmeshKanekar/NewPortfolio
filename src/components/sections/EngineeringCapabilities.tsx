"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import { Code2, Server, Database, Shield, Cloud, Layers } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Full Stack Development",
    tech: "Angular + ASP.NET Core",
    desc: "End-to-end development of robust enterprise applications with modern component-based frontends and strongly-typed backends.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    tech: "REST APIs + C#",
    desc: "Designing and implementing scalable, secure, and well-documented RESTful APIs supporting complex business logic.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    tech: "SQL Server + PostgreSQL",
    desc: "Relational database design, query optimization, indexing strategies, and reliable data migrations using Entity Framework and Dapper.",
  },
  {
    icon: Shield,
    title: "Enterprise Software",
    tech: "Banking apps + Business workflows",
    desc: "Building mission-critical software handling complex authorization rules, financial transactions, and compliance requirements.",
  },
  {
    icon: Cloud,
    title: "DevOps & Infrastructure",
    tech: "Docker + Azure",
    desc: "Containerizing applications for consistent deployment and leveraging cloud infrastructure for scalable hosting.",
  },
  {
    icon: Layers,
    title: "Product Engineering",
    tech: "SaaS + Scalable applications",
    desc: "Translating business requirements into technical architecture that scales with user growth and feature complexity.",
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
            eyebrow="$ build"
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
              className="flex flex-col rounded-[var(--radius-sm)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] shadow-sm p-8 transition-all duration-250 ease-[var(--ease-reveal)] hover:-translate-y-1 hover:shadow-md hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)] mb-6">
                <cap.icon className="h-6 w-6 text-[color:var(--color-text-secondary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--color-text-primary)] mb-2">
                {cap.title}
              </h3>
              <span className="font-mono text-xs text-[color:var(--color-accent-default)] mb-4 block">
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
