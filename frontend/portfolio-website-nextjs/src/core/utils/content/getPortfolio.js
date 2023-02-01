import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PORTFOLIO_PATH = path.join("src", "content", "portfolio");

const portfolioDirs = fs.readdirSync(PORTFOLIO_PATH);

const getPortfolio = () => {
    const portfolioContent = portfolioDirs.map((dir) => {
        const dirContent = fs
            .readdirSync(path.join(PORTFOLIO_PATH, dir))
            .map((filename) => {
                const slug = filename.replace(".md", "");
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

    const projects = portfolioContent.filter(
        (dir) => dir.type === "projects"
    )[0].content;

    const coursework = portfolioContent.filter(
        (dir) => dir.type === "coursework"
    )[0].content;

    const caseStudies = portfolioContent.filter(
        (dir) => dir.type === "case_studies"
    )[0].content;

    return {
        projects: {
            all: projects,
            draft: getDrafts(projects),
            published: getPublished(projects),
        },
        courseWork: {
            all: coursework,
            draft: getDrafts(coursework),
            published: getPublished(coursework) || [],
        },
        caseStudies: {
            all: caseStudies,
            draft: getDrafts(caseStudies),
            published: getPublished(caseStudies) || [],
        },
    };
};


// const files = fs.readdirSync(
//     path.join("src", "content", "portfolio", "projects")
// );

// const getProjects = () => {
//     const projects = files.map((filename) => {
//         const slug = filename.replace(".md", "");

//         const markdownWithMeta = fs.readFileSync(
//             path.join("src", "content", "portfolio", "projects", filename),
//             "utf-8"
//         );

//         const { data: frontmatter } = matter(markdownWithMeta);

//         return {
//             slug,
//             frontmatter,
//         };
//     });

//     const draftProjects = projects.filter(
//         (project) => project.frontmatter.status === "draft"
//     );
//     const publishedProjects = projects.filter(
//         (project) => project.frontmatter.status === "published"
//     );

//     return { draftProjects, publishedProjects };
// };

export default getPortfolio;
