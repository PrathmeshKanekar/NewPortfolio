"use client";

import React, { useState } from "react";
import { Search, Command, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function KokonutActionSearch({
  placeholder = "Search projects, stack, architecture...",
  onSearch,
  className,
}: ActionSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val);
  };

  return (
    <div
      className={cn(
        "relative flex items-center w-full max-w-xl rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)]/80 backdrop-blur-md px-4 py-2.5 transition-all duration-300 shadow-sm",
        isFocused && "border-[color:var(--color-accent-default)] ring-2 ring-[color:var(--color-accent-default)]/20 shadow-md",
        className
      )}
    >
      <Search className="w-4 h-4 text-[color:var(--color-text-tertiary)] mr-3 shrink-0" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm font-medium text-[color:var(--color-text-primary)] placeholder-[color:var(--color-text-tertiary)] focus:outline-none"
      />
      <div className="flex items-center gap-1.5 ml-2 shrink-0">
        <kbd className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-raised)] text-[10px] font-mono font-medium text-[color:var(--color-text-tertiary)] shadow-xs">
          <Command className="w-2.5 h-2.5" /> K
        </kbd>
      </div>
    </div>
  );
}
