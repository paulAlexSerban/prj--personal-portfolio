import { useId } from "react";
import { base } from "@/styles/atoms/logo.module.scss";

export default function Logo({ href = "/", label, target = "_self" }) {
    const ID = useId();

    return (
        <a
            id={ID}
            href={href}
            aria-label={label}
            target={target}
            className={base}
        >
            Paul Serban
        </a>
    );
}
