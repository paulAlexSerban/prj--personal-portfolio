import GenericTemplate from "@/core/templates/Generic.template";
import Head from "next/head";
import { useSiteProps } from "@/context/SitePropsContext";
import { IndexPageProvider, IndexPageContext } from "@/context/pages/IndexPageContext"; // Correct the path accordingly
import { useContext } from "react";
import dynamic from "next/dynamic";
import { Paragraph } from "@/core/library/atoms/typography";
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
import { decodeFromBase64, encodeToBase64 } from "@/core/utils/base64";

import { Heading } from "@/core/library/atoms/typography";
import LinkList from "@/core/library/molecules/LinkList.molecule";
function IndexPage() {
    const pageContent = useContext(IndexPageContext);
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
                <Section
                    headingTitle={main.section_1.title}
                    subheadingText={"Note: Website is under construction!"}
                    hasSeparator={false}
                >
                    <Paragraph>{main.section_1.content.paragraph_1}</Paragraph>
                    <Paragraph>{main.section_1.content.paragraph_2}</Paragraph>
                    <Heading level={3}>Find me on:</Heading>
                    <LinkList links={socialMediaLinks} />
                </Section>
            </GenericTemplate>
        </>
    );
}

export default function Index() {
    return (
        <IndexPageProvider>
            <IndexPage />
        </IndexPageProvider>
    );
}
