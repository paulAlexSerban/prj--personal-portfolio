import PropTypes from 'prop-types';
import { decodeFromBase64, encodeToBase64 } from '@/core/utils/TextUtils';
import { useCallback } from 'react';
import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';
import { event as gtagEvent } from '@/lib/gtag';
export default function LinkAtom({
    href,
    children,
    classNames,
    isEncoded,
    isInternal = false,
    ariaLabel,
    handleClick,
}) {
    const handleMouseEnter = (ev) => {
        const eventLink = ev.target.nodeName === 'a' ? ev.target : ev.target.closest('a');
        if (isEncoded) {
            eventLink.href = decodeFromBase64(eventLink.getAttribute('href'));
        }
    };

    const handleMouseLeave = (ev) => {
        const eventLink = ev.target.nodeName === 'a' ? ev.target : ev.target.closest('a');
        if (isEncoded) {
            eventLink.href = encodeToBase64(eventLink.getAttribute('href'));
        }
    };

    const handleLinkClick = (ev) => {
        handleClick && handleClick(ev);
        // const eventLink = ev.target.nodeName === 'a' ? ev.target : ev.target.closest('a');
        // const eventLabel = eventLink.getAttribute('href');
        // const eventCategory = eventLink.getAttribute('data-event-category');
        // const eventAction = eventLink.getAttribute('data-event-action');
        // const eventValue = eventLink.getAttribute('data-event-value');
        // if (eventCategory && eventAction) {
        //     gtagEvent({
        //         action: eventAction,
        //         category: eventCategory,
        //         label: eventLabel,
        //         value: eventValue,
        //     });
        // }
    };

    // NOT IN USED, BUT COULD HELP IN THE FUTURE: logic here was used to fetch pages before navigating to them in order to improve performance
    // const handleClick = useCallback(async (e) => {
    //     e.preventDefault();
    //     const {target} = e;
    //     const url = target.href;
    //     try {
    //         const fetchPage = async () => {
    //             const response = await fetch(url, { mode: "no-cors" });
    //             const text = await response.text();
    //             const div = document.createElement("div");
    //             div.innerHTML = text;
    //         };

    //         fetchPage().then(() => {
    //             window.location.href = url;
    //         });
    //     } catch (error) {
    //         console.error({
    //             message: "Error fetching page",
    //             url,
    //             error,
    //         });
    //     }
    // }, []);
    return isInternal ? (
        <InternalLink href={href} classNames={classNames} ariaLabel={ariaLabel} onClick={handleLinkClick}>
            {children}
        </InternalLink>
    ) : (
        <ExternalLink
            href={href}
            classNames={classNames}
            ariaLabel={ariaLabel}
            handleMouseEnter={isEncoded ? handleMouseEnter : null}
            handleMouseLeave={isEncoded ? handleMouseLeave : null}
            onClick={handleLinkClick}
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
