import { useId } from "react";
import { base } from "@/styles/molecules/markdownContainer.module.scss";
import MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";
import highlight from "markdown-it-highlightjs";
import bracketed from "markdown-it-bracketed-spans";

export default function MarkdownContainer({ markdownContent, articleId }) {
	const ID = useId();

	const marked = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
	});
	marked.use(highlight,  { inline: true });
	marked.use(attrs);
	marked.use(bracketed);
	marked.enable(["link"]);

	return (
		<>
			{markdownContent && (
				<article
					id={articleId || ID}
					className={base}
					dangerouslySetInnerHTML={{
						__html: marked.render(markdownContent),
					}}
				></article>
			)}
		</>
	);
}
