import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import Main from "@/core/library/organisms/Main.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import Section from "@/core/library/organisms/Section.organism";
import PortfolioOverview from "@/core/library/organisms/PortfolioOverview.organism";
import PostsOverview from "@/core/library/organisms/PostsOverview.organism";
import { base } from "@/styles/templates/tagPreview.module.scss";
function TagPreview({ pageContent, siteProps }) {
    const ID = useId();
    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteProps.siteNavLinks} />
            <Main>
                <HeroBanner
                    pageTitle={pageContent.main.heroBanner.pageTitle}
                    subheading={pageContent.main.heroBanner.subheading}
                />
                {pageContent.main.section_1.children.portfolioOverview.projects
                    .length > 0 && (
                    <Section
                        headingTitle={pageContent.main.section_1.title}
                        sectionId={pageContent.main.section_1.section_id}
                        subheadingText={pageContent.main.section_1.subheading}
                    >
                        <PortfolioOverview
                            content={
                                pageContent.main.section_1.children
                                    .portfolioOverview
                            }
                        />
                    </Section>
                )}

                {pageContent.main.section_2.children.portfolioOverview.projects
                    .length > 0 && (
                    <Section
                        headingTitle={pageContent.main.section_2.title}
                        sectionId={pageContent.main.section_2.section_id}
                        subheadingText={pageContent.main.section_2.subheading}
                    >
                        <PortfolioOverview
                            content={
                                pageContent.main.section_2.children
                                    .portfolioOverview
                            }
                        />
                    </Section>
                )}

                {pageContent.main.section_3.children.postsOverview.list.length >
                    0 && (
                    <Section
                        headingTitle={pageContent.main.section_3.title}
                        sectionId={pageContent.main.section_3.section_id}
                        subheadingText={pageContent.main.section_3.subheading}
                    >
                        <PostsOverview
                            blogList={
                                pageContent.main.section_3.children
                                    .postsOverview.list
                            }
                            parentPage={
                                pageContent.main.section_3.children
                                    .postsOverview.parent_page
                            }
                            category={
                                pageContent.main.section_3.children
                                    .postsOverview.category
                            }
                        />
                    </Section>
                )}

                {pageContent.main.section_4.children.postsOverview.list.length >
                    0 && (
                    <Section
                        headingTitle={pageContent.main.section_4.title}
                        sectionId={pageContent.main.section_4.section_id}
                        subheadingText={pageContent.main.section_4.subheading}
                    >
                        <PostsOverview
                            blogList={
                                pageContent.main.section_4.children
                                    .postsOverview.list
                            }
                            parentPage={
                                pageContent.main.section_4.children
                                    .postsOverview.parent_page
                            }
                            category={
                                pageContent.main.section_4.children
                                    .postsOverview.category
                            }
                        />
                    </Section>
                )}

                {pageContent.main.section_5.children.postsOverview.list > 0 && (
                    <Section
                        headingTitle={pageContent.main.section_5.title}
                        sectionId={pageContent.main.section_5.section_id}
                        subheadingText={pageContent.main.section_5.subheading}
                    >
                        <PostsOverview
                            blogList={
                                pageContent.main.section_5.children
                                    .postsOverview.list
                            }
                            parentPage={
                                pageContent.main.section_5.children
                                    .postsOverview.parent_page
                            }
                            category={
                                pageContent.main.section_5.children
                                    .postsOverview.category
                            }
                        />
                    </Section>
                )}
            </Main>

            <Footer socialMediaLinks={siteProps.socialMediaLinks} />
        </div>
    );
}

export default TagPreview;
