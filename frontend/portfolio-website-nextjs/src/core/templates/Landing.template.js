import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";

import { base } from "@/styles/templates/landing.module.scss";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import Main from "@/core/library/organisms/Main.organism";
import FlexGrid from "@/core/library/layouts/FlexGrid.layout";
import Section from "@/core/library/organisms/Section.organism";
import ProjectsOverview from "@/core/library/organisms/ProjectsOverview.organism";

import TextArticle from "@/core/library/molecules/TextArticle.organism";
import SkillsOverview from "@/core/library/organisms/SkillsOverview.organism";
import ContactSection from "@/core/library/organisms/ContactSection.organism";

function LandingTemplate({ children, pageContent, siteProps }) {
    const ID = useId();

    return (
        <div id={ID} className={base}>
            <Header siteNavLinks={siteProps.siteNavLinks} />

            <Main>
                <HeroBanner
                    pageTitle={pageContent.main.heroBanner.pageTitle}
                    subheading={pageContent.main.heroBanner.subheading}
                    socialMediaLinks={siteProps.socialMediaLinks}
                />
                <Section
                    headingTitle={pageContent.main.section_1.title}
                    sectionId={pageContent.main.section_1.section_id}
                >
                    <TextArticle
                        paragraphs={
                            pageContent.main.section_1.children.textArticle
                                .paragraphs
                        }
                        colWidth={
                            pageContent.main.section_1.children.textArticle
                                .colWidth
                        }
                    />
                </Section>

                <Section
                    headingTitle={pageContent.main.section_2.title}
                    sectionId={pageContent.main.section_2.section_id}
                >
                    <ProjectsOverview
                        content={
                            pageContent.main.section_2.children.projectsOverview
                        }
                    />
                </Section>
                <Section
                    headingTitle={pageContent.main.section_3.title}
                    sectionId={pageContent.main.section_3.section_id}
                >
                    <SkillsOverview
                        mainSkills={pageContent.mainSkills}
                        skillGallery={
                            pageContent.main.section_3.children.skillsOverview.skills
                        }
                    />
                </Section>
                <Section
                    headingTitle={pageContent.main.section_4.title}
                    sectionId={pageContent.main.section_4.section_id}
                >
                    <ContactSection
                        socialMediaLinks={siteProps.socialMediaLinks}
                    />
                </Section>
            </Main>

            <Footer />
        </div>
    );
}

export default LandingTemplate;
