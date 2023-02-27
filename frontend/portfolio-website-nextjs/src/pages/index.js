import Head from "next/head";
import { useId } from "react";
import getContent from "@/core/utils/content/getContent";
import getSkillList from "@/core/utils/content/getSkillList";
import LandingTemplate from "@/core/templates/Landing.template";
import {  Roboto } from 'next/font/google';

const roboto = Roboto({
	display: 'swap',
	subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

export default function LandingPage({ siteProps, pageContent }) {
  const ID = useId();
  return (
    <div id={ID} className={roboto.className}>
        
      <Head>
        <title>{siteProps.title}</title>
        <meta name="description" content={pageContent.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>

      <LandingTemplate siteProps={siteProps} pageContent={pageContent}></LandingTemplate>
    </div>
  );
}

export async function getStaticProps() {
  const pinnedProjects = getContent().projects.filter((project) => {
    return project.frontmatter.pinned && project.frontmatter.status === "published";
  });

  return {
    props: {
      pageContent: {
        pageDescription:
          "Web-development portfolio of Paul Serban featuring top-notch web development projects and insightful web development blog-posts. Discover innovative web apps and scalable enterprise solutions.",

        mainSkills: [
          { name: "JavaScript", iconName: "javascript" },
          // { name: "React.js", iconName: "reactjs" },
          // { name: "Node.js", iconName: "nodejs" },
          // { name: "Docker", iconName: "docker" },
          // { name: "AWS", iconName: "aws" },
          { name: "Bash/Shell", iconName: "bash_shell" },
          { name: "Linux", iconName: "linux" },
        ],
        main: {
          heroBanner: {
            pageTitle: "Welcome!",
            subheading:
              "I'm Paul, a highly skilled Front-end Software Engineer proficient in Front-end development with a passion for building dynamic and user-friendly web applications.",
          },
          section_1: {
            title: "About Me",
            section_id: "about_me",
            children: {
              textArticle: {
                colWidth: 8,
                paragraphs: [
                  "I am a driven and accomplished web developer with a passion for creating intuitive and innovative web applications. My expertise includes an in-depth understanding of front-end technologies, JavaScript, and JAMStack development, as well as proficiency in React and other cutting-edge technologies.",
                  "Throughout my career, I have had the opportunity to work on a diverse range of projects, from small business websites to large-scale e-commerce platforms. I take pride in my ability to collaborate effectively with teams, understand the unique needs of clients, and deliver  high-quality solutions that are delivered on time and within budget.",
                  "Continuous learning and growth is a core aspect of my professional journey. When I'm not coding, you can find me staying up to date with the latest technologies,experimenting with new frameworks and libraries, or designing new systems. I am always eager to learn and grow as a developer, and I am excited to continue building my  skills and expanding my portfolio.",
                ],
              },
            },
          },
          section_2: {
            title: "My Projects",
            section_id: "my_projects",
            children: {
              projectsOverview: {
                projects: pinnedProjects,
                parentPage: "landing",
                category: {
                  category_url: "projects",
                  category_name: "projects",
                },
              },
            },
          },
          section_3: {
            title: "My Skills",
            section_id: "my_skills",
            children: {
              skillsOverview: { skills: getSkillList() },
            },
          },
          section_4: {
            title: "Contact Me",
            section_id: "contact_me",
            children: { contactSection: {} },
          },
        },
      },
    },
    revalidate: 60,
  };
}
