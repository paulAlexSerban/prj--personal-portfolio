import { useId } from "react";
import ProjectList from "../molecules/ProjectList.molecule";

import { base, container } from "@/styles/organisms/projectOverview.module.scss";

export default function ProjectGallery({projectList}) {
    const ID = useId();

    return (
        <article id={ID} className={base}>
            <div className={container}>
                <ProjectList list={projectList}/>
            </div>
        </article>
    );
}
