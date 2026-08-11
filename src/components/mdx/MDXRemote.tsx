import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./MDXComponents";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export function CustomMDX(props: any) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20">
      <MDXRemote
        {...props}
        components={{ ...MDXComponents, ...(props.components || {}) }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "Link to section",
                  },
                },
              ],
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                  keepBackground: false,
                },
              ],
              rehypeKatex,
            ],
          },
        }}
      />
    </div>
  );
}
