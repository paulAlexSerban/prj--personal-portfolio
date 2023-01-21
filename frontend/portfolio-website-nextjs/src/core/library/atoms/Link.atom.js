import { useId } from "react";

export default function Link({ href = "#", label, target = "_self" }) {
    const ID = useId();

    return (
        <a data-next-cmp={ID} href={href} aria-label={label} target={target}>
            {label}
        </a>
    );
}
