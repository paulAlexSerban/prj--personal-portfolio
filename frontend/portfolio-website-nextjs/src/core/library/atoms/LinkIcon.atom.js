import { useId } from "react";
import Icon from "./Icon.atom";
import { base } from "@/styles/atoms/linkIcon.module.scss";

export default function LinkIcon({
    href = "/",
    label = "label text",
    iconName,
}) {
    const ID = useId();

    return (
        <a id={ID} href={href} aria-label={label} target="_blank" rel="noreferrer" className={base}>
            <Icon iconName={iconName} />
        </a>
    );
}
