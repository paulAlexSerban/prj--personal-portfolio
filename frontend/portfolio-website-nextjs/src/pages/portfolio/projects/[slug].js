import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '@/core/utils/softByDate';
import Head from 'next/head';
import PortfolioItemDetailTemplate from '@/core/templates/PortfolioItemDetail.template.js';
import { Roboto } from 'next/font/google';
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
        <meta name="description" content={frontmatter.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>
      <PortfolioItemDetailTemplate
        pageContent={pageContent}
        siteProps={siteProps}
        frontmatter={frontmatter}
        caseStudy={Object.keys(caseStudyReferences).length !== 0 ? caseStudyReferences : undefined}
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
  const contentPath = ['src', 'content'];
  const markdownWithMeta = fs.readFileSync(path.join(...contentPath, 'projects', slug + '.mdx'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const transformArray = (objArray) => {
    // Initialize the accumulator object, which will store the transformed object
    return objArray.reduce((acc, currentValue) => {
      // Iterate over the properties of the current value
      for (const key in currentValue) {
        // Check if the current property is an array
        if (Array.isArray(currentValue[key])) {
          // If it is, create an object with the same key as the current property
          acc[key] = {};
          // Iterate over the array and extract the inner objects
          currentValue[key].forEach((innerObj) => {
            // Iterate over the properties of the inner object
            for (const innerKey in innerObj) {
              // Assign the value of the inner property to the corresponding property of the new object
              acc[key][innerKey] = innerObj[innerKey];
            }
          });
        } else {
          // If the current property is not an array, simply assign its value to the corresponding property of the new object
          acc[key] = currentValue[key];
        }
      }
      // Return the transformed object
      return acc;
    }, {});
  };

  const caseStudyReferences = {};
  if (frontmatter.status === 'published' && frontmatter.case_study) {
    const caseStudyList = transformArray(frontmatter.case_study);

    Object.keys(caseStudyList).forEach((key) => {
      caseStudyReferences[key] = {};
      Object.keys(caseStudyList[key]).forEach((subKey) => {
        caseStudyReferences[key][subKey] = [];
        caseStudyList[key][subKey].forEach((subSubKey) => {
          const caseStudyMarkdown = fs.readFileSync(path.join(...contentPath, subKey, subSubKey + '.mdx'));

          const { data: caseStudyFrontmatter } = matter(caseStudyMarkdown);

          if (caseStudyFrontmatter.status === 'published' && caseStudyFrontmatter.date) {
            caseStudyReferences[key][subKey].push({
              frontmatter: {
                title: caseStudyFrontmatter.title,
                date: caseStudyFrontmatter.date,
                url_path: path.join('/', key, subKey, subSubKey),
              },
            });
          }
        });
        caseStudyReferences[key][subKey].sort(sortByDate);
      });
    });
  }

  return {
    props: {
      frontmatter,
      pageContent: { content },
      caseStudyReferences,
    },
  };
}
