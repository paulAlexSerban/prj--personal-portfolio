import { useId } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const PostsOverview = dynamic(() => import("@/core/library/organisms/PostsOverview.organism"));

import { base } from "@/styles/templates/blog.module.scss";
function BlogTemplate({ pageContent, siteProps }) {
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
        <Section
          headingTitle={pageContent.section_posts.title}
          sectionId={pageContent.section_posts.section_id}
          subheadingText={pageContent.section_posts.subheading}
        >
          <PostsOverview
            blogList={pageContent.section_posts.children.postsOverview.list}
            parentPage={pageContent.section_posts.children.postsOverview.parent_page}
            category={pageContent.section_posts.children.postsOverview.category}
          />
        </Section>
        <Section
          headingTitle={pageContent.section_booknotes.title}
          sectionId={pageContent.section_booknotes.section_id}
          subheadingText={pageContent.section_booknotes.subheading}
        >
          <PostsOverview
            blogList={pageContent.section_booknotes.children.postsOverview.list}
            parentPage={pageContent.section_booknotes.children.postsOverview.parent_page}
            category={pageContent.section_booknotes.children.postsOverview.category}
          />
        </Section>
        <Section
          headingTitle={pageContent.section_snippets.title}
          sectionId={pageContent.section_snippets.section_id}
          subheadingText={pageContent.section_snippets.subheading}
        >
          <PostsOverview
            blogList={pageContent.section_snippets.children.postsOverview.list}
            parentPage={pageContent.section_snippets.children.postsOverview.parent_page}
            category={pageContent.section_snippets.children.postsOverview.category}
          />
        </Section>
      </Main>
      <Footer socialMediaLinks={siteProps.socialMediaLinks} />
    </div>
  );
}

export default BlogTemplate;
