import Head from 'next/head';
import BlogCategoryTemplate from '@/core/templates/BlogCategory.template.js';
import { Roboto } from 'next/font/google';
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/getPageDescription';
const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

export default function BlogCategory({ children, pageContent, siteProps }) {
  return (
    <div className={roboto.className}>
      <Head>
        <meta name="description" content={getPageDescription("Explore the latest booknotes by Paul Serban, a skilled software engineer and web developer. Dive into insightful reviews and summaries of the latest books on software engineering, web development, and related fields.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <BlogCategoryTemplate pageContent={pageContent} siteProps={siteProps}>
        {children}
      </BlogCategoryTemplate>
    </div>
  );
}

export async function getStaticProps() {
  const contentRepository = new ContentRepository();
  const publishedBooknotes = await contentRepository.getFilteredContent('booknotes', ['status'], { status: 'published' });

  return {
    props: {
      pageContent: {
        heroBanner: {
          pageTitle: 'Book Notes',
          subheading: 'Insights and key takeaways from some of the book I read.',
        },
        main: {
          title: 'Book Note',
          section_id: 'book_notes',
          children: {
            postsOverview: {
              list: publishedBooknotes,
              parentPage: 'blog',
              category: {
                category_url: 'booknotes',
                category_name: 'booknotes',
              },
            },
          },
        },
      },
    },
  };
}
