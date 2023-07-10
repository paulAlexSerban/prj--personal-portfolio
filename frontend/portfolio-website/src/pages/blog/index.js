import Head from "next/head";
import dynamic from "next/dynamic";
import useSiteProps from "@/core/hooks/useSiteProps";
import { PageProvider } from "@/core/context/PageContext";
import usePageProps from "@/core/hooks/usePageProps";
import content from "@/content/dist/pages/blog/index.json";
// import ContentRepository from '@/core/utils/ContentRepository';
import { trimPageDescription } from "@/core/utils";

const GenericTemplate = dynamic(() => import("@/core/templates/Generic.template.js"));
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));
const Section = dynamic(() => import("@/core/library/organisms/Section.organism"));
import PostsOverview from "@/core/library/organisms/PostsOverview.organism";
// const ContentTeaserList = dynamic(() => import("@/core/library/organisms/ContentTeaserList.organism"));

function PortfolioPage() {
    const pageContent = usePageProps();
    const { title, pageDescription, main } = pageContent;
    const { icons, socialMediaLinks } = useSiteProps();
    // const {heroBanner, section_projectOverview, section_courseworkOverview} = main;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={trimPageDescription(pageDescription)} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>

            <GenericTemplate>
                <HeroBanner
                    pageTitle={main.heroBanner.content[0].pageTitle}
                    subheading={main.heroBanner.content[1].subheading}
                    socialMediaLinks={socialMediaLinks}
                />
                <Section
                    headingTitle={main.section__posts.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__posts.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__posts.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
                <Section
                    headingTitle={main.section__booknotes.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__booknotes.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__booknotes.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>
                <Section
                    headingTitle={main.section__snippets.content[0].title.main}
                    hasSeparator={true}
                    subheadingText={main.section__snippets.content[0].title.sub}
                >
                    <PostsOverview
                        content={main.section__snippets.content[1].children[0].content}
                        showViewAllButton={true}
                    />
                </Section>

            </GenericTemplate>

            {/* <GenericTemplate siteProps={siteProps} pageContent={pageContent}>
        <HeroBanner
          pageTitle={heroBanner.pageTitle}
          subheading={heroBanner.subheading}
          socialMediaLinks={socialMediaLinks}
        />
        <Section
          headingTitle={section_projectOverview.title}
          sectionId={section_projectOverview.section_id}
          subheadingText={section_projectOverview.subheading}
        >
          <ContentTeaserList content={section_projectOverview.children.portfolioOverview} />
        </Section>

        <Section
          headingTitle={section_courseworkOverview.title}
          sectionId={section_courseworkOverview.section_id}
          subheadingText={section_courseworkOverview.subheading}
        >
          <ContentTeaserList content={section_courseworkOverview.children.portfolioOverview} />
        </Section>
      </GenericTemplate> */}
        </>
    );
}

export default function Portfolio({ pageContent }) {
    return (
        <PageProvider value={pageContent}>
            <PortfolioPage />
        </PageProvider>
    );
}

export async function getStaticProps() {
  content.main.section__posts.content[1].children[0].content.list = [
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
]

content.main.section__booknotes.content[1].children[0].content.list = [
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
  {
      title: "Lorem project title",
      subheading: "Subheading lorem project",
      type: "project type",
      tags: [
          "javascript",
          "frontend",
          "reactjs",
          "scss",
          "html",
          "webpack",
          "handlebars",
      ],
      excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
      repo_url: "https://github.com/paulAlexSerban",
      demo_url: "https://loremProjects.eu",
      slug: "loremproject",
  },
]
content.main.section__snippets.content[1].children[0].content.list = [
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
    {
        title: "Lorem project title",
        subheading: "Subheading lorem project",
        type: "project type",
        tags: [
            "javascript",
            "frontend",
            "reactjs",
            "scss",
            "html",
            "webpack",
            "handlebars",
        ],
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit. Sed vitae sapien ut ante venenatis dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sap, consectetur adipiscing elit.",
        repo_url: "https://github.com/paulAlexSerban",
        demo_url: "https://loremProjects.eu",
        slug: "loremproject",
    },
  ]
    return {
        props: {
            pageContent: content,
        },
    };
}

// export async function getStaticProps({}) {
//   const contentRepository = new ContentRepository();
//   const projects = await contentRepository.getFilteredContent('projects', ['status'], { status: 'published' });
//   const projectsByDate = projects.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

//   return {
//     props: {
//       pageContent: {
//         pageDescription: 'A gallery of Web Development Projects and Coursework',
//         socialMediaLinks: [
//           {
//             label: 'Github',
//             icon: 'github',
//             href: 'https://github.com/paulAlexSerban',
//           },
//           {
//             label: 'CodePen',
//             icon: 'codepen',
//             href: 'https://codepen.io/paulalexserban',
//           },
//           {
//             label: 'HackerRank',
//             icon: 'hackerrank',
//             href: 'https://www.hackerrank.com/paul_alex_serban',
//           },
//           {
//             label: 'CodeWars',
//             icon: 'codewars',
//             href: 'https://www.codewars.com/users/paulAlexSerban',
//           },
//           // {
//           //   label: 'HackTheBox',
//           //   icon: 'hackthebox',
//           //   href: 'https://hackthebox.com',
//           // },
//           // {
//           //   label: 'TryHackMe',
//           //   icon: 'tryhackme',
//           //   href: 'https://tryhackme.com',
//           // },
//         ],
//         main: {
//           heroBanner: {
//             pageTitle: 'Explore My Expertise:',
//             subheading: 'A gallery of Web Development Projects and Coursework',
//           },
//           section_projectOverview: {
//             title: 'Projects',
//             section_id: 'projects',
//             subheading:
//               'In my free time, I pursue personal and hobby projects that allow me to showcase my skills and unleash my creativity. These projects not only bring me enjoyment, but also demonstrate my versatility, initiative, and dedication to continuously developing my abilities.',
//             children: {
//               portfolioOverview: {
//                 list: projectsByDate,
//                 parentPage: 'portfolio_overview',
//                 section: 'portfolio',
//                 category: {
//                   category_url: 'projects',
//                   category_name: 'projects',
//                 },
//               },
//             },
//           },
//           section_courseworkOverview: {
//             title: 'Coursework',
//             section_id: 'coursework',
//             subheading:
//               'Academic or educational projects assigned as part of a course or program that demonstrate my ability to apply knowledge and techniques.',
//             children: {
//               portfolioOverview: {
//                 list: await contentRepository.getFilteredContent('courseworks', ['status'], {
//                   status: 'published',
//                 }),
//                 parentPage: 'portfolio_overview',
//                 section: 'portfolio',
//                 category: {
//                   category_url: 'courseworks',
//                   category_name: 'courseworks',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   };
// }
