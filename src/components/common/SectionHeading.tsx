import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
  id?: string;
  align?: "left" | "center";
  number?: string;
}

/** Consistent section heading with eyebrow + heading + optional description */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  id,
  align = "left",
  number,
}: SectionHeadingProps) {
  const headingId = id ?? heading.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "flex flex-col items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          {align === "left" && <div className="h-px w-8 bg-[color:var(--color-border-strong)]" />}
          <p className="text-eyebrow font-mono tracking-widest text-[color:var(--color-text-tertiary)] uppercase">
            {number ? `${number} / ` : ""}{eyebrow}
          </p>
          {align === "center" && <div className="h-px w-8 bg-[color:var(--color-border-strong)]" />}
        </div>
      )}
      <h2
        id={headingId}
        className="text-heading-1 font-bold text-[color:var(--color-text-primary)]"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
