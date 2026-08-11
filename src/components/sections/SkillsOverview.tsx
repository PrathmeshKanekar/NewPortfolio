"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillGroupCard } from "@/components/cards/SkillBadge";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import { resumeData } from "@/content/resume/resume-data";

const skillGroups = [
  { category: "Languages", skills: resumeData.skills.languages },
  { category: "Frameworks", skills: resumeData.skills.frameworks },
  { category: "Cloud & DevOps", skills: resumeData.skills.cloudDevOps },
  { category: "Databases", skills: resumeData.skills.databases },
  { category: "AI & Tooling", skills: resumeData.skills.aiTooling },
];

/** Skills overview grid on the Home page (Section 15) */
export function SkillsOverview() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="skills-overview">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Technical Skills"
            heading="Tools I Work With"
            description="Grouped by domain, with proficiency indicators reflecting real production experience."
            id="skills-overview"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={fadeUpVariants}>
              <SkillGroupCard group={group} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
