import Head from 'next/head';
import dynamic from 'next/dynamic';
import ContentRepository from '@/core/utils/ContentRepository';
import getSkillList from '@/core/utils/getSkillList';
import LandingTemplate from '@/core/templates/Landing.template';

const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const Section = dynamic(() => import('@/core/library/organisms/Section.organism'));
const ProjectsOverview = dynamic(() => import('@/core/library/organisms/ProjectsOverview.organism'));
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

      <LandingTemplate siteProps={siteProps}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={siteProps.socialMediaLinks}
        />

        <Section headingTitle={section_myProjects.title} sectionId={section_myProjects.section_id}>
          <ProjectsOverview content={section_myProjects.children.projectsOverview} />
        </Section>

        <Section headingTitle={section_aboutMe.title} sectionId={section_aboutMe.section_id}>
          {/* <TextArticle
            paragraphs={section_aboutMe.children.textArticle.paragraphs}
            colWidth={section_aboutMe.children.textArticle.colWidth}
          /> */}
        </Section>

        <Section headingTitle={section_mySkills.title} sectionId={section_mySkills.section_id}>
          {/* <SkillsOverview mainSkills={mainSkills} skillGallery={section_mySkills.children.skillsOverview.skills} /> */}
        </Section>
        <Section headingTitle={section_contactMe.title} sectionId={section_contactMe.section_id}>
          {/* <ContactSection socialMediaLinks={socialMediaLinks} /> */}
        </Section>
      </LandingTemplate>
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
                  'I am a driven and accomplished web developer with a passion for creating intuitive and innovative web applications. My expertise includes an in-depth understanding of front-end technologies, JavaScript, and JAMStack development, as well as proficiency in React and other cutting-edge technologies.',
                  'Throughout my career, I have had the opportunity to work on a diverse range of projects, from small business websites to large-scale e-commerce platforms. I take pride in my ability to collaborate effectively with teams, understand the unique needs of clients, and deliver  high-quality solutions that are delivered on time and within budget.',
                  "Continuous learning and growth is a core aspect of my professional journey. When I'm not coding, you can find me staying up to date with the latest technologies,experimenting with new frameworks and libraries, or designing new systems. I am always eager to learn and grow as a developer, and I am excited to continue building my  skills and expanding my portfolio.",
                ],
              },
            },
          },
          section_myProjects: {
            title: 'My Projects',
            section_id: 'my_projects',
            children: {
              projectsOverview: {
                projects: sortByProperty(projects, ['frontmatter', 'priority']),
                parentPage: 'landing',
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
