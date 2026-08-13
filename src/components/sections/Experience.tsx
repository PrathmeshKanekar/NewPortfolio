"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { resumeData } from "@/content/resume/resume-data";

/** Professional experience section for the homepage */
export function Experience() {
  return (
    <section
      className="py-24 md:py-32 bg-[color:var(--color-surface-sunken)] border-y border-[color:var(--color-border-subtle)]"
      aria-labelledby="experience-heading"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="05"
            eyebrow="Career Timeline"
            heading="Experience"
            id="experience-heading"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="w-full">
            {resumeData.experience.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
