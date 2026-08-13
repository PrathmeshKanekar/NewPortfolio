import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  featured = false,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description: string;
  href?: string;
  cta?: string;
  featured?: boolean;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
      // light styles
      "bg-white border border-slate-200/80 shadow-sm",
      // dark styles
      "dark:bg-slate-900/60 dark:border-white/10 dark:backdrop-blur-md",
      "hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md transition-all duration-300",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-1">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-2">
          <Icon className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
        </div>
      )}
      <h3 className="text-xl font-bold font-space tracking-tight text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>

    {cta && href && (
      <div className="pointer-events-none z-10 flex flex-row items-center p-6 pt-0 opacity-80 group-hover:opacity-100 transition-opacity">
        <a
          href={href}
          className="pointer-events-auto inline-flex items-center gap-1 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          {cta}
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    )}

    {featured && (
      <BorderBeam size={200} duration={8} delay={0} colorFrom="#6366f1" colorTo="#a855f7" />
    )}
  </div>
);

export { BentoCard, BentoGrid };
