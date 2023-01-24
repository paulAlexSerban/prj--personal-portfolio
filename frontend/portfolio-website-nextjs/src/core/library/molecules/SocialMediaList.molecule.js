import { useId } from "react";
import styles, {
    base,
    listItem,
} from "@/styles/molecules/socialMediaList.module.scss";
import { Link } from "@/core/atoms/typography/all";

export default function SocialMediaList({ items = [] }) {
    const ID = useId();

    return (
        <ul id={ID} className={`${base}`}>
            {items.map((item, index) => {
                return (
                    <li className={listItem}>
                        <Link label={item.label} href={item.href} />
                    </li>
                );
            })}
        </ul>
    );
}
