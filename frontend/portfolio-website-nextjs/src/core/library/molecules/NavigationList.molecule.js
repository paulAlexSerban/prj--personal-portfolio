import { useId } from "react";
import styles, {
    base,
    listItem,
} from "@/styles/molecules/navigationList.module.scss";
import { Link } from "@/core/atoms/typography/all";

export default function NavigationList() {
    const ID = useId();

    return (
        <ul id={ID} className={`${base} ${styles["base--siteNav"]}`}>
            <li className={listItem}>
                <Link label="PORTFOLIO" />
            </li>
            <li className={listItem}>
                <Link label="BLOG" />
            </li>
            <li className={listItem}>
                <Link label="CV" />
            </li>
        </ul>
    );
}
