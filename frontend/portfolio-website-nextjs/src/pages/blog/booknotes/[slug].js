import fs from 'fs';
import path from 'path';
import ContentRepository from '@/core/utils/content/ContentRepository';
import Head from 'next/head';
import BlogPostTemplate from '@/core/templates/BlogPost.template.js';
import getPageDescription from '@/core/utils/content/getPageDescription';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});
export default function PortfolioItemDetail({ children, pageContent, siteProps, frontmatter }) {
  const pageTitle = [frontmatter.title, '|', siteProps.title].join(' ');
  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(frontmatter.excerpt)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <BlogPostTemplate
        siteNavLinks={siteProps.siteNavLinks}
        pageContent={pageContent}
        siteProps={siteProps}
        frontmatter={frontmatter}
      >
        {children}
      </BlogPostTemplate>
    </div>
  );
}

export async function getStaticPaths() {
  const BLOG_PATH = path.join('src', 'content', 'booknotes');
  const blogDirs = fs.readdirSync(BLOG_PATH);

  const files = fs.readdirSync(BLOG_PATH);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const contentRepository = new ContentRepository();
  const content = await contentRepository.getPostContent('booknotes', slug);
  return {
    props: {
      ...content,
    },
  };
}
