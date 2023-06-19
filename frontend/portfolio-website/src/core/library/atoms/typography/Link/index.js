
import PropTypes from "prop-types";
import { decodeFromBase64, encodeToBase64 } from "@/core/utils/base64";
import { useCallback } from "react";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

export default function LinkAtom({ href, children, classNames, isEncoded, isInternal = false, ariaLabel }) {
    const handleMouseEnter = (ev) => {
        if (isEncoded) {
            ev.target.href = decodeFromBase64(ev.target.getAttribute("href"));
        }
    };

    const handleMouseLeave = (ev) => {
        if (isEncoded) {
            ev.target.href = encodeToBase64(ev.target.getAttribute("href"));
        }
    };

    const handleClick = useCallback(
        async (e) => {
            e.preventDefault();
            const target = e.target;
            const url = target.href;
            try {
                const fetchPage = async () => {
                    const response = await fetch(url, { mode: "no-cors" });
                    const text = await response.text();
                    const div = document.createElement("div");
                    div.innerHTML = text;
                };

                fetchPage().then(() => {
                    window.location.href = url;
                });
            } catch (error) {
                console.error({
                    message: "Error fetching page",
                    url,
                    error,
                });
            }
        },
        []
    );

    return isInternal ? (
        <InternalLink href={href} classNames={classNames} ariaLabel={ariaLabel} handleClick={handleClick}>
            {children}
        </InternalLink>
    ) : (
        <ExternalLink
            href={href}
            classNames={classNames}
            ariaLabel={ariaLabel}
            handleMouseEnter={isEncoded ? handleMouseEnter : null}
            handleMouseLeave={isEncoded ? handleMouseLeave : null}
        >
            {children}
        </ExternalLink>
    );
}

LinkAtom.propTypes = {
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
    classNames: PropTypes.string,
    isInternal: PropTypes.bool,
    isEncoded: PropTypes.bool,
    children: PropTypes.node,
};
