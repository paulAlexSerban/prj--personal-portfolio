import Head from 'next/head';
import { useId } from 'react';
import BlogTemplate from '@/core/templates/Blog.template.js';
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

export default function Blog({ children, pageContent, siteProps }) {
  const ID = useId();
  const pageTitle = ['Blog', '|', siteProps.title].join(' ');
  return (
    <div id={ID} className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription("Insightful articles on software engineering and web development by Paul Serban, a skilled software engineer and web developer.")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <BlogTemplate pageContent={pageContent} siteProps={siteProps}>
        {children}
      </BlogTemplate>
    </div>
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
              category: {
                category_url: 'snippets',
                category_name: 'snippets',
              },
            },
          },
        },
      },
    },
  };
}
