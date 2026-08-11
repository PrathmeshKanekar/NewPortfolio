import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, safeExternalLink } from "@/lib/utils";

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return <a {...props} />;
  }
  return <a {...safeExternalLink(href || "")} {...props} />;
};

const CustomImage = (props: any) => {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]">
      <Image
        {...props}
        alt={props.alt || "MDX Image"}
        width={props.width || 800}
        height={props.height || 450}
        className="h-auto w-full object-cover"
      />
      {props.alt && (
        <figcaption className="p-3 text-center text-sm text-[color:var(--color-text-secondary)]">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
};

const Pre = ({ children, ...props }: any) => {
  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-[color:var(--color-border-subtle)] bg-[#0d1117]">
      <pre {...props} className="overflow-x-auto p-4 text-sm font-mono leading-relaxed text-white">
        {children}
      </pre>
    </div>
  );
};

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "danger" | "success" }) => {
  const colors = {
    info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    danger: "bg-red-500/10 border-red-500/20 text-red-400",
    success: "bg-green-500/10 border-green-500/20 text-green-400",
  };
  return (
    <div className={cn("my-6 rounded-lg border p-4", colors[type])}>
      <div className="text-sm font-medium">{children}</div>
    </div>
  );
};

export const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
  pre: Pre,
  Callout,
  // Extend with more components (Tabs, Accordion, etc.)
};
