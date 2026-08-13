import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experience";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const dateDisplay =
    experience.startDate === "Unknown" || experience.startDate === "Current"
      ? "Present"
      : `${experience.startDate} — ${experience.endDate}`;

  return (
    <div
      className={cn(
        "relative pl-8 pb-10 border-l-2 border-[color:var(--color-border-default)] last:pb-0 group",
        className
      )}
    >
      {/* Timeline indicator node */}
      <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] ring-4 ring-[color:var(--color-surface-base)] transition-transform duration-200 group-hover:scale-125" />

      <div className="rounded-2xl border border-[color:var(--color-border-default)] bg-[color:var(--color-surface-raised)] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[color:var(--color-border-strong)]">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-[color:var(--color-text-primary)] flex items-center gap-2">
              {experience.role}
            </h3>
            <p className="text-sm font-medium bg-gradient-to-r from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] bg-clip-text text-transparent mt-0.5 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[color:var(--color-accent-default)]" />
              {experience.company}
            </p>
          </div>
          <span className="font-mono text-xs font-medium text-[color:var(--color-text-secondary)] bg-[color:var(--color-surface-sunken)] px-3 py-1 rounded-full self-start sm:self-auto mt-2 sm:mt-0">
            {dateDisplay}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {experience.highlights.map((h, i) => (
            <li
              key={i}
              className="text-sm text-[color:var(--color-text-secondary)] flex items-start gap-2.5 leading-relaxed"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] shrink-0 mt-2" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[color:var(--color-border-subtle)]">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg bg-[color:var(--color-surface-sunken)] border border-[color:var(--color-border-subtle)] px-2.5 py-1 font-mono text-[11px] font-medium text-[color:var(--color-text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
