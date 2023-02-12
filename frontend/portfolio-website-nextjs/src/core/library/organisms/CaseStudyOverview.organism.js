import { Link, Heading } from "@/core/atoms/typography/all";
import { base, linkList } from "@/styles/organisms/caseStudyOverview.module.scss";

/**
 * @name CaseStudyOverview
 * - each part of the section is an accordion which keeps a list of each referenced case study
 */

export default function CaseStudyOverview({ list = [] }) {
    const hasCourseWorks =
        list &&
        list.portfolio &&
        list.portfolio.courseworks &&
        list.portfolio.courseworks.length > 0;
    const hasPosts =
        list && list.blog && list.blog.posts && list.blog.posts.length > 0;

    const hasBooknotes =
        list &&
        list.blog &&
        list.blog.booknotes &&
        list.blog.booknotes.length > 0;
    const hasSnippets =
        list &&
        list.blog &&
        list.blog.snippets &&
        list.blog.snippets.length > 0;

    const hasContent =
        hasCourseWorks || hasPosts || hasBooknotes || hasSnippets;
    return (
        <>
            {hasContent && (
                <article className={base}>
                    {hasCourseWorks && (
                        <>
                            <Heading level="3" mainText="Course Work" />
                            <ul className={linkList}>
                                {list.portfolio.courseworks.map(
                                    (item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    label={item.frontmatter.title}
                                                    href={item.frontmatter.url_path}
                                                />
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </>
                    )}
                    {hasPosts && (
                        <>
                            <Heading level="3" mainText="Posts" />
                            <ul className={linkList}>
                                {list.blog.posts.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                label={item.frontmatter.title}
                                                href={item.frontmatter.url_path}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                    {hasBooknotes && (
                        <>
                            <Heading level="3" mainText="Book Notes" />
                            <ul className={linkList}>
                                {list.blog.booknotes.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                label={item.frontmatter.title}
                                                href={item.frontmatter.url_path}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                    {hasSnippets && (
                        <>
                            <Heading level="3" mainText="Snippets" />
                            <ul className={linkList}>
                                {list.blog.snippets.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                label={item.frontmatter.title}
                                                href={item.frontmatter.url_path}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </article>
            )}
        </>
    );
}
