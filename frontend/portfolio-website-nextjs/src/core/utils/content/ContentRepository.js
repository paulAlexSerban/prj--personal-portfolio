// contentRepository.js
import fs from 'fs/promises';
import path from 'path';
import { sortByDate } from '@/utils/softByDate';
import { serialize } from 'next-mdx-remote/serialize';
import sanitizeQueryString from '@/utils/sanitizeQueryString';

class ContentRepository {
  constructor(contentPath = './src/content') {
    this.contentPath = contentPath;
  }

  #filterByFrontmatter(array, frontmatterKeys, values = {}) {
    // Input validation
    if (!Array.isArray(array)) {
      throw new Error('The "array" parameter must be an array');
    }
    if (!Array.isArray(frontmatterKeys) || !frontmatterKeys.every((key) => typeof key === 'string')) {
      throw new Error('The "frontmatterKeys" parameter must be an array of strings');
    }

    return array.filter((item) => {
      return frontmatterKeys.every((key) => {

        if (!item.frontmatter.hasOwnProperty(key)) {
          return false;
        }

        if (values.hasOwnProperty(key)) {
          if (frontmatterKeys.includes('tags') && key === 'tags') {
            const sanitizedTags = item.frontmatter[key].map((tag) => sanitizeQueryString(tag));
            return sanitizedTags.includes(values[key]);
          } else {
            // Use strict equality
            return item.frontmatter[key] === values[key];
          }
        }

        if (key === 'pinned') {
          return item.frontmatter[key];
        }

        // Use strict equality
        return item.frontmatter[key] === 'published';
      });
    });
  }

  async getContent() {
    const contentCategories = await fs.readdir(path.resolve(this.contentPath));
    const content = { tags: [] };

    for (const category of contentCategories) {
      const categoryPath = path.join(this.contentPath, category);
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
  }

  async getFilteredContent(category, frontmatterKeys, values = {}) {
    const filteredContent = await this.getContent().then((fetchedContent) => {
      const { content } = fetchedContent;
      return this.#filterByFrontmatter(content[category], frontmatterKeys, values);
    });

    return filteredContent;
  }
}

export default ContentRepository;
