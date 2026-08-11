"use client";

import { createContext, useContext, ReactNode } from "react";
import type { GitHubRepo, GitHubUser } from "@/types/github";

interface GitHubContextType {
  user: GitHubUser | null;
  repos: GitHubRepo[];
}

const GitHubContext = createContext<GitHubContextType>({
  user: null,
  repos: [],
});

export function GitHubProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: GitHubContextType;
}) {
  return (
    <GitHubContext.Provider value={initialData}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub() {
  return useContext(GitHubContext);
}
