import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';

const GenericTemplate = dynamic(() => import('@/core/templates/Generic.template.js'));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const ContentTeaserList = dynamic(() => import("@/core/library/organisms/ContentTeaserList.organism"));

export default function Portfolio({ siteProps, pageContent }) {
  const pageTitle = ['Portfolio', '|', siteProps.title].join(' ');
  const { main, socialMediaLinks, pageDescription } = pageContent;
  const {heroBanner, section_projectOverview, section_courseworkOverview} = main;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>

      <GenericTemplate siteProps={siteProps} pageContent={pageContent}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={socialMediaLinks}
        />
        <Section
          headingTitle={section_projectOverview.title}
          sectionId={section_projectOverview.section_id}
          subheadingText={section_projectOverview.subheading}
        >
          <ContentTeaserList content={section_projectOverview.children.portfolioOverview} />
        </Section>

        <Section
          headingTitle={section_courseworkOverview.title}
          sectionId={section_courseworkOverview.section_id}
          subheadingText={section_courseworkOverview.subheading}
        >
          <ContentTeaserList content={section_courseworkOverview.children.portfolioOverview} />
        </Section>
      </GenericTemplate>
    </>
  );
}

export async function getStaticProps({}) {
  const contentRepository = new ContentRepository();
  const projects = await contentRepository.getFilteredContent('projects', ['status'], { status: 'published' });
  const projectsByDate = projects.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      pageContent: {
        pageDescription: 'A gallery of Web Development Projects and Coursework',
        socialMediaLinks: [
          {
            label: 'Github',
            icon: 'github',
            href: 'https://github.com',
          },
          {
            label: 'CodePen',
            icon: 'codepen',
            href: 'https://codepen.io',
          },
          {
            label: 'HackerRank',
            icon: 'hackerrank',
            href: 'https://www.hackerrank.com',
          },
          {
            label: 'CodeWars',
            icon: 'codewars',
            href: 'https://codewars.com',
          },
          {
            label: 'HackTheBox',
            icon: 'hackthebox',
            href: 'https://hackthebox.com',
          },
          {
            label: 'TryHackMe',
            icon: 'tryhackme',
            href: 'https://tryhackme.com',
          },
        ],
        main: {
          heroBanner: {
            pageTitle: 'Explore My Expertise:',
            subheading: 'A gallery of Web Development Projects and Coursework',
          },
          section_projectOverview: {
            title: 'Projects',
            section_id: 'projects',
            subheading:
              'In my free time, I pursue personal and hobby projects that allow me to showcase my skills and unleash my creativity. These projects not only bring me enjoyment, but also demonstrate my versatility, initiative, and dedication to continuously developing my abilities.',
            children: {
              portfolioOverview: {
                list: projectsByDate,
                parentPage: 'portfolio_overview',
                section: 'portfolio',
                category: {
                  category_url: 'projects',
                  category_name: 'projects',
                },
              },
            },
          },
          section_courseworkOverview: {
            title: 'Coursework',
            section_id: 'coursework',
            subheading:
              'Academic or educational projects assigned as part of a course or program that demonstrate my ability to apply knowledge and techniques.',
            children: {
              portfolioOverview: {
                list: await contentRepository.getFilteredContent('courseworks', ['status'], {
                  status: 'published',
                }),
                parentPage: 'portfolio_overview',
                section: 'portfolio',
                category: {
                  category_url: 'courseworks',
                  category_name: 'courseworks',
                },
              },
            },
          },
        },
      },
    },
  };
}
