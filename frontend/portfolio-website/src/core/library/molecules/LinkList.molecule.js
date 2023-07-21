import { Link } from "@/core/library/atoms/typography";
import List from "@/core/library/atoms/List.atom";
import PropTypes from "prop-types";

/**
 * The LinkList component is used to generate a list of links.
 * @param {Object[]} links - An array of link objects to be included in the list.
 * @param {string} links[].label - The display name of the link.
 * @param {string} links[].href - The URL of the link.
 * @param {boolean} [links[].isEncoded] - Optional. Whether the URL of the link is base64 encoded. Defaults to `false`.
 * @param {boolean} [links[].isInternal] - Optional. Whether the link is an internal link. Defaults to `false`.
 * @example
 * // To use this component, pass an array of link objects.
 * // Each object should have 'label' and 'href' properties.
 * // Optional 'isEncoded' and 'isInternal' properties can also be included.
 * <LinkList links={[{ label: 'GitHub', href: 'https://github.com', isInternal: false, isEncoded: false }]} />
 * @returns {React.Component} A React component containing the list of links.
 */
export default function LinkList({ links = [] }) {
    // Type checking for 'links'
    if (!Array.isArray(links)) {
        console.warn("Invalid prop: 'links' should be an array");
        return null;
    }

    return (
        <List 
            items={links.map((link, index) => {
                const { label, href, isEncoded, isInternal, ...linkProps } = link;
                // Using index as a fallback key
                const key = label || index;

                return (
                    <Link
                        key={key}
                        href={href}
                        ariaLabel={label}
                        isInternal={isInternal}
                        isEncoded={isEncoded}
                        {...linkProps}
                    >
                        {label}
                    </Link>
                );
            })}
        />
    );
}

LinkList.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            href: PropTypes.string,
            isEncoded: PropTypes.bool,
            isInternal: PropTypes.bool,
        })
    ),
};
