"use client";

import React, { useRef } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Code2, Server, Database, Cloud, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { SiAngular, SiDotnet, SiPostgresql, SiDocker } from "react-icons/si";

function SystemArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[280px] w-full items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/60 p-6 backdrop-blur-md"
    >
      <div className="flex flex-col items-center gap-2 z-10" ref={clientRef}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 shadow-sm">
          <SiAngular className="h-6 w-6 text-red-500" />
        </div>
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">Angular UI</span>
      </div>

      <div className="flex flex-col items-center gap-2 z-10" ref={apiRef}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-sm">
          <SiDotnet className="h-6 w-6 text-purple-500" />
        </div>
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">ASP.NET API</span>
      </div>

      <div className="flex flex-col items-center gap-2 z-10" ref={serviceRef}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-sm">
          <Server className="h-6 w-6 text-indigo-500" />
        </div>
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">Services</span>
      </div>

      <div className="flex flex-col items-center gap-2 z-10" ref={dbRef}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-sm">
          <SiPostgresql className="h-6 w-6 text-blue-500" />
        </div>
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">PostgreSQL</span>
      </div>

      <div className="flex flex-col items-center gap-2 z-10" ref={cloudRef}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 shadow-sm">
          <SiDocker className="h-6 w-6 text-sky-500" />
        </div>
        <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">Docker/Azure</span>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={clientRef} toRef={apiRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={apiRef} toRef={serviceRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={serviceRef} toRef={dbRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={cloudRef} />
    </div>
  );
}

/** Premium About section with Bento Grid, Philosophy Pull-Quote, & System Architecture Diagram */
export function AboutMe() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="about-me">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="08"
            eyebrow="Personal"
            heading="About & Engineering Mindset"
            description="How I architect systems, solve enterprise data challenges, and build reliable software."
            id="about-me"
          />
        </RevealOnScroll>

        {/* Pull Quote */}
        <RevealOnScroll delay={0.1} className="mb-16">
          <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400 pl-6 py-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-r-2xl border-y border-r border-slate-200/50 dark:border-white/5">
            <blockquote className="font-space text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
              &ldquo;The problems I enjoy solving most aren&apos;t just about writing code—they are about system architecture, data integrity, and building software real enterprise businesses rely on every single day.&rdquo;
            </blockquote>
            <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-3 block">
              — Prathmesh Kanekar, Full Stack Software Engineer
            </span>
          </div>
        </RevealOnScroll>

        {/* Architecture Diagram */}
        <RevealOnScroll delay={0.2} className="mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-500" />
              <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white">
                Typical System Architecture I Design
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              End-to-end telemetry: From typed Angular clients down to optimized SQL procedures and containerized cloud orchestration.
            </p>
            <SystemArchitectureDiagram />
          </div>
        </RevealOnScroll>

        {/* Bento Grid Highlights */}
        <RevealOnScroll delay={0.3}>
          <BentoGrid className="auto-rows-[16rem]">
            <BentoCard
              name="Full Stack Engineering"
              description="Building responsive Angular UIs backed by high-throughput C# .NET APIs and RESTful microservices."
              Icon={Code2}
              featured
            />
            <BentoCard
              name="Enterprise Security"
              description="Implementing strict role-based access controls, encrypted audit logs, and secure financial workflow engines."
              Icon={ShieldCheck}
            />
            <BentoCard
              name="Cloud & Containerization"
              description="Deploying isolated workloads using Docker containers and Azure cloud infrastructure with CI/CD integration."
              Icon={Cloud}
            />
          </BentoGrid>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
