import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import PostsOverview from "@/core/library/organisms/PostsOverview.organism";
import Main from "@/core/library/organisms/Main.organism";

import { base } from "@/styles/templates/portfolioCategory.module.scss";
function BlogCatalog({ pageContent, siteProps }) {
    const ID = useId();

    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteProps.siteNavLinks} />

            <Main>
                <HeroBanner
                    pageTitle={pageContent.heroBanner.pageTitle}
                    subheading={pageContent.heroBanner.subheading}
                    socialMediaLinks={siteProps.socialMediaLinks}
                />
                <PostsOverview
                    blogList={pageContent.main.children.postsOverview.list}
                    parentPage={
                        pageContent.main.children.postsOverview.parent_page
                    }
                    category={pageContent.main.children.postsOverview.category}
                    showViewAllButton={false}
                />
            </Main>
            <Footer />
        </div>
    );
}

export default BlogCatalog;
