import { getCollection, render } from "astro:content";

export interface WritingRow {
  href: string;
  title: string;
  excerpt: string;
  year: number;
  meta: string;
}

/**
 * Published blog posts, newest first, shaped for <IndexRow>. Pass a limit to
 * cap the count (e.g. the home page's "selected" list). Used by the home and
 * the writing index so the two stay in sync.
 */
export async function getWritingRows(limit?: number): Promise<WritingRow[]> {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.isDraft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const selected = limit ? posts.slice(0, limit) : posts;

  return Promise.all(
    selected.map(async (p) => {
      const { remarkPluginFrontmatter } = await render(p);
      return {
        href: `/blog/${p.id}`,
        title: p.data.title,
        excerpt: p.data.excerpt,
        year: new Date(p.data.date).getFullYear(),
        meta: remarkPluginFrontmatter.minutesRead as string,
      };
    }),
  );
}
