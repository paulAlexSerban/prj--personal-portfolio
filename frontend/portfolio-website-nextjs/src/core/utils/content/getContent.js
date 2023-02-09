import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sanitizeQueryString from "../sanitizeQueryString";

const CONTENT_PATH = path.join(process.cwd(), "src", "content");

const CONTENT_CATEGORIES = fs.readdirSync(CONTENT_PATH);

const getContent = () => {
    const content = { tags: [] };
    CONTENT_CATEGORIES.map((category) => {
        content[category] = [];

        const CATEGORY_PATH = path.join(CONTENT_PATH, category);
        const FILES = fs.readdirSync(CATEGORY_PATH);
        FILES.map((filename) => {
            const slug = filename.replace(".md", "");
            const markdownWithMeta = fs.readFileSync(
                path.join(CATEGORY_PATH, filename),
                "utf-8"
            );
            const fileMatter = matter(markdownWithMeta);
            const { data: frontmatter } = fileMatter;
            if (frontmatter.tags) {
                Object.values(frontmatter.tags).map((tag) => {
                    const sanitizedTag = sanitizeQueryString(tag);
                    content.tags.push({ name: tag, tag: sanitizedTag });
                });
            }
            const fileContent = fileMatter.content;

            const itemObj = {
                slug,
                frontmatter,
                content: fileContent,
            };
            content[category].push(itemObj);
        });
    });
    content.tags = [...new Set(content.tags)];
    return content;
};
export default getContent;
