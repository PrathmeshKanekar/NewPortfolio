import { z } from "zod";

export const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  published: z.boolean().default(true),
});

export const projectSchema = baseSchema.extend({
  slug: z.string().optional(),
  date: z.string(),
  repository: z.string().url().optional(),
  url: z.string().url().optional(),
  techStack: z.array(z.string()),
  featured: z.boolean().default(false),
  order: z.number().optional(),
  metrics: z.record(z.string(), z.string()).optional(),
  gallery: z.array(z.string()).optional(),
  video: z.string().url().optional(),
});

export const blogSchema = baseSchema.extend({
  slug: z.string().optional(),
  date: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
  image: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  series: z.string().optional(),
});

export const experienceSchema = baseSchema.extend({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  location: z.string(),
  technologies: z.array(z.string()),
});

export const educationSchema = baseSchema.extend({
  institution: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const certificationSchema = baseSchema.extend({
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  url: z.string().url().optional(),
  credentialId: z.string().optional(),
});

export const collectionSchemas = {
  projects: projectSchema,
  blog: blogSchema,
  experience: experienceSchema,
  education: educationSchema,
  certifications: certificationSchema,
  about: baseSchema, // generic pages
} as const;

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type BlogFrontmatter = z.infer<typeof blogSchema>;
export type ExperienceFrontmatter = z.infer<typeof experienceSchema>;
export type EducationFrontmatter = z.infer<typeof educationSchema>;
export type CertificationFrontmatter = z.infer<typeof certificationSchema>;
