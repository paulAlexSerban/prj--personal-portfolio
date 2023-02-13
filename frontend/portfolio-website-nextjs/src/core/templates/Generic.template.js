import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";

import { base } from "@/styles/templates/generic.module.scss";
function GenericTemplate({ children, siteNavLinks = [] }) {
    const ID = useId();
    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteNavLinks} />
            {children}
            <Footer socialMediaLinks={siteProps.socialMediaLinks} />
        </div>
    );
}

export default GenericTemplate;
