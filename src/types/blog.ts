/** Blog post type — mirrors content-schema/blog.schema.ts via z.infer */
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  tags: string[];
  coverImage?: string;
  coverImageAlt?: string;
  readingTime: number;
  relatedSlugs?: string[];
}
