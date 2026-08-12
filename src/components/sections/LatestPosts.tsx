"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogCard } from "@/components/cards/BlogCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animation-variants";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LatestPostsProps {
  posts: BlogPost[];
}

/** Latest blog posts section — elegant empty state if no posts exist */
export function LatestPosts({ posts }: LatestPostsProps) {
  if (!posts || posts.length === 0) {
    return null; // Hide section entirely when no posts exist
  }

  return (
    <section
      className="py-24 md:py-32 border-t border-[color:var(--color-border-subtle)]"
      aria-labelledby="latest-posts"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            number="04"
            eyebrow="From the Blog"
            heading="Latest Writing"
            description="Thoughts on architecture, engineering, and building systems that last."
            id="latest-posts"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeUpVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)]"
          >
            Read all posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
