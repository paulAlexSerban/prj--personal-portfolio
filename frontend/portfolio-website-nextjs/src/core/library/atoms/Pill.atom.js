import { useId } from "react";
import { Link } from "@/core/atoms/typography/all.js";
import { base } from "@/styles/atoms/pill.module.scss";

export default function Pill({ label, href }) {
    const ID = useId();

    return (
        <span id={ID} className={base}>
            <Link label={label} href={href}/>
        </span>
    );
}
