import Head from "next/head";
import BlogCategoryTemplate from "@/core/templates/BlogCategory.template.js";
import {  Roboto } from 'next/font/google';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from "@/core/utils/trimPageDescription";

const roboto = Roboto({
	display: 'swap',
	subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

export default function BlogCategory({ children, pageContent, siteProps }) {
	return (
		<div className={roboto.className}>
			  
			<Head>
				<meta name="description" content={getPageDescription("Explore our collection of useful code snippets for software engineering and web development, curated by Paul Serban, a skilled software engineer and web developer.")} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={siteProps.icons.favicon} />
			</Head>
			<BlogCategoryTemplate pageContent={pageContent} siteProps={siteProps}>
				{children}
			</BlogCategoryTemplate>
		</div>
	);
}

export async function getStaticProps() {
	const contentRepository = new ContentRepository();
  const publishedSnippets = await contentRepository.getFilteredContent('snippets', ['status'], { status: 'published' });
	return {
		props: {
			pageContent: {
				heroBanner: {
					pageTitle: "Code Snippets",
					subheading: "Collection of useful and efficient code snippets.",
				},
				main: {
					title: "Snippets",
					section_id: "snippets",
					children: {
						postsOverview: {
							list: publishedSnippets,
							parentPage: "blog",
							category: {
								category_url: "snippets",
								category_name: "snippets",
							},
						},
					},
				},
			},
		},
	};
}
