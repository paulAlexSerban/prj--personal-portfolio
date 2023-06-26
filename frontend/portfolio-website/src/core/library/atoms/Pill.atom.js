import { Link } from "@/core/atoms/typography";
import { base } from "@/styles/atoms/pill.module.scss";

export default function Pill({ label, href }) {
    const labelText = `#${label}`;

    return (
        <span className={base}>
            <Link ariaLabel={labelText} href={href} isInternal={true}>
                {labelText}
            </Link>
        </span>
    );
}
