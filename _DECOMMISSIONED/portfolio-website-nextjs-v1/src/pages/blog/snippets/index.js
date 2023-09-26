import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template.js';
import dynamic from 'next/dynamic';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';

const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));

export default function BlogCategory({ pageContent, siteProps }) {
  const pageTitle = ['Code Snippets | Portfolio', '|', siteProps.title].join(' ');
  const { main, socialMediaLinks, pageDescription } = pageContent;
  const { heroBanner, section_snippets } = main;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <GenericTemplate pageContent={pageContent} siteProps={siteProps}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={socialMediaLinks}
        />
        <ContentTeaserList content={section_snippets.children.postsOverview} showViewAllButton={false} />
      </GenericTemplate>
    </>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();
  const publishedSnippets = await contentRepository.getFilteredContent('snippets', ['status'], { status: 'published' });
  return {
    props: {
      pageContent: {
        pageDescription:
          'Explore our collection of useful code snippets for software engineering and web development, curated by Paul Serban, a skilled software engineer and web developer.',

        main: {
          heroBanner: {
            pageTitle: 'Code Snippets',
            subheading: 'Collection of useful and efficient code snippets.',
          },
          section_snippets: {
            title: 'Snippets',
            section_id: 'snippets',
            children: {
              postsOverview: {
                list: publishedSnippets,
                parentPage: 'blog',
                section: 'blog',
                category: {
                  category_url: 'snippets',
                  category_name: 'snippets',
                },
              },
            },
          },
        },
      },
    },
  };
}
