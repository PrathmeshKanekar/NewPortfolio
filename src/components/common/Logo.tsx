import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

/** SVG logo mark with site name */
export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-2)] bg-[color:var(--color-accent-default)] transition-transform duration-150 group-hover:scale-105">
        <span className="font-mono text-sm font-bold text-[color:var(--color-accent-on-accent)]">
          {SITE_CONFIG.name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-semibold text-[color:var(--color-text-primary)] hidden sm:inline-block">
        {SITE_CONFIG.name}
      </span>
    </a>
  );
}
