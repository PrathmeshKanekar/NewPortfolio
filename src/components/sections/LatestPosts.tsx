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

/** Latest blog posts section on the Home page (Section 15) */
export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-[color:var(--color-surface-sunken)]"
      aria-labelledby="latest-posts"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="From the Blog"
            heading="Latest Writing"
            description="Thoughts on architecture, engineering culture, and building systems that last."
            id="latest-posts"
          />
        </RevealOnScroll>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeUpVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <RevealOnScroll className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent-default)] transition-colors duration-150 hover:text-[color:var(--color-accent-hover)]"
          >
            Read all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
