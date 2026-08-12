import { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LenisProvider } from "./LenisProvider";
import { AnalyticsProvider } from "./AnalyticsProvider";
import { PerformanceProvider } from "./PerformanceProvider";
import { ImageProvider } from "./ImageProvider";
import { ResumeProvider } from "./ResumeProvider";
import { GitHubProvider } from "./GitHubProvider";
import { getGitHubUser, getGitHubRepos } from "@/lib/github/api";

export async function AppProviders({ children }: { children: ReactNode }) {
  // Parallel data fetching for global providers
  const [githubUser, githubRepos] = await Promise.all([
    getGitHubUser().catch(() => null),
    getGitHubRepos().catch(() => []),
  ]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <PerformanceProvider>
        <AnalyticsProvider />
        <ImageProvider>
          <GitHubProvider initialData={{ user: githubUser, repos: githubRepos }}>
            <ResumeProvider
              resumeConfig={{
                downloadUrl: "/prathmesh-kanekar-resume.pdf",
                version: "2026.08",
                lastUpdated: new Date().toISOString(),
              }}
            >
              <LenisProvider>{children}</LenisProvider>
            </ResumeProvider>
          </GitHubProvider>
        </ImageProvider>
      </PerformanceProvider>
    </ThemeProvider>
  );
}
