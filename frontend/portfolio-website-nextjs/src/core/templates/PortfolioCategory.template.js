import { useId } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PortfolioOverview = dynamic(() => import("@/core/library/organisms/PortfolioOverview.organism"));

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
          <PortfolioOverview content={pageContent.main.section.children.portfolioOverview} showViewAllButton={false} />
        </Section>
      </Main>
      <Footer socialMediaLinks={siteProps.socialMediaLinks} />
    </div>
  );
}

export default PortfolioCategoryTemplate;
