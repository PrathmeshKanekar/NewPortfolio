import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

/** Timeline-style experience card (Section 9) */
export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "relative pl-8 pb-10 border-l-2 border-[color:var(--color-border-subtle)] last:pb-0",
        className
      )}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1 h-2 w-2 rounded-full bg-[color:var(--color-accent-default)]" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-[color:var(--color-text-primary)]">
            {experience.role}
          </h3>
          <p className="text-sm text-[color:var(--color-accent-default)]">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </p>
        </div>
        <span className="font-mono text-xs text-[color:var(--color-text-tertiary)]">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>

      <ul className="mt-3 space-y-1.5">
        {experience.highlights.map((h, i) => (
          <li
            key={i}
            className="text-sm text-[color:var(--color-text-secondary)] before:content-['→'] before:mr-2 before:text-[color:var(--color-accent-default)]"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {experience.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-[var(--radius-full)] bg-[color:var(--color-surface-sunken)] px-2 py-0.5 font-mono text-xs text-[color:var(--color-text-secondary)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
