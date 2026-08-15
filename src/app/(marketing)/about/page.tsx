import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { resumeData } from "@/content/resume/resume-data";
import { SITE_CONFIG, RESUME_FILENAME, ISR_REVALIDATE_SECONDS } from "@/lib/constants";
import { Download } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_CONFIG.name} — a Full Stack Software Engineer focused on building secure, scalable enterprise applications.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Bio */}
      <section className="py-24 md:py-32" aria-labelledby="about-heading">
        <Container>
          <SectionHeading
            eyebrow="About Me"
            heading="The Story So Far"
            id="about-heading"
          />
          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              {resumeData.summary}
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
              When I&apos;m not writing code, I&apos;m reading about system design
              patterns, exploring AI-augmented development workflows, and
              mentoring junior engineers. I believe the best software is built by
              people who care deeply about both the code and the users it serves.
            </p>
          </div>
        </Container>
      </section>

      {/* Experience Timeline */}
      <section
        className="py-24 md:py-32 bg-[color:var(--color-surface-sunken)] border-y border-[color:var(--color-border-subtle)]"
        aria-labelledby="experience-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Career Timeline"
            heading="Experience"
            id="experience-heading"
          />
          <div className="max-w-2xl">
            {resumeData.experience.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-24 md:py-32" aria-labelledby="education-heading">
        <Container>
          <SectionHeading
            eyebrow="Education"
            heading="Academic Background"
            id="education-heading"
          />
          <div className="max-w-2xl space-y-8">
            {resumeData.education.map((edu) => (
              <div key={edu.institution} className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] ring-4 ring-[color:var(--color-surface-default)]" />
                <div>
                  <h3 className="font-semibold text-[color:var(--color-text-primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-[color:var(--color-text-secondary)] mt-1">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-xs text-[color:var(--color-text-tertiary)] mt-1">
                    {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Resume CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-[color:var(--color-text-secondary)]">
              Want the full details?
            </p>
            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[color:var(--color-text-primary)] px-6 text-sm font-medium text-[color:var(--color-surface-sunken)] transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
