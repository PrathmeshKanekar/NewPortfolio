import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

/** Consistent section heading with eyebrow + heading + optional description */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  id,
  align = "left",
}: SectionHeadingProps) {
  const headingId = id ?? heading.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-eyebrow mb-3 font-mono text-[color:var(--color-accent-default)]">
          {eyebrow}
        </p>
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
