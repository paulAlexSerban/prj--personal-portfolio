import { useId } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));

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
