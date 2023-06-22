import Link from "next/link";
import PropTypes from "prop-types";
export default function InternalLink({ href, classNames, ariaLabel, children, handleClick }) {
    return (
        <Link href={href} aria-label={ariaLabel} rel="noreferrer" className={classNames} onClick={handleClick}>
            {children}
        </Link>
    );
}

InternalLink.propTypes = {
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
    classNames: PropTypes.string,
    children: PropTypes.node,
    handleClick: PropTypes.func,
};
