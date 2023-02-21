import { useId } from "react";
import { base, main, sub } from "@/styles/atoms/logo.module.scss";
import { Link } from "@/core/atoms/typography/all.js";
import getPath from "@/core/utils/getPath";

export default function Logo({ href = getPath(""), label, target = "_self" }) {
    const ID = useId();

    return (
        <Link
            id={ID}
            href={href}
            target={target}
            className={base}
            ariaLabel="Go to main page."
            isInternal={true}
        >
            <span className={main}>Paul Serban</span>
            <span className={sub}>Front-end Software Engineer</span>
        </Link>
    );
}
