import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template.js';
import dynamic from 'next/dynamic';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
const Section = dynamic(() => import('@/core/library/organisms/Section.organism'));
const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));

export default function Blog({ pageContent, siteProps }) {
  const pageTitle = ['Blog', '|', siteProps.title].join(' ');
  const { pageDescription, main} = pageContent;
  const {heroBanner, section_posts, section_booknotes, section_snippets} = main;
  const { socialMediaLinks } = siteProps;
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
        <Section
          headingTitle={section_posts.title}
          sectionId={section_posts.section_id}
          subheadingText={section_posts.subheading}
        >
          <ContentTeaserList
            content={section_posts.children.postsOverview}
 
          />
        </Section>
        <Section
          headingTitle={section_booknotes.title}
          sectionId={section_booknotes.section_id}
          subheadingText={section_booknotes.subheading}
        >
          <ContentTeaserList
            content={section_booknotes.children.postsOverview}

          />
        </Section>
        <Section
          headingTitle={section_snippets.title}
          sectionId={section_snippets.section_id}
          subheadingText={section_snippets.subheading}
        >
          <ContentTeaserList
            content={section_snippets.children.postsOverview}

          />
        </Section>
      </GenericTemplate>
    </>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();
  const publishedPosts = await contentRepository.getFilteredContent('posts', ['status'], { status: 'published' });
  const publishedBooknotes = await contentRepository.getFilteredContent('booknotes', ['status'], {
    status: 'published',
  });
  const publishedSnippets = await contentRepository.getFilteredContent('snippets', ['status'], { status: 'published' });

  return {
    props: {
      pageContent: {
        pageDescription:
          'Insightful articles on software engineering and web development by Paul Serban, a skilled software engineer and web developer.',
        main: {
          heroBanner: {
            pageTitle: 'Blog',
            subheading: 'Coding with Purpose, and blogging about it.',
          },
          section_posts: {
            title: 'Posts',
            section_id: 'posts',
            children: {
              postsOverview: {
                list: publishedPosts.slice(0, 6),
                parentPage: 'blog',
                section: 'blog',
                category: {
                  category_url: 'posts',
                  category_name: 'posts',
                },
              },
            },
          },
          section_booknotes: {
            title: 'Book Notes',
            section_id: 'book_notes',
            children: {
              postsOverview: {
                list: publishedBooknotes.slice(0, 6),
                parentPage: 'blog',
                section: 'blog',
                category: {
                  category_url: 'booknotes',
                  category_name: 'booknotes',
                },
              },
            },
          },
          section_snippets: {
            title: 'Snippets',
            section_id: 'snippets',
            children: {
              postsOverview: {
                list: publishedSnippets.slice(0, 6),
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
