import Head from 'next/head';
import { useId } from 'react';
import TagPreviewTemplate from '@/core/templates/TagPreview.template';
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

export default function TagsPage({ siteProps, pageContent }) {
  const ID = useId();

  return (
    <div id={ID} className={roboto.className}>
      <Head>
        <title>{siteProps.title}</title>
        <meta name="description" content={getPageDescription(pageContent.pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>

      <TagPreviewTemplate pageContent={pageContent} siteProps={siteProps}></TagPreviewTemplate>
    </div>
  );
}

export async function getStaticPaths() {
  const contentRepository = new ContentRepository();
  const paths = await contentRepository.getContent().then((fetchedContent) => {
    const { content } = fetchedContent;
    return content.tags.map((tag) => ({
      params: {
        tag: tag.tag,
        name: tag.name,
      },
    }));
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tag } }) {
  const contentRepository = new ContentRepository();
  const tags = await contentRepository.getContent().then((fetchedContent) => {
    const { content } = fetchedContent;
    return content.tags;
  });
  const tagName = tags.find((tagObj) => tagObj.tag === tag).name;
	const getTaggedContent = async (category) => {
		const fetchedContent = await contentRepository.getFilteredContent(category, ['tags', 'status'], {
			tags: tag,
			status: 'published',
		})
		return fetchedContent
	};

  return {
    props: {
      pageContent: {
        pageDescription:
          'JavaScript software engineer portfolio featuring top-notch web development projects. Discover innovative web apps and scalable enterprise solutions.',
        main: {
          heroBanner: {
            pageTitle: `${tagName} `,
          },

          section_1: {
            title: 'Projects',
            section_id: 'projects',
            children: {
              portfolioOverview: {
                projects: await getTaggedContent('projects'),
                parentPage: 'tag_preview',
                category: {
                  category_url: 'projects',
                  category_name: 'projects',
                },
              },
            },
          },
          section_2: {
            title: 'Coursework',
            section_id: 'coursework',
            children: {
              portfolioOverview: {
                projects: await getTaggedContent('courseworks'),
                parentPage: 'tag_preview',
                category: {
                  category_url: 'courseworks',
                  category_name: 'courseworks',
                },
              },
            },
          },
          section_3: {
            title: 'Posts',
            section_id: 'coursework',
            children: {
              postsOverview: {
                list: await getTaggedContent('posts'),
                parentPage: 'tag_preview',
                category: {
                  category_url: 'posts',
                  category_name: 'posts',
                },
              },
            },
          },
          section_4: {
            title: 'Book Notes',
            section_id: 'booknotes',
            children: {
              postsOverview: {
                list: await getTaggedContent('booknotes'),
                parentPage: 'tag_preview',
                category: {
                  category_url: 'booknotes',
                  category_name: 'booknotes',
                },
              },
            },
          },
          section_5: {
            title: 'Snippets',
            section_id: 'snipets',
            children: {
              postsOverview: {
                list: await getTaggedContent('snippets'),
                parentPage: 'tag_preview',
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
