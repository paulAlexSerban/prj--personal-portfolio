import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template.js';
import Pagination from '@/core/library/molecules/Pagination.molecule';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
import dynamic from 'next/dynamic';
const HeroBanner = dynamic(() => import('@/core/library/organisms/HeroBanner.organism'));
const ContentTeaserList = dynamic(() => import('@/core/library/organisms/ContentTeaserList.organism'));

const POSTS_PER_PAGE = 9;
export default function BlogCategory({ pageContent, siteProps }) {
  const { main, socialMediaLinks, pageDescription } = pageContent;
  const { heroBanner, section_blog } = main;
  const pageTitle = [
    `Pag. ${section_blog.children.postsOverview.currentPage} |`,
    'Blog',
    '|',
    siteProps.title,
  ].join(' ');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(pageDescription)}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <GenericTemplate siteProps={siteProps}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={socialMediaLinks}
        />
        <ContentTeaserList content={section_blog.children.postsOverview} showViewAllButton={false} />
        <Pagination currentPage={section_blog.children.postsOverview.currentPage} numPages={section_blog.children.postsOverview.numPages}/>
      </GenericTemplate>
    </>
  );
}


export async function getStaticPaths() {
  const contentRepository = new ContentRepository();
  const publishedPosts = await contentRepository.getFilteredContent('posts', ['status'], { status: 'published' });
  const numPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE); // get number of pages
  let paths = [];
  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentRepository = new ContentRepository();
  const publishedPosts = await contentRepository.getFilteredContent('posts', ['status'], { status: 'published' });
  const page = parseInt((params && params.page_index) || 1);
  const numPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE); // get number of pages
  const pageIndex = page - 1;
  const orderedPosts = publishedPosts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);
  return {
    props: {
      pageContent: {
        pageDescription: "Insightful articles on software engineering and web development by Paul Serban, a skilled software engineer and web developer.",
        main: {
          heroBanner: {
            pageTitle: 'Blog posts',
            subheading: 'Thoughts and insights on Web Development.',
          },
          section_blog: {
            title: 'Posts',
            section_id: 'posts',
            children: {
              postsOverview: {
                list: orderedPosts,
                parentPage: 'blog',
                numPages,
                currentPage: page,
                section: 'blog',
                category: {
                  category_url: 'posts',
                  category_name: 'posts',
                },
              },
            },
          },
        },
      },
    },
  };
}
