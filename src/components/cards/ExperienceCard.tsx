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
        "relative pl-8 pb-10 border-l-2 border-slate-200 dark:border-white/10 last:pb-0 group",
        className
      )}
    >
      {/* Timeline indicator node */}
      <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border border-indigo-500 bg-indigo-500 ring-4 ring-slate-50 dark:ring-slate-950 transition-transform duration-200 group-hover:scale-125" />

      <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-white/20">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {experience.role}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              {experience.company}
            </p>
          </div>
          <span className="font-mono text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full self-start sm:self-auto mt-2 sm:mt-0 shadow-inner">
            {dateDisplay}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {experience.highlights.map((h, i) => (
            <li
              key={i}
              className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2.5 leading-relaxed"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-white/10 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
