import Head from "next/head";
import BlogTemplate from "@/core/templates/Blog.template.js";
import getContent from "@/core/utils/content/getContent";

export default function Blog({ children, pageContent, siteProps }) {
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
            <BlogTemplate pageContent={pageContent} siteProps={siteProps}>
                {children}
            </BlogTemplate>
        </div>
    );
}

export async function getStaticProps() {
    const publishedPosts = getContent().posts.filter(
        (post) => post.frontmatter.status === "published"
    );

    const publishedBooknotes = getContent().booknotes.filter(
        (booknote) => booknote.frontmatter.status === "published"
    );

    const publishedSnippets = getContent().snippets.filter(
        (snippets) => snippets.frontmatter.status === "published"
    );
    return {
        props: {
            pageContent: {
                heroBanner: {
                    pageTitle: "Blog",
                    subheading: "Coding with Purpose, and blogging about it.",
                },
                section_1: {
                    title: "Posts",
                    section_id: "posts",
                    children: {
                        postsOverview: {
                            list: publishedPosts.slice(0, 4),
                            parentPage: "blog",
                            category: {
                                category_url: "posts",
                                category_name: "posts",
                            },
                        },
                    },
                },
                section_2: {
                    title: "Book Notes",
                    section_id: "book_notes",
                    children: {
                        postsOverview: {
                            list: publishedBooknotes.slice(0, 4),
                            parentPage: "blog",
                            category: {
                                category_url: "booknotes",
                                category_name: "booknotes",
                            },
                        },
                    },
                },
                section_3: {
                    title: "Snippets",
                    section_id: "snippets",
                    children: {
                        postsOverview: {
                            list: publishedSnippets.slice(0, 4),
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
