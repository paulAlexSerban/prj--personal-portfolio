import BaseMeta from '@/core/system/meta/Base.meta';
import OpenGraph from '@/core/system/meta/OpenGraph.meta';
import { PageProvider } from '@/core/context/PageContext';
import useSiteProps from '@/core/hooks/useSiteProps';
import usePageProps from '@/core/hooks/usePageProps';
import HeroBanner from '@/core/library/organisms/HeroBanner.organism';
import PostTemplate from '@/core/system/templates/PostTemplate';
import Section from '@/core/library/organisms/Section.organism';
import MarkdownContainer from '@/core/library/molecules/MarkdownContent.molecule';

function PostPage() {
    const pageContent = usePageProps();
    const { icons } = useSiteProps();
    const { frontmatter, compiledSource, assetsPath, url } = pageContent;

    const { title, subheading, excerpt, author, date, tags, repo_url, demo_url, image } = frontmatter;
    const socialMediaLinks = [];
    repo_url && socialMediaLinks.push({ label: 'GitHub', href: repo_url, icon: 'github', isInternal: false });
    demo_url && socialMediaLinks.push({ label: 'Demo', href: demo_url, icon: 'globe', isInternal: false });

    const robots = 'index, follow';
    const type = 'article';
    const site_name = 'Paul Serban | Software Engineer';
    const locale = 'en_US';

    return (
        <>
            <BaseMeta
                title={title}
                description={excerpt}
                keywords={tags.join(', ')}
                robots={robots}
                assetsPath={assetsPath}
                author={author}
                favicon={icons.favicon}
                date={date}
            />

            <OpenGraph
                title={title}
                description={excerpt}
                keywords={tags.join(', ')}
                image={image}
                url={url}
                type={type}
                robots={robots}
                assetsPath={assetsPath}
                author={author}
                favicon={icons.favicon}
                siteName={site_name}
                locale={locale}
            />

            <PostTemplate>
                <HeroBanner pageTitle={title} subheading={subheading} socialMediaLinks={socialMediaLinks} tags={tags} />
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
