import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";

interface SkillGroup {
  category: string;
  skills: { name: string; proficiency: string; level: number }[];
}

interface SkillBadgeProps {
  name: string;
  proficiency: string;
  level: number;
  className?: string;
}

export function SkillBadge({ name, proficiency, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center gap-2 overflow-hidden rounded-md border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] px-3 py-2 transition-all hover:bg-[color:var(--color-surface-raised)]",
        className
      )}
    >
      <Code2 className="h-3 w-3 text-[color:var(--color-text-tertiary)]" />
      <span className="font-mono text-xs font-medium text-[color:var(--color-text-primary)]">
        {name}
      </span>
      <span className="ml-1 text-[10px] text-[color:var(--color-text-tertiary)]">
        {proficiency}
      </span>
    </div>
  );
}

interface SkillGroupProps {
  group: SkillGroup;
  className?: string;
}

/** Grouped skills by category (Section 9) */
export function SkillGroupCard({ group, className }: SkillGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-eyebrow text-[color:var(--color-text-tertiary)]">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}
