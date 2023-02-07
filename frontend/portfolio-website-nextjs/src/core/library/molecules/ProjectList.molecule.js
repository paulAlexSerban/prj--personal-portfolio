import { useId } from "react";
import { base, listItem } from "@/styles/molecules/projectList.module.scss";

import ProjectCard from "@/core/molecules/ProjectCard.molecule";

export default function ProjectList({ list, category }) {
    const ID = useId();

    return (
        <>
            {list && (
                <ul id={ID} className={base}>
                    {list.map((project, index) => {
                        return (
                            <li className={listItem} key={index}>
                                <ProjectCard project={project} category={category} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}
