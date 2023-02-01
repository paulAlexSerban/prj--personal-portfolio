import { useId } from "react";
import { base, listItem } from "@/styles/molecules/projectList.module.scss";

import ProductCard from "@/core/molecules/ProjectCard.molecule";

export default function ProjectList({ list = [], type = "overview" }) {
    const ID = useId();

    return (
        <ul id={ID} className={base}>
            {list.map((project, index) => {
                return (
                    <li className={listItem} key={index}>
                        <ProductCard project={project} />
                    </li>
                );
            })}
        </ul>
    );
}
