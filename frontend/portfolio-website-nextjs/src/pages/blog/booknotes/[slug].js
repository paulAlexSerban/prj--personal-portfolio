import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import PortfolioItemDetailTemplate from "@/core/templates/PortfolioItemDetail.template.js";

export default function PortfolioItemDetail({
    children,
    pageContent,
    siteProps,
    frontmatter,
}) {
    const pageTitle = [frontmatter.title, "|", siteProps.title].join(" ");
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={frontmatter.excerpt} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={siteProps.icons.favicon} />
            </Head>
            <PortfolioItemDetailTemplate
                siteNavLinks={siteProps.siteNavLinks}
                pageContent={pageContent}
                siteProps={siteProps}
                frontmatter={frontmatter}
            >
                {children}
            </PortfolioItemDetailTemplate>
        </div>
    );
}

export async function getStaticPaths() {
    const BLOG_PATH = path.join("src", "content", "booknotes");
    const blogDirs = fs.readdirSync(BLOG_PATH);

    const files = fs.readdirSync(BLOG_PATH);

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join("src", "content", "booknotes", slug + ".md"),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            pageContent: { content, slug },
        },
    };
}