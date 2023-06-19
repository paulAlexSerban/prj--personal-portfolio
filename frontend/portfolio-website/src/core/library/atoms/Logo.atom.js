import styles, { base, main, sub } from "@/styles/atoms/logo.module.scss";
import { Link } from "@/core/library/atoms/typography";
import classNames from "classnames";
import { memo } from "react";
import { useSiteProps } from "@/context/SitePropsContext";
import PropTypes from "prop-types";

/**
 * Logo Component. This component renders the site logo.
 * @param {Object} props - An object of properties
 * @param {string} props.href - The URL where the logo should redirect
 * @param {string} [props.ariaLabel] - The aria-label for the logo
 * @param {boolean} [props.isShrink=false] - A flag to determine if the logo should be shrunk
 * @returns {React.Component} The Logo component
 */
function Logo({ href, ariaLabel, isShrink = false }) {
    // Extract site props
    const { name, role } = useSiteProps();
    // Conditionally define the CSS classes
    const mainClasses = classNames(main, {
        [styles["main--shrink"]]: isShrink,
    });
    const subClasses = classNames(sub, {
        [styles["sub--shrink"]]: isShrink,
    });

    // Return the Logo component
    return (
        <Link href={href} classNames={base} ariaLabel={ariaLabel} isInternal={true}>
            <span className={mainClasses}>{name}</span>
            <span className={subClasses}>{role}</span>
        </Link>
    );
}

// Define the PropTypes
Logo.propTypes = {
    href: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    isShrink: PropTypes.bool,
};

export default memo(Logo);
