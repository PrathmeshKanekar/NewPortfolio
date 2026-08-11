/** Project type — mirrors content-schema/project.schema.ts via z.infer */
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  role: string;
  stack: string[];
  featured: boolean;
  order?: number;
  year: number;
  coverImage: string;
  coverImageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
  metrics?: ProjectMetric[];
  relatedSlugs?: string[];
}
