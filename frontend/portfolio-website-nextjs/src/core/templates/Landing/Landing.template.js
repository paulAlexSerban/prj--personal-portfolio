import Head from "next/head";
import config from "./config";
import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import PageNavigation from "@/core/library/organisms/PageNavigation.organism";

import { base } from "@/styles/templates/landing.module.scss";

function LandingTemplate({
    title,
    keywords,
    description,
    children,
    content,
    pageProperties,
    siteNavLinks = [],
    pageNavLinks = [],
}) {
    const ID = useId();
    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteNavLinks} />
            {children}
            {/* <PageNavigation pageNavLinks={pageNavLinks} /> */}
            <Footer />
        </div>
    );
}

LandingTemplate.defaultProps = { ...config.defaultProps };

export default LandingTemplate;
