import { useId } from "react";
import { base, main, sub } from "@/styles/atoms/logo.module.scss";

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
            <span className={main}>Paul Serban</span>
            <span className={sub}>Software Engineer</span>
        </a>
    );
}
