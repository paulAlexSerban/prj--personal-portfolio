import { useId } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));

const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));

import { base } from "@/styles/templates/portfolioCategory.module.scss";
function BlogCatalog({ pageContent, siteProps, children }) {
  const ID = useId();

  return (
    <div id={ID} className={base}>
      <Header siteNavLinks={siteProps.siteNavLinks} />
      <Main>

        {children}
      </Main>
      <Footer socialMediaLinks={siteProps.socialMediaLinks} />
    </div>
  );
}

export default BlogCatalog;
