import Head from "next/head";
import dynamic from "next/dynamic";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import content from "@/content/dist/pages/blog/index.json";
import ContentRepository from "@/core/utils/ContentRepository";
import { trimPageDescription } from "@/core/utils/TextUtils";

const GenericTemplate = dynamic(() => import("@/core/system/templates/Generic.template.js"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PostsOverview = dynamic(() => import("@/core/library/organisms/PostsOverview.organism"));

function PortfolioPage() {
    const pageContent = usePageProps();
    const { title, pageDescription, main } = pageContent;
    const { icons, socialMediaLinks } = useSiteProps();

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
                    socialMediaLinks={socialMediaLinks}
                />
                <Section
                    headingTitle={main.section__posts.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__posts.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__posts.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
                <Section
                    headingTitle={main.section__booknotes.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__booknotes.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__booknotes.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
                <Section
                    headingTitle={main.section__snippets.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__snippets.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__snippets.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
            </GenericTemplate>
        </>
    );
}

export default function Portfolio({ pageContent }) {
    return (
        <PageProvider value={pageContent}>
            <PortfolioPage />
        </PageProvider>
    );
}

export async function getStaticProps() {
    const contentRepository = new ContentRepository('blog/');
    await contentRepository.init();

    const posts = await contentRepository.pinnedContent.posts;
    const booknotes = await contentRepository.pinnedContent.booknotes;
    const snippets = await contentRepository.pinnedContent.snippets;

    const postsFrontmatter = posts.map((post) => post.content.frontmatter);
    const booknotesFrontmatter = booknotes.map((booknote) => booknote.content.frontmatter);
    const snippetsFrontmatter = snippets.map((snippet) => snippet.content.frontmatter);

    content.main.section__posts.content[1].children[0].content.list = postsFrontmatter;
    content.main.section__booknotes.content[1].children[0].content.list = booknotesFrontmatter;
    content.main.section__snippets.content[1].children[0].content.list = snippetsFrontmatter;

    return {
        props: {
            pageContent: content,
        },
    };
}
