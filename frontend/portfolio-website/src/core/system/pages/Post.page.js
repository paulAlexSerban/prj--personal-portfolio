import Head from "next/head";
import { PageProvider } from "@/core/context/PageContext";
import useSiteProps from "@/core/hooks/useSiteProps";
import usePageProps from "@/core/hooks/usePageProps";
import { trimPageDescription } from "@/core/utils/TextUtils";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import PostTemplate from "@/core/system/templates/PostTemplate";
import Section from "@/core/library/organisms/Section.organism";
import MarkdownContainer from "@/core/library/molecules/MarkdownContent.molecule";

function PostPage() {
  const pageContent = usePageProps();
  const { icons } = useSiteProps();
  const { frontmatter, compiledSource } = pageContent;
  const { title, subheading, excerpt, author, date, tags, repo_url, demo_url } = frontmatter;
  const socialMediaLinks = [];
  if (repo_url) socialMediaLinks.push({ label: "GitHub", href: repo_url, icon: "github", isInternal: false });
  if (demo_url) socialMediaLinks.push({ label: "Demo", href: demo_url, icon: "globe", isInternal: false });

  return (
      <>
          <Head>
              <title>{title}</title>
              <meta name="description" content={trimPageDescription(excerpt)} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content={author} />
              <meta name="date" content={date} />
              <meta name="keywords" content={tags.join(", ")} />
              <link rel="icon" href={icons.favicon} />
          </Head>
          <PostTemplate>
              <HeroBanner pageTitle={title} subheading={subheading} socialMediaLinks={socialMediaLinks} tags={tags}/>
              <Section>
                  <MarkdownContainer markdownContent={compiledSource} />
              </Section>
          </PostTemplate>
      </>
  );
}

export default function Post({ pageContent }) {
  return (
      <PageProvider value={pageContent}>
          <PostPage />
      </PageProvider>
  );
}