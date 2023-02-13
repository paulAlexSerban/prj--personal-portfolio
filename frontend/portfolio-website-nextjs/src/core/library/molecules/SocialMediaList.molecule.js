import { useId } from "react";
import styles, {
    base,
    listItem,
} from "@/styles/molecules/socialMediaList.module.scss";

import LinkIcon from "@/core/atoms/LinkIcon.atom";

export default function SocialMediaList({ items = [], position = "" }) {
    const ID = useId();

    return (
        <ul id={ID} className={`${base}`}>
            {items.map((item, index) => {
                return (
                    <li className={listItem} key={index}>
                        <LinkIcon label={item.label} href={item.href} iconName={item.icon} position={position} />
                    </li>
                );
            })}
        </ul>
    );
}
