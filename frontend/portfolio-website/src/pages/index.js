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

function IndexPage() {
    const pageContent = useContext(IndexPageContext);
    const { title, main } = pageContent;
    const { icons, socialMediaLinks } = useSiteProps();

    const handleMouseEnter = (el) => {
        el.href = decodeFromBase64(el.getAttribute("href"));
    };

    const handleMouseLeave = (el) => {
        el.href = encodeToBase64(el.getAttribute("href"));
    };

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
                    <h3>Find me on:</h3>
                    <ul>
                        {socialMediaLinks.map((link) => {
                            const { label, href, isEncoded } = link;
                            return (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={isEncoded ? (e) => handleMouseEnter(e.target) : null}
                                        onMouseLeave={isEncoded ? (e) => handleMouseLeave(e.target) : null}
                                        onTouchStart={isEncoded ? (e) => handleMouseEnter(e.target) : null}
                                        onTouchEnd={isEncoded ? (e) => handleMouseLeave(e.target) : null}
                                    >
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
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
