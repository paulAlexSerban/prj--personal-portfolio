import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import PortfolioOverview from "@/core/library/organisms/PortfolioOverview.organism";
import Main from "@/core/library/organisms/Main.organism";
import Section from "@/core/library/organisms/Section.organism";

import { base } from "@/styles/templates/portfolioCategory.module.scss";
function PortfolioCategoryTemplate({ pageContent, siteProps }) {
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
                <Section>
                    <PortfolioOverview
                        content={
                            pageContent.main.section.children.portfolioOverview
                        }
                        showViewAllButton={false}
                    />
                </Section>
            </Main>
            <Footer />
        </div>
    );
}

export default PortfolioCategoryTemplate;
