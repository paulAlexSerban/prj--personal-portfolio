import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PORTFOLIO_PATH = path.join("src", "content");

const portfolioDirs = fs.readdirSync(PORTFOLIO_PATH);

const getPortfolio = () => {
    const portfolioContent = portfolioDirs.map((dir) => {
        const dirContent = fs
            .readdirSync(path.join(PORTFOLIO_PATH, dir))
            .map((filename) => {
                const slug = filename.replace(".mdx", "");
                const markdownWithMeta = fs.readFileSync(
                    path.join(PORTFOLIO_PATH, dir, filename),
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

    const projects = portfolioContent.filter((dir) => dir.type === "project")[0]
        .content;

    const coursework = portfolioContent.filter(
        (dir) => dir.type === "coursework"
    )[0].content;

    return {
        projects: {
            all: projects,
            draft: getDrafts(projects),
            published: getPublished(projects),
            pinned: getPublished(projects).filter(
                (item) => item.frontmatter.pinned === true
            ),
        },
        courseWork: {
            all: coursework,
            draft: getDrafts(coursework),
            published: getPublished(coursework) || [],
        },
    };
};

export default getPortfolio;
