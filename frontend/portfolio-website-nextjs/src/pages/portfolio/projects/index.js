import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template.js';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
import dynamic from 'next/dynamic';
const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const Section = dynamic(() => import('@/core/library/organisms/Section.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));

export default function PortfolioCategoryPage({ children, pageContent, siteProps }) {
  const pageTitle = ['Projects', '|', siteProps.title].join(' ');
  const { main, socialMediaLinks, pageDescription } = pageContent;
  const { heroBanner, section } = main;

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
        <Section>
          <ContentTeaserList content={section.children.portfolioOverview} showViewAllButton={false} />
        </Section>
      </GenericTemplate>
    </>
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
                list: await contentRepository.getFilteredContent('projects', ['status'], { status: 'published' }),
                parentPage: 'category_page',
                section: 'portfolio',
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
