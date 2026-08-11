import { NextResponse } from "next/server";
import { generateRSSFeeds } from "@/lib/mdx/rss";

// Since generateRSSFeeds writes to public/ directory directly,
// we can just call it here and return the content, or we can just 
// generate it natively in this route without fs.writeFileSync.
import { Feed } from "feed";
import { getAllDocuments } from "@/lib/mdx/loader";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllDocuments("blog");

  const feed = new Feed({
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    id: SITE_CONFIG.url,
    link: SITE_CONFIG.url,
    language: "en",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    favicon: `${SITE_CONFIG.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${SITE_CONFIG.name}`,
    author: {
      name: SITE_CONFIG.name,
      email: SITE_CONFIG.email,
      link: SITE_CONFIG.url,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${SITE_CONFIG.url}/blog/${post.slug}`,
      link: `${SITE_CONFIG.url}/blog/${post.slug}`,
      description: post.frontmatter.description,
      date: new Date(post.frontmatter.date),
      author: [
        {
          name: post.frontmatter.author,
          link: SITE_CONFIG.url,
        },
      ],
      category: post.frontmatter.tags.map((tag) => ({ name: tag })),
    });
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
    },
  });
}
