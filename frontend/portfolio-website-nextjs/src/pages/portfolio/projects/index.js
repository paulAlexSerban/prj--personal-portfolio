import Head from 'next/head';
import PortfolioCategoryTemplate from '@/core/templates/PortfolioCategory.template.js';
import { Roboto } from 'next/font/google';
import ContentRepository from '@/core/utils/content/ContentRepository';
import getPageDescription from '@/core/utils/content/getPageDescription';

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

export default function PortfolioCategoryPage({ children, pageContent, siteProps }) {
  const pageTitle = ['Projects', '|', siteProps.title].join(' ');

  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(pageContent.pageDescription)} />
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
        pageDescription: 'A gallery of Web Development Projects and Coursework',

        main: {
          heroBanner: {
            pageTitle: 'Project Gallery',
            subheading: 'My gallery of web development projects.',
          },

          section: {
            section_id: 'portfolio_overview',
            children: {
              portfolioOverview: {
                projects: await contentRepository.getFilteredContent('projects', ['status'], { status: 'published' }),
                parentPage: 'category_page',
                category: {
                  category_url: 'projects',
                  category_name: 'projects',
                },
              },
            },
          },
        },
      },
    },
  };
}
