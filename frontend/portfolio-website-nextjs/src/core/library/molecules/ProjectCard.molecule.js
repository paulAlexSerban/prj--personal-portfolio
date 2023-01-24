import { useId } from "react";
import {
    base,
    container,
    header,
    footer,
} from "@/styles/molecules/projectCard.module.scss";

import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import TagList from "./TagList.molecule";

export default function ProjectCard({
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

    return (
        <article id={ID} className={base}>
            <header className={header}>
                <Heading level="3" mainText={title} subheadingText={subtitle} />
            </header>
            <div className={container}>
                <TagList tags={tags} />
                <Paragraph text={description} />
            </div>
            <footer className={footer}>
                <Link label="GitHub" href={githubLink} />
                <Link label="Demo" href={demoLink} />
            </footer>
        </article>
    );
}
