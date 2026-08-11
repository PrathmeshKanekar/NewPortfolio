import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { getFeaturedProjects } from "@/content/projects/projects-data";
import { getLatestBlogPosts } from "@/content/blog/blog-data";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";

export const revalidate = 3600;

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getLatestBlogPosts(2);

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <AboutTeaser />
      <SkillsOverview />
      <LatestPosts posts={latestPosts} />
      <ClosingCTA />
    </>
  );
}
