import Head from "next/head";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import dynamic from "next/dynamic";
import { Heading, Paragraph } from "@/core/library/atoms/typography";
import GenericTemplate from "@/core/templates/Generic.template";
import LinkList from "@/core/library/molecules/LinkList.molecule";
import content from "@/content/dist/pages/index.json";
import SkillsShowcase from "@/core/library/organisms/SkillShowcase.organism";
import SkillGallery from "@/core/library/organisms/SkillGallery.organism";
import PostsOverview from "@/core/library/organisms/PostsOverview.organism";

const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));

function IndexPage() {
    const pageContent = usePageProps();
    const { title, main } = pageContent;
    const { icons, socialMediaLinks } = useSiteProps();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <HeroBanner
                    pageTitle={main.heroBanner.content[0].pageTitle}
                    subheading={main.heroBanner.content[1].subheading}
                    // socialMediaLinks={siteProps.socialMediaLinks}
                />
                <Section headingTitle={main.section__aboutMe.content[0].title.main} hasSeparator={false}>
                    <Paragraph>{main.section__aboutMe.content[1].children[0].content[0].text}</Paragraph>
                    <Heading level={3}>{main.section__aboutMe.content[1].children[1].content[0].main}</Heading>
                    <LinkList links={socialMediaLinks} />
                </Section>
                <Section headingTitle={main.section__mySkills.content[0].title.main} hasSeparator={false}>
                    <SkillsShowcase list={main.section__mySkills.content[1].children[0].content} />
                    <SkillGallery list={main.section__mySkills.content[1].children[1].content} />
                </Section>
                <Section
                    headingTitle={main.section__myProjects.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__myProjects.content[0].title.main}
                >
                    <PostsOverview
                        content={main.section__myProjects.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
            </GenericTemplate>
        </>
    );
}

export default function Index({ pageContent }) {
    return (
        <PageProvider value={pageContent}>
            <IndexPage />
        </PageProvider>
    );
}

// Fetch data at build time
export async function getStaticProps() {
    content.main.section__myProjects.content[1].children[0].content.list = [
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
        {
            title: "Lorem project title",
            subheading: "Subheading lorem project",
            type: "project type",
            tags: [
                "javascript",
                "frontend",
                "reactjs",
                "scss",
                "html",
                "webpack",
                "handlebars",
            ],
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
            repo_url: "https://github.com/paulAlexSerban",
            demo_url: "https://loremProjects.eu",
            slug: "loremproject",
        },
    ]
    return {
        props: {
            pageContent: content,
        },
    };
}
