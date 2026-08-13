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
        <div className={cn("mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
          {number && (
            <span className="font-mono text-[13px] font-bold tracking-widest bg-gradient-to-br from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] bg-clip-text text-transparent">
              {number}
            </span>
          )}
          {number && <span className="h-px w-6 bg-gradient-to-r from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] opacity-60" />}
          <p className="font-sans text-[12px] font-semibold tracking-[0.15em] text-[color:var(--color-text-tertiary)] uppercase">
            {eyebrow}
          </p>
        </div>
      )}
      <div className={cn("flex flex-col gap-3", align === "center" && "items-center")}>
        <h2
          id={headingId}
          className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[color:var(--color-text-primary)]"
        >
          {heading}
        </h2>
        <div className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[color:var(--color-gradient-start)] to-[color:var(--color-gradient-end)] opacity-80" />
      </div>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
