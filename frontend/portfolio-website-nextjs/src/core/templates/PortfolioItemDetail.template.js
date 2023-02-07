import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";
import highlight from "markdown-it-highlightjs";
import bracketed from "markdown-it-bracketed-spans";
import Main from "@/core/organisms/Main.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import Section from "@/core/library/organisms/Section.organism";
import CaseStudyOverview from "@/core/organisms/CaseStudyOverview.organism";

import { base } from "@/styles/templates/portfolioItemDetail.module.scss";

export default function PortfolioItemDetailTemplate({
    children,
    pageContent,
    siteProps,
    frontmatter,
    caseStudy,
}) {
    const ID = useId();
    const marked = new MarkdownIt();
    marked.use(highlight, {});
    marked.use(attrs);
    marked.use(bracketed);

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
                    subheading={frontmatter.excerpt}
                    socialMediaLinks={socialMediaLinks}
                />
                <Section sectionId={pageContent.slug}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked.render(pageContent.content),
                        }}
                    ></div>
                </Section>
                {caseStudy && (
                    <Section
                        sectionId="casestudy_section"
                        headingTitle="Case Study"
                        subheadingText="Research, analysis, and problem-solving cases used to tackle
                complex challenges and provide solutions encountered in the
                project."
                    >
                        <CaseStudyOverview list={caseStudy} />
                    </Section>
                )}
            </Main>
            <Footer />
        </div>
    );
}
