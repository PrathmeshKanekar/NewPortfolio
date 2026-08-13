"use client";

import { Mail } from "lucide-react";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactEmailButton() {
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(SITE_CONFIG.email);
    toast.success("Email copied to clipboard!", {
      description: "I usually reply within 24 hours.",
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-4 rounded-lg border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] p-5 transition-all duration-200 hover:border-[color:var(--color-border-default)] hover:bg-[color:var(--color-surface-raised)] text-left w-full"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-surface-hover)] shrink-0">
        <Mail className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
      </div>
      <div>
        <p className="text-xs text-[color:var(--color-text-tertiary)] mb-0.5">Email (Click to copy)</p>
        <p className="text-sm font-medium text-[color:var(--color-text-primary)]">{SITE_CONFIG.email}</p>
      </div>
    </button>
  );
}
