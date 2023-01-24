import { useId } from "react";
import { base, listItem } from "@/styles/molecules/tagList.module.scss";
export default function TagList({ tags = [] }) {
    const ID = useId();
    return (
        <ul id={ID} className={base}>
            {tags.map((tag, index) => {
                return (
                    <li className={listItem} key={index}>
                        {tag}
                    </li>
                );
            })}
        </ul>
    );
}
