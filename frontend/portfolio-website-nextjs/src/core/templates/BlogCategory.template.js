import { useId } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const PostsOverview = dynamic(() => import("@/core/library/organisms/PostsOverview.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));

import { base } from "@/styles/templates/portfolioCategory.module.scss";
function BlogCatalog({ pageContent, siteProps, children }) {
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
          parentPage={pageContent.main.children.postsOverview.parent_page}
          category={pageContent.main.children.postsOverview.category}
          showViewAllButton={false}
        />
        {children}
      </Main>
      <Footer socialMediaLinks={siteProps.socialMediaLinks} />
    </div>
  );
}

export default BlogCatalog;
