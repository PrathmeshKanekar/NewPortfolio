import { cn } from "@/lib/utils";

interface SkillGroup {
  category: string;
  skills: { name: string; proficiency: number }[];
}

interface SkillBadgeProps {
  name: string;
  proficiency: number;
  className?: string;
}

/** Individual skill with subtle proficiency bar indicator (Section 9) */
export function SkillBadge({ name, proficiency, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-2)] border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] px-3 py-2 text-sm",
        className
      )}
    >
      <span className="relative z-10 font-mono text-xs text-[color:var(--color-text-primary)]">
        {name}
      </span>
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[color:var(--color-accent-default)] transition-all duration-300"
        style={{ width: `${proficiency}%` }}
      />
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
          />
        ))}
      </div>
    </div>
  );
}
