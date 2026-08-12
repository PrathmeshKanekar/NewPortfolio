import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

/** SVG logo mark with site name */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center group", className)}>
      <span className="font-mono text-sm font-medium text-[color:var(--color-text-primary)] transition-colors group-hover:text-[color:var(--color-text-secondary)]">
        &lt;PK /&gt;
      </span>
    </Link>
  );
}
