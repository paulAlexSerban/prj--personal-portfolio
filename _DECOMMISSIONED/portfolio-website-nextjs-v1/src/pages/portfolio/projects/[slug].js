import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import PortfolioItemDetailTemplate from '@/core/templates/PortfolioItemDetail.template.js';
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

export default function PortfolioItemDetail({ children, pageContent, siteProps, frontmatter, caseStudyReferences }) {
  const pageTitle = [frontmatter.title, '|', siteProps.title].join(' ');
  return (
    <div className={roboto.className}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={getPageDescription(frontmatter.excerpt)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <PortfolioItemDetailTemplate
        pageContent={pageContent}
        siteProps={siteProps}
        frontmatter={frontmatter}
      >
        {children}
      </PortfolioItemDetailTemplate>
    </div>
  );
}

export async function getStaticPaths() {
  const PORTFOLIO_PATH = path.join('src', 'content', 'projects');
  const files = fs.readdirSync(PORTFOLIO_PATH);
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
  const content = await contentRepository.getPostContent('projects', slug);
  return {
    props: {
      ...content,
    },
  };
}
