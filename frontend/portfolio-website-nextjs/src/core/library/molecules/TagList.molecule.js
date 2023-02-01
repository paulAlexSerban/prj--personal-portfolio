import { useId } from "react";
import { base, listItem } from "@/styles/molecules/tagList.module.scss";
import Pill from "@/core/atoms/Pill.atom";
export default function TagList({ tags = [] }) {
    const ID = useId();
    return (
        <ul id={ID} className={base}>
            {tags.map((tag, index) => {
                return (
                    <li className={listItem} key={index}>
                        <Pill label={tag} />
                    </li>
                );
            })}
        </ul>
    );
}
