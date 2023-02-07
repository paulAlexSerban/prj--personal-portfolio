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
    const publishedBooknotes = getContent().booknotes.filter(
        (booknote) => booknote.frontmatter.status === "published"
    );

    return {
        props: {
            pageContent: {
                heroBanner: {
                    pageTitle: "Book Notes",
                    subheading: "Insights and key takeaways from some of the book I read.",
                },
                main: {
                    title: "Book Note",
                    section_id: "book_notes",
                    children: {
                        postsOverview: {
                            list: publishedBooknotes,
                            parentPage: "blog",
                            category: {
                                category_url: "booknotes",
                                category_name: "booknotes",
                            }
                        },
                    },
                },
            },
        },
    };
}
