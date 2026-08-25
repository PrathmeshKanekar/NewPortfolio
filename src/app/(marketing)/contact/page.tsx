import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SITE_CONFIG, RESUME_FILENAME } from "@/lib/constants";
import { Mail, MapPin, Download, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";
import { ContactEmailButton } from "@/components/cards/ContactEmailButton";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.name}.`,
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="contact-heading">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Contact"
            heading="Let's build something useful."
            description="Whether it's a new project, an open role, or a conversation about system design — I'd love to hear from you."
            id="contact-heading"
            align="center"
          />

          {/* Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <ContactEmailButton />

            <a
              href="https://github.com/prathmeshkanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-5 transition-all duration-200 hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)]">
                <Github className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
              </div>
              <div>
                <p className="text-xs text-[color:var(--color-text-tertiary)] mb-0.5">GitHub</p>
                <p className="text-sm font-medium text-[color:var(--color-text-primary)]">prathmeshkanekar</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/prathmesh-kanekar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-5 transition-all duration-200 hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)]">
                <Linkedin className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
              </div>
              <div>
                <p className="text-xs text-[color:var(--color-text-tertiary)] mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-[color:var(--color-text-primary)]">prathmesh-kanekar</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)]">
                <MapPin className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
              </div>
              <div>
                <p className="text-xs text-[color:var(--color-text-tertiary)] mb-0.5">Location</p>
                <p className="text-sm font-medium text-[color:var(--color-text-primary)]">{SITE_CONFIG.location}</p>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`/resume/${RESUME_FILENAME}`}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[color:var(--color-text-primary)] px-6 text-sm font-medium text-[color:var(--color-surface-sunken)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[color:var(--color-border-subtle)] px-6 text-sm font-medium text-[color:var(--color-text-primary)] transition-colors hover:bg-[color:var(--color-surface-hover)]"
            >
              Send Email
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
