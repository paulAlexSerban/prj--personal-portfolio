import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import BlogPostTemplate from '@/core/templates/BlogPost.template.js';
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
export default function PortfolioItemDetail({ children, pageContent, siteProps, frontmatter }) {
  const pageTitle = [frontmatter.title, '|', siteProps.title].join(' ');
  const keywords = frontmatter.tags.join(', ') + ', ' + frontmatter.categories.join(', ');
  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(frontmatter.excerpt)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords}/>
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
  const BLOG_PATH = path.join('src', 'content', 'posts');
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
  const content = await contentRepository.getPostContent('posts', slug);
  return {
    props: {
      ...content,
    },
  };
}
