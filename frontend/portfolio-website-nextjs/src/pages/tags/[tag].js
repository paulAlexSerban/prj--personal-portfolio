import Head from "next/head";
import { useId } from "react";
import GenericTemplate from "@/core/templates/Generic.template";
import sanitizeQueryString from "@/utils/sanitizeQueryString";

import getContent from "@/core/utils/content/getContent";

export default function TagsPage({ siteProps, pageContent }) {
    const ID = useId();

    return (
        <div id={ID}>
            <Head>
                <title>{siteProps.title}</title>
                <meta
                    name="description"
                    content={pageContent.pageDescription}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={siteProps.icons.favicon} />
            </Head>
            <GenericTemplate
                pageContent={pageContent}
                siteProps={siteProps}
            ></GenericTemplate>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getContent().tags.map((tag) => ({
        params: {
            tag,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { tag } }) {
    const getTaggedContent = (category) => {
        return getContent()[category].filter((project) => {
            if (project.frontmatter.tags) {
                const sanitizedTags = project.frontmatter.tags.map((tag) => {
                    return sanitizeQueryString(tag);
                });
                return sanitizedTags.includes(tag);
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
                        pageTitle: "Tags",
                        subheading: "My work tagged with ... ",
                    },

                    section_1: {
                        title: "Projects",
                        section_id: "projects",
                        children: {
                            portfolioOverview: {
                                list: getTaggedContent("projects"),
                                parentPage: "tags",
                                category: {
                                    category_url: "projects",
                                    category_name: "project",
                                },
                            },
                        },
                    },
                    section_2: {
                        title: "Coursework",
                        section_id: "coursework",
                        children: {
                            portfolioOverview: {
                                list: getTaggedContent("courseworks"),
                                parentPage: "portfolio_overview",
                                category: {
                                    category_url: "coursework",
                                    category_name: "coursework",
                                },
                            },
                        },
                    },
                    section_3: {
                        title: "Posts",
                    },
                    section_4: {
                        title: "Snippets",
                    },
                    section_5: {
                        title: "Book Notes",
                    },
                },
            },
        },
    };
}
