import Head from 'next/head';
import GenericTemplate from '@/core/templates/Generic.template';
import dynamic from "next/dynamic";
import ContentRepository from '@/core/utils/ContentRepository';
import getPageDescription from '@/core/utils/trimPageDescription';
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
const ContentTeaserList = dynamic(() => import("@/core/library/organisms/ContentTeaserList.organism"));

export default function TagsPage({ siteProps, pageContent }) {
  return (
    <>
      <Head>
        <title>{siteProps.title}</title>
        <meta name="description" content={getPageDescription(pageContent.pageDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteProps.icons.favicon} />
      </Head>

      <GenericTemplate pageContent={pageContent} siteProps={siteProps}>
        <HeroBanner
          pageTitle={pageContent.main.heroBanner.pageTitle}
          subheading={pageContent.main.heroBanner.subheading}
        />
        {pageContent.main.section_1.children.portfolioOverview.list.length > 0 && (
          <Section
            headingTitle={pageContent.main.section_1.title}
            sectionId={pageContent.main.section_1.section_id}
            subheadingText={pageContent.main.section_1.subheading}
          >
            <ContentTeaserList content={pageContent.main.section_1.children.portfolioOverview} />
          </Section>
        )}
        {pageContent.main.section_2.children.portfolioOverview.list.length > 0 && (
          <Section
            headingTitle={pageContent.main.section_2.title}
            sectionId={pageContent.main.section_2.section_id}
            subheadingText={pageContent.main.section_2.subheading}
          >
            <ContentTeaserList content={pageContent.main.section_2.children.portfolioOverview} />
          </Section>
        )}
        {pageContent.main.section_3.children.postsOverview.list.length > 0 && (
          <Section
            headingTitle={pageContent.main.section_3.title}
            sectionId={pageContent.main.section_3.section_id}
            subheadingText={pageContent.main.section_3.subheading}
          >
            <ContentTeaserList
              content={pageContent.main.section_3.children.postsOverview}
            />
          </Section>
        )}
        {pageContent.main.section_4.children.postsOverview.list.length > 0 && (
          <Section
            headingTitle={pageContent.main.section_4.title}
            sectionId={pageContent.main.section_4.section_id}
            subheadingText={pageContent.main.section_4.subheading}
          >
            <ContentTeaserList
              content={pageContent.main.section_4.children.postsOverview}
            />
          </Section>
        )}
        {pageContent.main.section_5.children.postsOverview.list.length > 0 && (
          <Section
            headingTitle={pageContent.main.section_5.title}
            sectionId={pageContent.main.section_5.section_id}
            subheadingText={pageContent.main.section_5.subheading}
          >
            <ContentTeaserList
              content={pageContent.main.section_5.children.postsOverview}
            />
          </Section>
        )}
      </GenericTemplate>
    </>
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
    });
    return fetchedContent;
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
                list: await getTaggedContent('projects'),
                parentPage: 'tag_preview',
                section: 'portfolio',
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
                list: await getTaggedContent('courseworks'),
                section: 'portfolio',
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
            section_id: 'posts',
            children: {
              postsOverview: {
                list: await getTaggedContent('posts'),
                parentPage: 'tag_preview',
                section: 'blog',
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
                section: 'blog',
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
