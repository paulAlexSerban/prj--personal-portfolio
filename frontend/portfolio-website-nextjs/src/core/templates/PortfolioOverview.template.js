import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import Section from "@/core/library/organisms/Section.organism";
import PortfolioOverview from "@/core/library/organisms/PortfolioOverview.organism";
import Main from "@/core/library/organisms/Main.organism";

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
