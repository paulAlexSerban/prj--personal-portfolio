import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import PostsOverview from "@/core/library/organisms/PostsOverview.organism";
import Main from "@/core/library/organisms/Main.organism";
import Section from "@/core/library/organisms/Section.organism";

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
                    headingTitle={pageContent.section_1.title}
                    sectionId={pageContent.section_1.section_id}
                    subheadingText={pageContent.section_1.subheading}
                >
                    <PostsOverview
                        blogList={
                            pageContent.section_1.children.postsOverview.list
                        }
                        parentPage={
                            pageContent.section_1.children.postsOverview
                                .parent_page
                        }
                        category={
                            pageContent.section_1.children.postsOverview
                                .category
                        }
                    />
                </Section>
                <Section
                    headingTitle={pageContent.section_2.title}
                    sectionId={pageContent.section_2.section_id}
                    subheadingText={pageContent.section_2.subheading}
                >
                    <PostsOverview
                        blogList={
                            pageContent.section_2.children.postsOverview.list
                        }
                        parentPage={
                            pageContent.section_2.children.postsOverview
                                .parent_page
                        }
                        category={
                            pageContent.section_2.children.postsOverview
                                .category
                        }
                    />
                </Section>
                <Section
                    headingTitle={pageContent.section_3.title}
                    sectionId={pageContent.section_3.section_id}
                    subheadingText={pageContent.section_3.subheading}
                >
                    <PostsOverview
                        blogList={
                            pageContent.section_3.children.postsOverview.list
                        }
                        parentPage={
                            pageContent.section_3.children.postsOverview
                                .parent_page
                        }
                        category={
                            pageContent.section_3.children.postsOverview
                                .category
                        }
                    />
                </Section>
            </Main>
            <Footer socialMediaLinks={siteProps.socialMediaLinks} />
        </div>
    );
}

export default BlogTemplate;
