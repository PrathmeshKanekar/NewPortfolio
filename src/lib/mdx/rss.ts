import { Feed } from "feed";
import { getAllDocuments } from "@/lib/mdx/loader";
import { SITE_CONFIG } from "@/lib/constants";
import fs from "fs";
import path from "path";

export function generateRSSFeeds() {
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

  const publicDir = path.join(process.cwd(), "public");
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, "feed.xml"), feed.rss2());
  fs.writeFileSync(path.join(publicDir, "atom.xml"), feed.atom1());
  fs.writeFileSync(path.join(publicDir, "feed.json"), feed.json1());
}
