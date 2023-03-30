import Head from 'next/head';
import PortfolioCategoryTemplate from '@/core/templates/PortfolioCategory.template.js';
import { Roboto } from 'next/font/google';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

export default function PortfolioCategoryPage({ children, pageContent, siteProps }) {
  const pageTitle = ['Case Studies', '|', siteProps.title].join(' ');

  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription("Discover the coursework of Paul Serban, a talented web developer with a passion for creating stunning, responsive, and user-friendly websites. Explore our portfolio of coursework, including projects in HTML, CSS, JavaScript, React, and more.")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <PortfolioCategoryTemplate siteProps={siteProps} pageContent={pageContent}></PortfolioCategoryTemplate>
    </div>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();
  return {
    props: {
      pageContent: {
        main: {
          heroBanner: {
            pageTitle: 'Coursework Gallery',
            subheading:
              'Academic or educational projects assigned as part of a course or program that demonstrate my ability to apply knowledge and techniques.',
          },
          section: {
            section_id: 'coursework_overview',
            children: {
              portfolioOverview: {
                projects: await contentRepository.getFilteredContent('courseworks', ['status'], { status: 'published' }),
                parentPage: 'category_page',
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
