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
      <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] ring-4 ring-[color:var(--color-surface-default)]" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="font-semibold text-[color:var(--color-text-primary)]">
            {experience.role}
          </h3>
          <p className="text-sm font-medium text-[color:var(--color-text-secondary)]">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--color-text-primary)]"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-text-tertiary)] bg-[color:var(--color-surface-hover)] px-2 py-0.5 rounded-full self-start sm:self-auto mt-2 sm:mt-0">
          {experience.startDate === "Unknown" || experience.startDate === "Current" 
            ? "Current" 
            : `${experience.startDate} — ${experience.endDate}`}
        </span>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.highlights.map((h, i) => (
          <li
            key={i}
            className="text-sm text-[color:var(--color-text-secondary)] flex items-start gap-2"
          >
            <span className="text-[color:var(--color-text-tertiary)] mt-0.5">-</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-[color:var(--color-surface-hover)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
