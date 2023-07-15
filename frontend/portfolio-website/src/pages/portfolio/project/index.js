import Head from "next/head";
import dynamic from "next/dynamic";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import content from "@/content/dist/pages/portfolio/project/index.json";
import ContentRepository from "@/core/utils/ContentRepository";
import { trimPageDescription } from "@/core/utils/TextUtils";

const GenericTemplate = dynamic(() => import("@/core/templates/Generic.template.js"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PostsOverview = dynamic(() => import("@/core/library/organisms/PostsOverview.organism"));

function ProjectPage() {
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
                <Section>
                    <PostsOverview
                        content={main.section__myProjects.content[0].children[0].content}
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
            <ProjectPage />
        </PageProvider>
    );
}

export async function getStaticProps() {
    const contentRepository = new ContentRepository('portfolio/project/');
    await contentRepository.init();
    const projects = await contentRepository.sortedContent.projects;
    const projectsFrontmatter = projects.map((project) => project.content.frontmatter);
    content.main.section__myProjects.content[0].children[0].content.list = projectsFrontmatter;

    return {
        props: {
            pageContent: content,
        },
    };
}
