"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants } from "@/lib/animation-variants";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
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
    <section className="py-8 md:py-12" aria-labelledby="capabilities-heading">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Core Capabilities"
            heading="Specializations"
            description="Key technical domains and architecture patterns I specialize in."
            id="capabilities-heading"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8"
        >
          <BentoGrid className="auto-rows-[16rem] md:grid-cols-3">
            {CAPABILITIES.map((cap, index) => (
              <BentoCard
                key={cap.title}
                name={cap.title}
                description={cap.desc}
                Icon={cap.icon}
                featured={index === 0 || index === 3}
                cta={cap.tech}
                href="#skills"
              />
            ))}
          </BentoGrid>
        </motion.div>
      </Container>
    </section>
  );
}
