import { useId } from "react";
import ProjectList from "../molecules/ProjectList.molecule";
import { Link } from "@/core/atoms/typography/all";
import {
    base,
    container,
    footer
} from "@/styles/organisms/projectsOverview.module.scss";

/**
 * @name ProjectsOverview
 * @specs
 * - to be used only on Landing Page Template
 * - limited to max 6 projects (the pinned projects should be shown)
 * @param {projectList} Array of projects
 * @returns {JSX.Element}
 */

export default function ProjectOverview({ content, showViewAllButton = true }) {
    const ID = useId();

    return (
        <>
            {content && (
                <article id={ID} className={base}>
                    <div className={container}>
                        <ProjectList list={content.projects} category={content.category}/>
                    </div>
                    {content.category && showViewAllButton && (
                        <div className={footer}>
                        <Link
                            label={`View all ${content.category.category_name}`}
                            href={`/portfolio/${content.category.category_url}`}
                        ></Link>
                        </div>

                    )}
                </article>
            )}
        </>
    );
}
