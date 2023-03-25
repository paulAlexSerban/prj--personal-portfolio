import { useId } from 'react';
import dynamic from 'next/dynamic';
import { base } from '@/styles/templates/landing.module.scss';

const Header = dynamic(() => import('@/core/library/organisms/Header.organism'));
const Footer = dynamic(() => import('@/core/library/organisms/Footer.organism'));
const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const Main = dynamic(() => import('@/core/library/organisms/Main.organism'));
const Section = dynamic(() => import('@/core/library/organisms/Section.organism'));
const ProjectsOverview = dynamic(() => import('@/core/library/organisms/ProjectsOverview.organism'));
const SkillsOverview = dynamic(() => import('@/core/library/organisms/SkillsOverview.organism'));
const ContactSection = dynamic(() => import('@/core/library/organisms/ContactSection.organism'));
const TextArticle = dynamic(() => import('@/core/library/molecules/TextArticle.molecule'));

function LandingTemplate({ children, pageContent, siteProps }) {
  const ID = useId();
  const hasProjects = pageContent.main.section_myProjects.children.projectsOverview.projects.length > 0;

  return (
    <div id={ID} className={base}>
      <Header siteNavLinks={siteProps.siteNavLinks} />
      <Main>
        <HeroBanner
          pageTitle={pageContent.main.heroBanner.pageTitle}
          subheading={pageContent.main.heroBanner.subheading}
          socialMediaLinks={siteProps.socialMediaLinks}
        />
        {hasProjects && (
          <Section
            headingTitle={pageContent.main.section_myProjects.title}
            sectionId={pageContent.main.section_myProjects.section_id}
          >
            <ProjectsOverview content={pageContent.main.section_myProjects.children.projectsOverview} />
          </Section>
        )}
        <Section
          headingTitle={pageContent.main.section_aboutMe.title}
          sectionId={pageContent.main.section_aboutMe.section_id}
        >
          <TextArticle
            paragraphs={pageContent.main.section_aboutMe.children.textArticle.paragraphs}
            colWidth={pageContent.main.section_aboutMe.children.textArticle.colWidth}
          />
        </Section>

        <Section
          headingTitle={pageContent.main.section_mySkills.title}
          sectionId={pageContent.main.section_mySkills.section_id}
        >
          <SkillsOverview
            mainSkills={pageContent.mainSkills}
            skillGallery={pageContent.main.section_mySkills.children.skillsOverview.skills}
          />
        </Section>
        <Section
          headingTitle={pageContent.main.section_contactMe.title}
          sectionId={pageContent.main.section_contactMe.section_id}
        >
          <ContactSection socialMediaLinks={siteProps.socialMediaLinks} />
        </Section>
      </Main>
      {/* on Landing template, the social media links in the footer will be added after contact form will be implemented*/}
      {/* <Footer socialMediaLinks={siteProps.socialMediaLinks} /> */}
      <Footer />
    </div>
  );
}

export default LandingTemplate;
