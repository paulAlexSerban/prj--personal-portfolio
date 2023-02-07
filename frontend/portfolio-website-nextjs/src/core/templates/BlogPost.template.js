import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";

import { base } from "@/styles/templates/blogPost.module.scss";

function BlogPostTemplate({ children, siteNavLinks = [] }) {
    const ID = useId();
    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteNavLinks} />
            {children}
            <h1>BlogPost  Template</h1>
            <Footer />
        </div>
    );
}

export default BlogPostTemplate;