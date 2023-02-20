import Head from "next/head";
import BlogCategoryTemplate from "@/core/templates/BlogCategory.template.js";
import getContent from "@/core/utils/content/getContent";
import LoadingSpinner from "@/core/library/atoms/LoadingSpinner.atom";
import Pagination from "@/core/library/molecules/Pagination.molecule";
const POSTS_PER_PAGE = 10;
export default function BlogCategory({ children, pageContent, siteProps }) {
	const pageTitle = [
		`Pag. ${pageContent.main.children.postsOverview.currentPage} |`,
		"Blog",
		"|",
		siteProps.title,
	].join(" ");
	return (
		<div>
			<LoadingSpinner />
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={siteProps.icons.favicon} />
			</Head>
			<BlogCategoryTemplate pageContent={pageContent} siteProps={siteProps}>
				{children}
				<Pagination
					currentPage={pageContent.main.children.postsOverview.currentPage}
					numPages={pageContent.main.children.postsOverview.numPages}
				/>
			</BlogCategoryTemplate>
		</div>
	);
}

export async function getStaticPaths() {
	const publishedPosts = getContent().posts.filter((post) => post.frontmatter.status === "published");
	const numPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE); // get number of pages
	let paths = [];
	for (let i = 1; i <= numPages; i++) {
		paths.push({
			params: { page_index: i.toString() },
		});
	}
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const page = parseInt((params && params.page_index) || 1);
	const publishedPosts = getContent().posts.filter((post) => post.frontmatter.status === "published");
	const numPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE); // get number of pages
	const pageIndex = page - 1;
	const orderedPosts = publishedPosts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);
	return {
		props: {
			pageContent: {
				heroBanner: {
					pageTitle: "Blog posts",
					subheading: "Thoughts and insights on Web Development.",
				},
				main: {
					title: "Posts",
					section_id: "posts",
					children: {
						postsOverview: {
							list: orderedPosts,
							parentPage: "blog",
							numPages,
							currentPage: page,
							category: {
								category_url: "posts",
								category_name: "posts",
							},
						},
					},
				},
			},
		},
	};
}
