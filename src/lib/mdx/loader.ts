import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readingTime } from "@/lib/utils";
import { collectionSchemas } from "./schemas";
import { z } from "zod";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface MDXDocument<T> {
  source: string;
  frontmatter: T;
  slug: string;
  readingTime: number;
  toc: { level: number; text: string; slug: string }[];
}

// Ensure collection directories exist
Object.keys(collectionSchemas).forEach((collection) => {
  const dir = path.join(contentDirectory, collection);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx" || path.extname(file) === ".md");
}

function extractTOC(content: string) {
  const headings = Array.from(content.matchAll(/^(#{2,4})\s+(.+)$/gm));
  return headings.map((match) => {
    const level = match[1].length;
    const text = match[2];
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-");
    return { level, text, slug };
  });
}

export function getDocumentBySlug<K extends keyof typeof collectionSchemas>(
  collection: K,
  slug: string
): MDXDocument<z.infer<typeof collectionSchemas[K]>> | null {
  try {
    const fullPath = path.join(contentDirectory, collection, `${slug}.mdx`);
    const fallbackPath = path.join(contentDirectory, collection, `${slug}.md`);
    
    let fileContents: string;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else if (fs.existsSync(fallbackPath)) {
      fileContents = fs.readFileSync(fallbackPath, "utf8");
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);
    
    const schema = collectionSchemas[collection];
    const validatedData = schema.parse(data);

    return {
      source: content,
      frontmatter: validatedData as z.infer<typeof collectionSchemas[K]>,
      slug,
      readingTime: readingTime(content),
      toc: extractTOC(content),
    };
  } catch (error) {
    console.error(`Error loading document ${collection}/${slug}:`, error);
    return null;
  }
}

export function getAllDocuments<K extends keyof typeof collectionSchemas>(
  collection: K
): MDXDocument<z.infer<typeof collectionSchemas[K]>>[] {
  const dir = path.join(contentDirectory, collection);
  const files = getMDXFiles(dir);

  const docs = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      return getDocumentBySlug(collection, slug);
    })
    .filter((doc): doc is NonNullable<typeof doc> => doc !== null);

  return docs.sort((a, b) => {
    // Sort by date if present
    const dateA = (a.frontmatter as any).date;
    const dateB = (b.frontmatter as any).date;
    if (dateA && dateB) {
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
    return 0;
  });
}
