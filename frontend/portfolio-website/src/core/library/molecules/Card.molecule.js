import styles, { base, container, header, footer } from "@/styles/molecules/card.module.scss";
import { Paragraph, Heading, Link } from "@/core/atoms/typography";
import TagList from "./TagList.molecule";
import LinkIcon from "@/core/atoms/LinkIcon.atom";
import { forwardRef } from "react";
import ScrollVisibility from "../molecules/hoc/ScrollVisibility";

const CardComponent = forwardRef(({ content, category, section, className }, ref) => {
    const prjTitle = content.title;
    const prjSubheading = content.subheading;
    const prjType = content.type;
    const prjTags = content.tags.slice(0, 5);
    const prjExcerpt = content.excerpt;
    const prjGhRepo = content.repo_url;
    const prjDemo = content.demo_url;
    const prjSlug = `/${section}/${category.category_url}/${content.slug}`;

    return (
        <article className={className} ref={ref}>
            <header className={header}>
                <Link href={prjSlug} isInternal={true}>
                    <Heading level={3} mainText={prjTitle} subheadingText={prjSubheading} />
                </Link>
            </header>
            <div className={container}>
                <Paragraph text={prjExcerpt} />
            </div>
            {(prjDemo || prjGhRepo || prjTags) && (
                <footer className={footer}>
                    <TagList tags={prjTags} />
                    {prjGhRepo && (
                        <LinkIcon label="Code repository" href={prjGhRepo} iconName="github" isInternal={false} />
                    )}
                    {prjSlug && prjGhRepo && (
                        <LinkIcon label="Case study" href={prjSlug} iconName="folder" isInternal={true} />
                    )}
                    {prjDemo && <LinkIcon label="Live demo" href={prjDemo} iconName="globe" isInternal={false} />}
                </footer>
            )}
        </article>
    );
});

CardComponent.displayName = "CardComponent";

const Card = (props) => {
    return (
        <ScrollVisibility styles={styles} baseClass={base} scrollOperator="gte">
            <CardComponent {...props} />
        </ScrollVisibility>
    );
};

export default Card;
