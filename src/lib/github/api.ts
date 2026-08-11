import { GITHUB_USERNAME } from "@/lib/constants";
import type { GitHubRepo, GitHubUser } from "@/types/github";

const GITHUB_API_URL = "https://api.github.com";

// Setup fetch with proper cache tagging for ISR
async function fetchGitHubAPI<T>(endpoint: string, tags: string[]): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  // Optional: Add personal access token for higher rate limits if available
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API_URL}${endpoint}`, {
    headers,
    next: { tags, revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getGitHubUser(): Promise<GitHubUser> {
  return fetchGitHubAPI<GitHubUser>(`/users/${GITHUB_USERNAME}`, ["github-user"]);
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const repos = await fetchGitHubAPI<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    ["github-repos"]
  );

  // Exclude forks and empty repos
  return repos.filter((repo) => !repo.fork && repo.name !== GITHUB_USERNAME);
}

export async function getPinnedRepos(pinnedNames: string[]): Promise<GitHubRepo[]> {
  const repos = await getGitHubRepos();
  return repos.filter((repo) => pinnedNames.includes(repo.name));
}
