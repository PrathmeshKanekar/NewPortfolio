"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/** Personal about section on the Home page */
export function AboutMe() {
  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="about-me"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <RevealOnScroll className="lg:col-span-5">
            <SectionHeading
              number="08"
              eyebrow="Personal"
              heading="About Me"
              id="about-me"
              className="mb-0"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-base sm:text-lg text-[color:var(--color-text-secondary)] leading-relaxed">
              <p>
                I am a Full Stack Software Engineer driven by the challenge of building complex, reliable systems. I specialize in enterprise banking software, where data integrity, security, and performance are non-negotiable.
              </p>
              <p>
                The problems I enjoy solving most aren&apos;t just about writing code—they are about architecture. I love designing normalized SQL schemas, optimizing slow REST APIs, and structuring Angular applications to handle massive state cleanly.
              </p>
              <p>
                Enterprise software interests me because of its scale and impact. Building an account management workflow or an authorization engine means writing software that real businesses depend on every single day.
              </p>
              <p>
                Currently, I&apos;m deepening my expertise in cloud-native deployments with Azure and Docker, and exploring AI-augmented development workflows. My long-term goal is to continue building SaaS products and enterprise platforms that are internally elegant and externally effortless.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
