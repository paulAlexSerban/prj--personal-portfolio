import { useId } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PortfolioOverview = dynamic(() => import("@/core/library/organisms/PortfolioOverview.organism"));

import { base } from "@/styles/templates/portfolioOverview.module.scss";

export default function PortfolioOverviewTemplate({ pageContent, siteProps }) {
    const ID = useId();

    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteProps.siteNavLinks} />

            <Main>
                <HeroBanner
                    pageTitle={pageContent.main.heroBanner.pageTitle}
                    subheading={pageContent.main.heroBanner.subheading}
                    socialMediaLinks={pageContent.main.socialMediaLinks}
                />
                <Section
                    headingTitle={pageContent.main.section_1.title}
                    sectionId={pageContent.main.section_1.section_id}
                    subheadingText={pageContent.main.section_1.subheading}
                >
                    <PortfolioOverview
                        content={
                            pageContent.main.section_1.children
                                .portfolioOverview
                        }
                    />
                </Section>

                <Section
                    headingTitle={pageContent.main.section_3.title}
                    sectionId={pageContent.main.section_3.section_id}
                    subheadingText={pageContent.main.section_3.subheading}
                >
                    <PortfolioOverview
                        content={
                            pageContent.main.section_3.children
                                .portfolioOverview
                        }
                    />
                </Section>
            </Main>
            <Footer socialMediaLinks={siteProps.socialMediaLinks} />
        </div>
    );
}
