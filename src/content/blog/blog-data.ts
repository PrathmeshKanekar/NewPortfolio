import type { BlogPost } from "@/types/blog";

/** Static blog data (will later be sourced from MDX frontmatter) */
export const blogPosts: BlogPost[] = [];

export function getLatestBlogPosts(count = 2): BlogPost[] {
  return blogPosts
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, count);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
