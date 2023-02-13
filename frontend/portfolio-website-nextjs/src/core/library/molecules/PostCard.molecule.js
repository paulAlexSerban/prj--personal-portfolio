import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import TagList from "./TagList.molecule";

import {
	base,
	footer,
	cardLink,
} from "@/styles/molecules/postCard.module.scss";

export default function PostCard({ post, category }) {
	const ID = useId();

	const postTitle = post.frontmatter.title;
	const postExcerpt = post.frontmatter.excerpt;
	const postTags = post.frontmatter.tags;
	const postSubheading = post.frontmatter.subheading;
	const postCategory = category.category_url;
	const postSlug = `/blog/${postCategory}/${post.slug}`;
	const postAuthor = post.frontmatter.author;

	return (
		<article id={ID} className={base}>
			<header>
				<a href={postSlug} target="_self">
					<Heading
						level="3"
						mainText={postTitle}
						subheadingText={postSubheading}
					/>
				</a>
			</header>
			<main>
				<Paragraph text={postExcerpt} />
			</main>

			<footer className={footer}>
				<Link label="Read More" href={postSlug} />
				<TagList tags={postTags} />
			</footer>
		</article>
	);
}
