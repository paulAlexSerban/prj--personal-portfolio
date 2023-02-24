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
import getPath from "@/core/utils/getPath";

export default function ProjectCard({ project, category }) {
	const ID = useId();

	const prjTitle = project.frontmatter.title;
	const prjType = project.frontmatter.type;
	const prjTags = project.frontmatter.tags.slice(0, 5);
	const prjExcerpt = project.frontmatter.excerpt;
	const prjGhRepo = project.frontmatter.repo_url;
	const prjDemo = project.frontmatter.demo_url;
	const prjSlug = getPath(`/portfolio/${category.category_url}/${project.slug}`);

	return (
		<article id={ID} className={`${base} projectCard`}>
			<header className={header}>
				<a href={prjSlug} target="_self">
					<Heading level={3} mainText={prjTitle} subheadingText={prjType} />
				</a>
			</header>
			<div className={container}>
				<Paragraph text={prjExcerpt} />
				<TagList tags={prjTags} />
			</div>
			<footer className={footer}>
				<LinkIcon
					label={[prjTitle, "Repo"].join(" ")}
					href={prjGhRepo}
					iconName="github"
					isInternal={false}
				/>
				<LinkIcon
					label={[prjTitle, "Case Study"].join(" ")}
					href={prjSlug}
					iconName="folder"
					isInternal={true}
				/>
				<LinkIcon
					label={[prjTitle, "View Demo"].join(" ")}
					href={prjDemo}
					iconName="globe"
					isInternal={false}
				/>
			</footer>
		</article>
	);
}
