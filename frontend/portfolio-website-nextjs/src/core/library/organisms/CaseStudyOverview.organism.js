import { Link } from "@/core/atoms/typography/all";
import FlexGrid from "@/core/library/layouts/FlexGrid.layout";

/**
 * @name CaseStudyOverview
 * - each part of the section is an accordion which keeps a list of each referenced case study
 */

export default function CaseStudyOverview({ list = [] }) {
    return (
        <>
            {list && list.portfolio && list.portfolio.courseworks && (
                <article>
                    <h3>Course Work</h3>
                    <ul>
                        {list.portfolio.courseworks.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        label={item.title}
                                        href={item.url_path}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </article>
            )}
            {list && list.blog && list.blog.posts && (
                <article>
                    <h3>Posts</h3>
                    <ul>
                        {list.blog.posts.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        label={item.title}
                                        href={item.url_path}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </article>
            )}
            {list && list.blog && list.blog.booknotes && (
                <article>
                    <h3>Book Notes</h3>
                    <ul>
                        {list.blog.booknotes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        label={item.title}
                                        href={item.url_path}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </article>
            )}
            {list && list.blog && list.blog.snippets && (
                <article>
                    <h3>Snippets</h3>
                    <ul>
                        {list.blog.snippets.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        label={item.title}
                                        href={item.url_path}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </article>
            )}
        </>
    );
}
