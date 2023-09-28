import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template.js';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
import dynamic from 'next/dynamic';
const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));

export default function BlogCategory({ pageContent, siteProps }) {
  const pageTitle = ['Booknotes | Portfolio', '|', siteProps.title].join(' ');
  const { main, socialMediaLinks, pageDescription } = pageContent;
  const { heroBanner, section_booknotes } = main;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <GenericTemplate siteProps={siteProps}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={socialMediaLinks}
        />
        <ContentTeaserList content={section_booknotes.children.postsOverview} showViewAllButton={false} />
      </GenericTemplate>
    </>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();
  const publishedBooknotes = await contentRepository.getFilteredContent('booknotes', ['status'], {
    status: 'published',
  });

  return {
    props: {
      pageContent: {
        pageDescription:
          'Explore the latest booknotes by Paul Serban, a skilled software engineer and web developer. Dive into insightful reviews and summaries of the latest books on software engineering, web development, and related fields.',

        main: {
          heroBanner: {
            pageTitle: 'Book Notes',
            subheading: 'Insights and key takeaways from some of the book I read.',
          },
          section_booknotes: {
            title: 'Book Note',
            section_id: 'book_notes',
            children: {
              postsOverview: {
                list: publishedBooknotes,
                parentPage: 'blog',
                section: 'blog',
                category: {
                  category_url: 'booknotes',
                category_name: 'booknotes',
                },
              },
            },
          },
        },
      },
    },
  };
}
