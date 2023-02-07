import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join("src", "content");

const blogDirs = fs.readdirSync(BLOG_PATH);

const getBlog = () => {
    const blogContent = blogDirs.map((dir) => {
        const dirContent = fs
            .readdirSync(path.join(BLOG_PATH, dir))
            .map((filename) => {
                const slug = filename.replace(".md", "");
                const markdownWithMeta = fs.readFileSync(
                    path.join(BLOG_PATH, dir, filename),
                    "utf-8"
                );
                const { data: frontmatter } = matter(markdownWithMeta);
                return {
                    slug,
                    frontmatter,
                };
            });
        return {
            type: dir,
            content: dirContent,
        };
    });

    const getDrafts = (type) => {
        return type.filter((item) => item.frontmatter.status === "draft");
    };

    const getPublished = (type) => {
        return type.filter((item) => item.frontmatter.status === "published");
    };

    const booknotes = blogContent.filter(
        (dir) => dir.type === "booknote"
    )[0].content;

    const posts = blogContent.filter(
        (dir) => dir.type === "post"
    )[0].content;

    const snippets = blogContent.filter(
        (dir) => dir.type === "snippet"
    )[0].content;

    return {
        booknotes: {
            all: booknotes,
            draft: getDrafts(booknotes),
            published: getPublished(booknotes),
        },
        posts: {
            all: posts,
            draft: getDrafts(posts),
            published: getPublished(posts) || [],
        },
        snippets: {
            all: snippets,
            draft: getDrafts(snippets),
            published: getPublished(snippets) || [],
        },
    };
};

export default getBlog;
