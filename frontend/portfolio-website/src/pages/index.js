import Head from "next/head";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import dynamic from "next/dynamic";
import { Heading, Paragraph } from "@/core/library/atoms/typography";
import GenericTemplate from "@/core/templates/Generic.template";
import LinkList from "@/core/library/molecules/LinkList.molecule";
import content from "@/content/dist/pages/index.json";
import ScrollVisibility from "@/core/library/organisms/hoc/ScrollVisibility";

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
                    pageTitle={main.heroBanner.pageTitle}
                    subheading={main.heroBanner.subheading}
                    // socialMediaLinks={siteProps.socialMediaLinks}
                />
                <Section headingTitle={main.section_1.title} hasSeparator={false}>
                    <Paragraph>{main.section_1.content.paragraph_1}</Paragraph>
                    <Heading level={3}>{main.section_1.content.heading_1}</Heading>
                    <LinkList links={socialMediaLinks} />
                </Section>{" "}
                <Section headingTitle={main.section_1.title} hasSeparator={false}>
                    <Paragraph>{main.section_1.content.paragraph_1}</Paragraph>
                    <Heading level={3}>{main.section_1.content.heading_1}</Heading>
                    <LinkList links={socialMediaLinks} />
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
    return {
        props: {
            pageContent: content,
        },
    };
}
