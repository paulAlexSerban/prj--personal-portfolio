import Head from "next/head";
import { useId } from "react";
import TagPreviewTemplate from "@/core/templates/TagPreview.template";
import sanitizeQueryString from "@/utils/sanitizeQueryString";
import LoadingSpinner from "@/core/library/atoms/LoadingSpinner.atom";
import getContent from "@/core/utils/content/getContent";

export default function TagsPage({ siteProps, pageContent }) {
	const ID = useId();

	return (
		<div id={ID}>
			<LoadingSpinner />
			<Head>
				<title>{siteProps.title}</title>
				<meta name="description" content={pageContent.pageDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={siteProps.icons.favicon} />
			</Head>
			<TagPreviewTemplate pageContent={pageContent} siteProps={siteProps}></TagPreviewTemplate>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = getContent().tags.map((tag) => ({
		params: {
			tag: tag.tag,
			name: tag.name,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { tag } }) {
	const tags = getContent().tags;
	const tagName = tags.find((tagObj) => tagObj.tag === tag).name;
	const getTaggedContent = (category) => {
		return getContent()[category].filter((project) => {
			if (project.frontmatter.tags) {
				const sanitizedTags = project.frontmatter.tags.map((tag) => {
					return sanitizeQueryString(tag);
				});
				return sanitizedTags.includes(tag) && project.frontmatter.status === "published";
			}
		});
	};

	return {
		props: {
			pageContent: {
				pageDescription:
					"JavaScript software engineer portfolio featuring top-notch web development projects. Discover innovative web apps and scalable enterprise solutions.",
				main: {
					heroBanner: {
						pageTitle: `${tagName} `,
					},

					section_1: {
						title: "Projects",
						section_id: "projects",
						children: {
							portfolioOverview: {
								projects: getTaggedContent("projects"),
								parentPage: "tag_preview",
								category: {
									category_url: "projects",
									category_name: "projects",
								},
							},
						},
					},
					section_2: {
						title: "Coursework",
						section_id: "coursework",
						children: {
							portfolioOverview: {
								projects: getTaggedContent("courseworks"),
								parentPage: "tag_preview",
								category: {
									category_url: "courseworks",
									category_name: "courseworks",
								},
							},
						},
					},
					section_3: {
						title: "Posts",
						section_id: "coursework",
						children: {
							postsOverview: {
								list: getTaggedContent("posts"),
								parentPage: "tag_preview",
								category: {
									category_url: "posts",
									category_name: "posts",
								},
							},
						},
					},
					section_4: {
						title: "Book Notes",
						section_id: "booknotes",
						children: {
							postsOverview: {
								list: getTaggedContent("booknotes"),
								parentPage: "tag_preview",
								category: {
									category_url: "booknotes",
									category_name: "booknotes",
								},
							},
						},
					},
					section_5: {
						title: "Snippets",
						section_id: "snipets",
						children: {
							postsOverview: {
								list: getTaggedContent("snippets"),
								parentPage: "tag_preview",
								category: {
									category_url: "snippets",
									category_name: "snippets",
								},
							},
						},
					},
				},
			},
		},
	};
}
