import Head from "next/head";
import BlogCategoryTemplate from "@/core/templates/BlogCategory.template.js";
import getContent from "@/core/utils/content/getContent";

export default function BlogCategory({ children, pageContent, siteProps }) {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={siteProps.icons.favicon} />
            </Head>
            <BlogCategoryTemplate pageContent={pageContent} siteProps={siteProps}>
                {children}
            </BlogCategoryTemplate>
        </div>
    );
}

export async function getStaticProps() {
    const publishedSnippets = getContent().snippets.filter(
        (snippets) => snippets.frontmatter.status === "published"
    );
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
                            }
                        },
                    },
                },
            },
        },
    };
}
