import fs from 'fs/promises';
import path from 'path';
import sanitizeQueryString from '../sanitizeQueryString';
import { sortByDate } from '../softByDate';
import { serialize } from 'next-mdx-remote/serialize';

const getContent = async (contentPath = './src/content') => {
  const contentCategories = await fs.readdir(path.resolve(contentPath));
  const content = { tags: [] };

  for (const category of contentCategories) {
    const categoryPath = path.join(contentPath, category);
    const files = await fs.readdir(categoryPath);

    content[category] = [];

    for (const filename of files) {
      if (!filename.endsWith('.mdx')) continue;

      const slug = filename.replace('.mdx', '');
      const filePath = path.join(categoryPath, filename);

      try {
        const markdownWithMeta = await fs.readFile(filePath, 'utf-8');
        const mdxSource = await serialize(markdownWithMeta, { parseFrontmatter: true });
        const { frontmatter } = mdxSource;
        const isPublished = frontmatter.status === 'published';
        const hasTags = frontmatter.tags;

        if (hasTags && isPublished) {
          Object.values(frontmatter.tags).forEach((tag) => {
            const sanitizedTag = sanitizeQueryString(tag);
            content.tags.push({ name: tag, tag: sanitizedTag });
          });
        }

        const itemObj = {
          slug,
          frontmatter,
          content: mdxSource,
        };

        if (isPublished) {
          content[category].push(itemObj);
        }
      } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
      }
    }
  }

  const uniqueTags = [...new Set(content.tags)];
  for (const category in content) {
    if (category !== 'tags') {
      content[category] = content[category].sort(sortByDate);
    }
  }

  return { content, tags: uniqueTags };
};

export default getContent;
