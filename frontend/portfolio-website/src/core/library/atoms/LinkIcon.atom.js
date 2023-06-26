import Icon from "./Icon.atom";
import PropTypes from "prop-types";
import styles, { base, tooltip } from "@/styles/atoms/linkIcon.module.scss";
import { Link } from "@/core/atoms/typography";
export default function LinkIcon({
    href = "/",
    label = "label text",
    iconName,
    position = "",
    isEncoded = false,
    isInternal,
}) {
    return (
        <Link
            href={href}
            ariaLabel={label}
            isInternal={isInternal}
            isEncoded={isEncoded}
            classNames={`${base} ${position.length > 0 ? styles[`base--${position}`] : ""}`}
        >
            <span className={tooltip}>{label}</span>
            <Icon iconName={iconName} />
        </Link>
    );
}

LinkIcon.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
    iconName: PropTypes.string,
    position: PropTypes.string,
    isInternal: PropTypes.bool,
    isEncoded: PropTypes.bool,
};
