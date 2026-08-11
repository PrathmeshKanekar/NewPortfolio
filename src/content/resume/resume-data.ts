import type { Experience } from "@/types/experience";

export const resumeData = {
  name: "Prathmesh Kanekar",
  title: "Full Stack Software Engineer",
  email: "hello@prathmeshkanekar.in",
  location: "India",
  summary:
    "Product-focused software architect building premium SaaS.",

  experience: [] as Experience[],

  education: [] as { institution: string; degree: string; year: string }[],

  skills: {
    languages: [] as { name: string; proficiency: number }[],
    frameworks: [] as { name: string; proficiency: number }[],
    cloudDevOps: [] as { name: string; proficiency: number }[],
    databases: [] as { name: string; proficiency: number }[],
    aiTooling: [] as { name: string; proficiency: number }[],
  },
};
