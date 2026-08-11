import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.name} — currently ${SITE_CONFIG.availabilityStatus.toLowerCase()}.`,
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="contact-heading">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Contact"
              heading="Let's Connect"
              description={`I'm currently ${SITE_CONFIG.availabilityStatus.toLowerCase()}. Whether it's a new project, an open role, or just a conversation about system design — I'd love to hear from you.`}
              id="contact-heading"
            />

            <div className="space-y-4 mt-8">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
              >
                <Mail className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
              <a
                href="https://github.com/arjunsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
              >
                <Github className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                <span className="text-sm">github.com/arjunsharma</span>
              </a>
              <a
                href="https://linkedin.com/in/arjunsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors duration-150"
              >
                <Linkedin className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                <span className="text-sm">linkedin.com/in/arjunsharma</span>
              </a>
              <div className="flex items-center gap-3 text-[color:var(--color-text-secondary)]">
                <MapPin className="h-4 w-4 text-[color:var(--color-accent-default)]" />
                <span className="text-sm">{SITE_CONFIG.location}</span>
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[color:var(--color-status-success)] bg-[color:var(--color-status-success-subtle)] px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-[color:var(--color-status-success)] animate-pulse" />
              <span className="text-xs font-medium text-[color:var(--color-status-success)]">
                {SITE_CONFIG.availabilityStatus}
              </span>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="rounded-[var(--radius-3)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] p-8">
            <h2 className="text-heading-3 font-semibold text-[color:var(--color-text-primary)]">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[color:var(--color-text-primary)] mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full h-10 rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-base)] px-3 text-sm text-[color:var(--color-text-primary)] transition-colors duration-150 focus:border-[color:var(--color-accent-default)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-default)]/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[color:var(--color-text-primary)] mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-10 rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-base)] px-3 text-sm text-[color:var(--color-text-primary)] transition-colors duration-150 focus:border-[color:var(--color-accent-default)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-default)]/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[color:var(--color-text-primary)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-[var(--radius-2)] border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-base)] px-3 py-2.5 text-sm text-[color:var(--color-text-primary)] transition-colors duration-150 focus:border-[color:var(--color-accent-default)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-default)]/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] text-sm font-medium text-[color:var(--color-accent-on-accent)] transition-all duration-150 hover:bg-[color:var(--color-accent-hover)] active:translate-y-px"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
