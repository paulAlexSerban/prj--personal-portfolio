import Head from 'next/head';
import BlogCategoryTemplate from '@/core/templates/BlogCategory.template.js';
import Pagination from '@/core/library/molecules/Pagination.molecule';
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
const POSTS_PER_PAGE = 10;
export default function BlogCategory({ children, pageContent, siteProps }) {
  const pageTitle = [
    `Pag. ${pageContent.main.children.postsOverview.currentPage} |`,
    'Blog',
    '|',
    siteProps.title,
  ].join(' ');
  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription("Insightful articles on software engineering and web development by Paul Serban, a skilled software engineer and web developer.")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <BlogCategoryTemplate pageContent={pageContent} siteProps={siteProps}>
        {children}
        <Pagination
          currentPage={pageContent.main.children.postsOverview.currentPage}
          numPages={pageContent.main.children.postsOverview.numPages}
        />
      </BlogCategoryTemplate>
    </div>
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
        heroBanner: {
          pageTitle: 'Blog posts',
          subheading: 'Thoughts and insights on Web Development.',
        },
        main: {
          title: 'Posts',
          section_id: 'posts',
          children: {
            postsOverview: {
              list: orderedPosts,
              parentPage: 'blog',
              numPages,
              currentPage: page,
              category: {
                category_url: 'posts',
                category_name: 'posts',
              },
            },
          },
        },
      },
    },
  };
}
