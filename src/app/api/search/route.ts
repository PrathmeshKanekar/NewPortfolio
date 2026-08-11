import { NextResponse } from "next/server";
import { getAllDocuments } from "@/lib/mdx/loader";

export const dynamic = "force-static";

export async function GET() {
  const projects = getAllDocuments("projects").map((doc) => ({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    slug: doc.slug,
    type: "project",
    url: `/projects/${doc.slug}`,
  }));

  const blog = getAllDocuments("blog").map((doc) => ({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    slug: doc.slug,
    type: "blog",
    url: `/blog/${doc.slug}`,
  }));

  const index = [...projects, ...blog];

  return NextResponse.json(index);
}
