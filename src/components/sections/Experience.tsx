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
      className="py-8 md:py-12"
      aria-labelledby="experience-heading"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Career History"
            heading="Work Experience"
            description="My professional journey in software engineering and enterprise core banking development."
            id="experience-heading"
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="w-full">
            {resumeData.experience.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                isLast={index === resumeData.experience.length - 1}
              />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
