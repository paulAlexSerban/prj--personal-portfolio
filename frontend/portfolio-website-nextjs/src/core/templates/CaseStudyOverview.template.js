import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";

import { base } from "@/styles/templates/caseStudyOverview.module.scss";

function CaseStudyOverviewTemplate({ children, siteNavLinks = [] }) {
    const ID = useId();
    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteNavLinks} />
            {children}
            <h1>CaseStudy Overview Template</h1>
            <Footer socialMediaLinks={siteProps.socialMediaLinks} />
        </div>
    );
}

export default CaseStudyOverviewTemplate;
