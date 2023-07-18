import fsPromises from "fs/promises";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { sanitizeQueryString } from "@/utils/TextUtils";
import rehypeHighlight from "rehype-highlight";
import rehypeAttr from "rehype-attr";

const CONTENT_DIRECTORY = "./content/dist";
const TYPE_PATTERNS = /projects|coursework|posts|booknotes|snippets/;

class ContentRepository {
    constructor(jsonContentPath = "") {
        this.contentFiles = [];
        this.parsedContent = {};
        this.jsonContentPath = jsonContentPath;
    }

    async getPageJsonContent(jsonContentPath) {
        const pageJsonContent = await import(`@/content/dist/pages/${jsonContentPath}index.json`);
        return pageJsonContent;
    }

    async setupContentFiles() {
        try {
            const contentItems = await fsPromises.readdir(path.resolve(CONTENT_DIRECTORY), { withFileTypes: true });

            const filteredItems = contentItems.filter((item) => item.isDirectory() && TYPE_PATTERNS.test(item.name));

            // Use Promise.all to read all directories in parallel
            const itemsWithFiles = await Promise.all(
                filteredItems.map(async (item) => {
                    const itemPath = path.resolve(CONTENT_DIRECTORY, item.name);
                    const itemFiles = await fsPromises.readdir(itemPath);
                    return {
                        typeName: item.name,
                        path: itemPath,
                        files: itemFiles,
                    };
                })
            );

            return itemsWithFiles;
        } catch (err) {
            console.error(err);
            // You might want to re-throw the error or handle it in another way
            throw err;
        }
    }

    async setupParsedContent() {
        const parsedContent = {};
        for (const item of this.contentFiles) {
            const { typeName, path, files } = item;
            parsedContent[typeName] = [];

            for (const filename of files) {
                if (!filename.endsWith(".mdx")) continue;
                const slug = filename.replace(".mdx", "");
                const content = await this.getContent(`${path}/${filename}`);
                content.frontmatter.slug = slug;
                parsedContent[typeName].push({
                    slug,
                    path: path,
                    filename: filename,
                    fullPath: `${path}/${filename}`,
                    typeName: typeName,
                    content: content,
                });
            }
        }
        return parsedContent;
    }

    async getContent(filePath) {
        try {
            const markdownWithMeta = await fsPromises.readFile(filePath, "utf-8");
            const mdxSource = await serialize(markdownWithMeta, {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [rehypeHighlight, rehypeAttr],
                },
            });
            return mdxSource;
        } catch (error) {
            console.error(`Error reading file: ${filePath}`, error);
        }
    }

    async setupTags() {
        const tags = Object.keys(this.parsedContent).reduce((acc, type) => {
            this.parsedContent[type].forEach((item) => {
                const itemTags = item.content.frontmatter.tags;
                if (itemTags && itemTags.length > 0) {
                    itemTags.forEach((tag) => {
                        const sanitizedTag = sanitizeQueryString(tag);
                        acc[sanitizedTag] = tag;
                    });
                }
            });
            return acc; // This line is important
        }, {});
        return tags;
    }

    async setupCategories() {
        const categories = Object.keys(this.parsedContent).reduce((acc, type) => {
            this.parsedContent[type].forEach((item) => {
                const itemCategories = item.content.frontmatter.categories;
                if (itemCategories && itemCategories.length > 0) {
                    itemCategories.forEach((category) => {
                        const sanitizedCategory = sanitizeQueryString(category);
                        if (!acc.includes(sanitizedCategory)) {
                            acc.push(sanitizedCategory);
                        }
                    });
                }
            });
            return acc; // This line is important
        }, []);
        return categories;
    }

    async all() {
        return this.parsedContent;
    }

    async findOne(type, slug) {
        const content = this.parsedContent[type].find((item) => item.slug === slug);
        return content;
    }

    async findByType(type) {
        const content = this.parsedContent[type];
        return content;
    }

    async findByTag(type, tag) {
        const content = this.parsedContent[type].filter((item) => item.content.frontmatter.tags.includes(tag));
        return content;
    }

    async findByCategory(type, category) {
        const content = this.parsedContent[type].filter((item) => item.content.frontmatter.category === category);
        return content;
    }

    async findByDate(type, date) {
        const content = this.parsedContent[type].filter((item) => item.content.frontmatter.date === date);
        return content;
    }

    async findByStatus(type, status) {
        const content = this.parsedContent[type].filter((item) => item.content.frontmatter.status === status);
        return content;
    }

    async findAllBySlug(slug) {
        const content = Object.keys(this.parsedContent).reduce((acc, type) => {
            const foundContent = this.parsedContent[type].find((item) => item.slug === slug);
            if (foundContent) {
                acc.push(foundContent);
            }
            return acc;
        }, []);
        return content;
    }

    async setupPublishedContent() {
        const content = Object.keys(this.parsedContent).reduce((acc, type) => {
            const publishedContent = this.parsedContent[type].filter(
                (item) => item.content.frontmatter.status === "published"
            );
            acc[type] = publishedContent;
            return acc;
        }, {});
        return content;
    }

    async allDrafts() {
        const content = Object.keys(this.parsedContent).reduce((acc, type) => {
            const draftContent = this.parsedContent[type].filter((item) => item.content.frontmatter.status === "draft");
            acc.push(...draftContent);
            return acc;
        }, []);
        return content;
    }

    async setupSortedContent(order = "desc") {
        const content = Object.keys(this.publishedContent).reduce((acc, type) => {
            const sortedContent = this.publishedContent[type].sort((a, b) => {
                return order === "asc"
                    ? new Date(a.content.frontmatter.date) - new Date(b.content.frontmatter.date)
                    : new Date(b.content.frontmatter.date) - new Date(a.content.frontmatter.date);
            });
            acc[type] = sortedContent;
            return acc;
        }, {});
        return content;
    }

    async setupPinnedContent() {
        const content = Object.keys(this.sortedContent).reduce((acc, type) => {
            const pinnedContent = this.sortedContent[type].filter((item) => item.content.frontmatter.pinned === true);
            acc[type] = pinnedContent;
            return acc;
        }, {});
        return content;
    }

    async init() {
        this.content = await this.getPageJsonContent(this.jsonContentPath);
        this.contentFiles = await this.setupContentFiles();
        this.parsedContent = await this.setupParsedContent();
        this.tags = await this.setupTags();
        this.categories = await this.setupCategories();
        this.publishedContent = await this.setupPublishedContent();
        this.sortedContent = await this.setupSortedContent();
        this.pinnedContent = await this.setupPinnedContent();
    }
}

export default ContentRepository;
