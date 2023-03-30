
import ProjectList from "../molecules/ProjectList.molecule";
import { Link } from "@/core/atoms/typography/all";
import {
    base,
    container,
    footer
} from "@/styles/organisms/projectsOverview.module.scss";

export default function ProjectOverview({ content, showViewAllButton = true }) {
    const { projects, category } = content;
    return (
        <>
            {content && (
                <article className={base}>
                    <div className={container}>
                        <ProjectList list={projects} category={category}/>
                    </div>
                    {category && showViewAllButton && (
                        <div className={footer}>
                        <Link
                            label={`View all ${category.category_name}`}
                            href={`/portfolio/${category.category_url}`}
                            isInternal={true}
                        ></Link>
                        </div>

                    )}
                </article>
            )}
        </>
    );
}
