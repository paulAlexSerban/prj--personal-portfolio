import Head from "next/head";
import dynamic from "next/dynamic";

import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import content from "@/content/dist/pages/tags/[tag].json";

import ContentRepository from "@/core/utils/ContentRepository";
import { trimPageDescription } from "@/core/utils/TextUtils";

const GenericTemplate = dynamic(() => import("@/core/system/templates/Generic.template.js"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PostsOverview = dynamic(() => import("@/core/library/organisms/PostsOverview.organism"));

function TagsPage() {
    const pageContent = usePageProps();
    const { title, pageDescription, main } = pageContent;
    const { icons } = useSiteProps();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={trimPageDescription(pageDescription)} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>

            <GenericTemplate>
                <HeroBanner
                    pageTitle={main.heroBanner.content[0].pageTitle}
                    subheading={main.heroBanner.content[1].subheading}
                />
                {main.section__projects.content[1].children[0].content.list.length > 0 && (
                    <Section headingTitle={main.section__projects.content[0].title.main}>
                        <PostsOverview
                            content={main.section__projects.content[1].children[0].content}
                            showViewAllButton={true}
                        />
                    </Section>
                )}
                {main.section__posts.content[1].children[0].content.list.length > 0 && (
                    <Section headingTitle={main.section__posts.content[0].title.main}>
                        <PostsOverview
                            content={main.section__posts.content[1].children[0].content}
                            showViewAllButton={true}
                        />
                    </Section>
                )}
                {main.section__coursework.content[1].children[0].content.list.length > 0 && (
                    <Section headingTitle={main.section__coursework.content[0].title.main}>
                        <PostsOverview
                            content={main.section__coursework.content[1].children[0].content}
                            showViewAllButton={true}
                        />
                    </Section>
                )}
                {main.section__booknotes.content[1].children[0].content.list.length > 0 && (
                    <Section headingTitle={main.section__booknotes.content[0].title.main}>
                        <PostsOverview
                            content={main.section__booknotes.content[1].children[0].content}
                            showViewAllButton={true}
                        />
                    </Section>
                )}

                {main.section__snippets.content[1].children[0].content.list.length > 0 && (
                    <Section headingTitle={main.section__snippets.content[0].title.main}>
                        <PostsOverview
                            content={main.section__snippets.content[1].children[0].content}
                            showViewAllButton={true}
                        />
                    </Section>
                )}
            </GenericTemplate>
        </>
    );
}

export default function Tags({ pageContent }) {
    return (
        <PageProvider value={pageContent}>
            <TagsPage />
        </PageProvider>
    );
}

export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const tags = await contentRepository.tags;
    const paths = Object.entries(tags).map(([tag, name]) => ({
        params: {
            tag,
            name,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { tag, name } }) {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const tags = await contentRepository.tags;
    const tagName = tags[tag];
    const projects = await contentRepository.findByTag("projects", tagName);
    const coursework = await contentRepository.findByTag("coursework", tagName);
    const booknotes = await contentRepository.findByTag("booknotes", tagName);
    const snippets = await contentRepository.findByTag("snippets", tagName);
    const posts = await contentRepository.findByTag("posts", tagName);

    content.main.heroBanner.content[0].pageTitle = `#${tagName}`;
    content.main.heroBanner.content[1].subheading = content.main.heroBanner.content[1].subheading.replace(
        "{0}",
        tagName
    );

    const projectsFrontmatter = projects.map((project) => project.content.frontmatter);
    const courseworkFrontmatter = coursework.map((course) => course.content.frontmatter);
    const booknotesFrontmatter = booknotes.map((booknote) => booknote.content.frontmatter);
    const snippetsFrontmatter = snippets.map((snippet) => snippet.content.frontmatter);
    const postsFrontmatter = posts.map((post) => post.content.frontmatter);

    content.main.section__projects.content[1].children[0].content.list = projectsFrontmatter.slice(0, 9);
    content.main.section__coursework.content[1].children[0].content.list = courseworkFrontmatter.slice(0, 9);
    content.main.section__booknotes.content[1].children[0].content.list = booknotesFrontmatter.slice(0, 9);
    content.main.section__snippets.content[1].children[0].content.list = snippetsFrontmatter.slice(0, 9);
    content.main.section__posts.content[1].children[0].content.list = postsFrontmatter.slice(0, 9);

    return {
        props: {
            pageContent: content,
        },
    };
}
