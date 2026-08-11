import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogCard } from "@/components/cards/BlogCard";
import { getAllBlogPosts } from "@/content/blog/blog-data";
import { ISR_REVALIDATE_SECONDS } from "@/lib/constants";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on system design, architecture, engineering culture, and building software that scales.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="py-24 md:py-32" aria-labelledby="blog-heading">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          heading="Writing & Insights"
          description="Deep dives into architecture, engineering practices, and lessons from building production systems."
          id="blog-heading"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
