import type { Project } from "@/types/project";
import { getAllDocuments } from "@/lib/mdx/loader";

export function getAllProjects(): Project[] {
  const docs = getAllDocuments("projects");
  return docs.map((doc) => ({
    slug: doc.slug,
    title: doc.frontmatter.title,
    summary: doc.frontmatter.description,
    year: new Date(doc.frontmatter.date).getFullYear(),
    stack: doc.frontmatter.techStack,
    liveUrl: doc.frontmatter.url,
    repoUrl: doc.frontmatter.repository,
    featured: doc.frontmatter.featured,
    order: doc.frontmatter.order,
    role: "Full Stack Engineer",
    coverImage: "",
    coverImageAlt: doc.frontmatter.title
  })).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
