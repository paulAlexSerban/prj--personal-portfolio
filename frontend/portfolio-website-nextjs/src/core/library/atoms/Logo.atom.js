import { useId } from "react";

export default function Logo({ href = "#", label, target = "_self" }) {
    const ID = useId();

    return (
        <a id={ID} href={href} aria-label={label} target={target}>
            LOGO Link
        </a>
    );
}
