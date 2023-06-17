import Head from 'next/head';
import dynamic from 'next/dynamic';
import ContentRepository from '@/core/utils/ContentRepository';
import getSkillList from '@/core/utils/getSkillList';
import GenericTemplate from '@/core/templates/Generic.template';

const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const Section = dynamic(() => import('@/core/library/organisms/Section.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));
const SkillsOverview = dynamic(() => import('@/core/library/organisms/SkillsOverview.organism'));
const ContactSection = dynamic(() => import('@/core/library/organisms/ContactSection.organism'));
const TextArticle = dynamic(() => import('@/core/library/molecules/TextArticle.molecule'));
import trimPageDescription from '@/core/utils/trimPageDescription';
import sortByProperty from '@/core/utils/sortByProperty';

export default function LandingPage({ siteProps, pageContent }) {
  const { pageDescription, main, mainSkills } = pageContent;
  const {heroBanner, section_myProjects, section_aboutMe, section_mySkills, section_contactMe} = main;
  const { socialMediaLinks } = siteProps;

  return (
    <>
      <Head>
        <title>{siteProps.title}</title>
        <meta name="description" content={trimPageDescription(pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>

      <GenericTemplate siteProps={siteProps}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={siteProps.socialMediaLinks}
        />

        <Section headingTitle={section_myProjects.title} sectionId={section_myProjects.section_id}>
          <ContentTeaserList content={section_myProjects.children.projectsOverview}/>
        </Section>

        <Section headingTitle={section_aboutMe.title} sectionId={section_aboutMe.section_id}>
          <TextArticle
            paragraphs={section_aboutMe.children.textArticle.paragraphs}
            colWidth={section_aboutMe.children.textArticle.colWidth}
          />
        </Section>

        <Section headingTitle={section_mySkills.title} sectionId={section_mySkills.section_id}>
          <SkillsOverview mainSkills={mainSkills} skillGallery={section_mySkills.children.skillsOverview.skills} />
        </Section>
        <Section headingTitle={section_contactMe.title} sectionId={section_contactMe.section_id}>
          <ContactSection socialMediaLinks={socialMediaLinks} />
        </Section>
      </GenericTemplate>
    </>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();

  const projects =  await contentRepository.getFilteredContent('projects', ['pinned', 'status'], {
    status: 'published',
  });
 sortByProperty(projects, ['frontmatter', 'priority'])

  return {
    props: {
      pageContent: {
        pageDescription:
          'Web-development portfolio of Paul Serban featuring top-notch web development projects and insightful web development blog-posts. Discover innovative web apps and scalable enterprise solutions.',

        mainSkills: [
          { name: 'JavaScript', iconName: 'javascript' },
          { name: 'React.js', iconName: 'reactjs' },
          { name: 'Node.js', iconName: 'nodejs' },
          { name: 'Docker', iconName: 'docker' },
          { name: 'AWS', iconName: 'aws' },
          { name: 'Bash/Shell', iconName: 'bash_shell' },
          { name: 'Linux', iconName: 'linux' },
        ],
        main: {
          heroBanner: {
            pageTitle: 'Welcome!',
            subheading:
              "I'm Paul, a highly skilled Front-end Software Engineer proficient in Front-end development with a passion for building dynamic and user-friendly web applications.",
          },
          section_aboutMe: {
            title: 'About Me',
            section_id: 'about_me',
            children: {
              textArticle: {
                colWidth: 8,
                paragraphs: [
                  "As a highly motivated and accomplished web developer, I am deeply passionate about crafting innovative and visually stunning web applications that offer seamless user experiences. With extensive knowledge in front-end technologies, JavaScript, and JAMStack development, I excel in utilizing React and other cutting-edge technologies to develop top-tier solutions tailored to client requirements.",
                  "Throughout my diverse career, I have successfully tackled projects ranging from bespoke small business websites to large-scale, sophisticated e-commerce platforms. My strong collaborative skills enable me to work effectively within teams, understand clients' distinct needs, and deliver tailored solutions that adhere to timelines and budget constraints.",
                  "As a developer, I thrive on embracing new challenges and opportunities for growth. I am perpetually exploring new frameworks and libraries, architecting innovative systems, and staying well-informed about emerging technologies, all in the pursuit of expanding my skill set.",
                  "In my professional journey, I consider continuous learning and growth as the driving forces behind my passion for development. As I advance my skills and broaden my portfolio, I am eager to embark on new projects and redefine the possibilities in the realm of web development.",
                ],
              },
            },
          },
          section_myProjects: {
            title: 'My Projects',
            section_id: 'my_projects',
            children: {
              projectsOverview: {
                list: sortByProperty(projects, ['frontmatter', 'priority']),
                parentPage: 'landing',
                section: 'portfolio',
                category: {
                  category_url: 'projects',
                  category_name: 'projects',
                },
              },
            },
          },
          section_mySkills: {
            title: 'My Skills',
            section_id: 'my_skills',
            children: {
              skillsOverview: { skills: getSkillList() },
            },
          },
          section_contactMe: {
            title: 'Contact Me',
            section_id: 'contact_me',
            children: { contactSection: {} },
          },
        },
      },
    },
    revalidate: 60,
  };
}
