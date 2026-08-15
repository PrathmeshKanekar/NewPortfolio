import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

/** Central container enforcing consistent horizontal padding and max-width */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-3xl px-6 sm:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
