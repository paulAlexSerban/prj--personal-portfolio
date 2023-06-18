import styles, { base, main, sub } from "@/styles/atoms/logo.module.scss";
import { Link } from "@/core/library/atoms/typography/index.js";
import classNames from "classnames";
import { memo } from "react";

function Logo({ href, label, target = "_self", isShrink = false }) {
    const mainClasses = classNames(main, {
        [styles["main--shrink"]]: isShrink,
    });

    const subClasses = classNames(sub, {
        [styles["sub--shrink"]]: isShrink,
    });
    return (
        <Link href={href} target={target} classNames={base} ariaLabel="Go to home page." isInternal={true}>
            <span className={mainClasses}>Paul Serban</span>
            <span className={subClasses}>Front-end Software Engineer</span>
        </Link>
    );
}

export default memo(Logo);
