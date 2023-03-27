import { useId } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const CaseStudyOverview = dynamic(() => import("@/core/organisms/CaseStudyOverview.organism"));
const MarkdownContainer = dynamic(() => import("@/core/molecules/MarkdownContent.molecule"));

import { base } from "@/styles/templates/blogPost.module.scss";

export default function BlogPostTemplate({ children, pageContent, siteProps, frontmatter, caseStudy }) {
  const ID = useId();
  const socialMediaLinks = [];
  if (frontmatter && frontmatter.repo_url) {
    socialMediaLinks.push({
      label: "GitHub Repository",
      icon: "github",
      href: frontmatter.repo_url,
    });
  }
  if (frontmatter && frontmatter.demo_url) {
    socialMediaLinks.push({
      label: "Live Demo",
      icon: "globe",
      href: frontmatter.demo_url,
    });
  }

  return (
    <div id={ID} className={base}>
      <Header siteNavLinks={siteProps.siteNavLinks} />

      <Main>
        <HeroBanner
          pageTitle={frontmatter.title}
          subheading={frontmatter.subheading}
          socialMediaLinks={socialMediaLinks}
          date={frontmatter.date}
          author={frontmatter.author}
          tags={frontmatter.tags}
        />
        <Section sectionId={pageContent.slug}>
          <MarkdownContainer markdownContent={pageContent.content} />
        </Section>
        {caseStudy && (
          <Section
            sectionId="casestudy_section"
            headingTitle="Case Study"
            subheadingText="Research, analysis, and problem-solving cases used to tackle
                complex challenges and provide solutions encountered developing the project
                project."
          >
            <CaseStudyOverview list={caseStudy} />
          </Section>
        )}
      </Main>
      <Footer socialMediaLinks={siteProps.socialMediaLinks} />
    </div>
  );
}
