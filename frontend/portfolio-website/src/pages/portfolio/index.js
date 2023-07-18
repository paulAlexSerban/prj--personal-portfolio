import Head from "next/head";
import dynamic from "next/dynamic";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import content from "@/content/dist/pages/portfolio/index.json";
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
                    headingTitle={main.section__myProjects.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__myProjects.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__myProjects.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
                <Section
                    headingTitle={main.section__coursework.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__coursework.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__coursework.content[1].children[0].content}
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
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const projects = await contentRepository.pinnedContent.projects;
    const coursework = await contentRepository.pinnedContent.coursework;
    const projectsFrontmatter = projects.map((project) => project.content.frontmatter);
    const courseworkFrontmatter = coursework.map((coursework) => coursework.content.frontmatter);
    content.main.section__myProjects.content[1].children[0].content.list = projectsFrontmatter;

    content.main.section__coursework.content[1].children[0].content.list = courseworkFrontmatter;
    return {
        props: {
            pageContent: content,
        },
    };
}
