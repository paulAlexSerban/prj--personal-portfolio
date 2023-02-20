import { useId } from "react";
import PropTypes from "prop-types";
import { base } from "@/styles/molecules/markdownContainer.module.scss";
import MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";
import highlight from "markdown-it-highlightjs";
import bracketed from "markdown-it-bracketed-spans";

const markdown = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true,
});
markdown.use(highlight, { inline: true });
markdown.use(attrs);
markdown.use(bracketed);
markdown.enable(["link"]);

export default function MarkdownContainer({ markdownContent, articleId }) {
	const ID = useId();

	return (
		<>
			{markdownContent && (
				<article
					id={articleId || ID}
					className={base}
					dangerouslySetInnerHTML={{
						__html: markdown.render(markdownContent),
					}}
				></article>
			)}
		</>
	);
}

MarkdownContainer.propTypes = {
	markdownContent: PropTypes.string,
	articleId: PropTypes.string,
};
