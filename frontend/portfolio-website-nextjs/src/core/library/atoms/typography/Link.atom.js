import { useId } from "react";

export default function Link({
    href = "/",
    label = "label text",
    target = "_self",
}) {
    const ID = useId();

    return (
        <a id={ID} href={href} aria-label={label} target={target}>
            {label}
        </a>
    );
}