import { useId } from "react";
import {
    base,
    container,
    header,
    footer,
} from "@/styles/molecules/projectCard.module.scss";

import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import TagList from "./TagList.molecule";
import LinkIcon from "@/core/atoms/LinkIcon.atom";

export default function ProjectCard({
    project,
    title = "Title undefined",
    subtitle = "Subtitle undefined",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    githubLink = "https://github.com",
    demoLink = "https://demo.com",
    tags = [
        "RWD",
        "a11y",
        "SEO",
        "JavaScript",
        "Sass",
        "Gulp",
        "WebPack",
        "JAMStack",
        "GitHub Actions",
    ],
}) {
    const ID = useId();

    const prjTitle = project.frontmatter.title;
    const prjType = project.frontmatter.type;
    const prjTags = project.frontmatter.tags;
    const prjExcerpt = project.frontmatter.excerpt;
    const prjGhRepo = project.frontmatter.repo_url;
    const prjDemo = project.frontmatter.demo_url;

    return (
        <article id={ID} className={base}>
            <header className={header}>
                <Heading
                    level="3"
                    mainText={prjTitle}
                    subheadingText={prjType}
                />
            </header>
            <div className={container}>
                <TagList tags={prjTags} />
                <Paragraph text={prjExcerpt} />
            </div>
            <footer className={footer}>
                <LinkIcon
                    label={[prjTitle, "Repo"].join(" ")}
                    href={prjGhRepo}
                    iconName="github"
                />
                <Link label="Demo" href={prjDemo} />
            </footer>
        </article>
    );
}
