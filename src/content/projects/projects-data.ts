import type { Project } from "@/types/project";

/** Static project data (will later be sourced from MDX frontmatter) */
export const projects: Project[] = [];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
    .slice(0, 3);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.year - a.year);
}
