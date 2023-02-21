import { useId, useRef, useEffect, useState, useCallback } from "react";
import { encodeToBase64, decodeFromBase64 } from "@/core/utils/base64";
import PropTypes from "prop-types";
export default function LinkAtom({
	href = "/",
	label = "label text undefined",
	ariaLabel,
	className,
	isInternal = false,
	prefetch = false,
	isScrollTo = false,
	isEncoded = false,
	children,
}) {
	const [hrefString, setHrefString] = useState(href);
	const linkRef = useRef(null);
	const ID = useId();

	/**
	 * Use useCallback to memoize the setupEventListeners function:
	 * - Use useCallback to memoize the setupEventListeners function, which will ensure that the function is not recreated on every render.
	 * - Can improve performance, especially if the function is used as a dependency in the useEffect hook.
	 */

	const handleLinkHover = useCallback(() => {
		if (isEncoded) {
			setHrefString(decodeFromBase64(hrefString));
		}
	}, [isEncoded, hrefString]);

	const handleLinkBlur = useCallback(() => {
		if (isEncoded) {
			setHrefString(encodeToBase64(hrefString));
		}
	}, [isEncoded, hrefString]);

	const handleLinkClick = useCallback(
		async (e) => {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			const linkRefCurrent = linkRef.current;
			if (isInternal) {
				const url = linkRefCurrent.href;
				const spinnerEl = document.querySelector(".loading-spinner");
				document.querySelector(".loading-spinner").classList.add("isVisible");

				try {
					const fetchPage = async () => {
						const response = await fetch(url, { mode: "no-cors" });
						const text = await response.text();
						const div = document.createElement("div");
						div.innerHTML = text;
					};

					fetchPage().then(() => {
						setTimeout(() => {
							window.location.href = url;
						}, 1000);
					});
				} catch (error) {
					console.error(error);
					if (spinnerEl) {
						spinnerEl.classList.remove("isVisible");
					}
				}
			}
		},
		[isInternal]
	);

	/**
	 * Add label, href, hrefString, setupEventListeners, and linkRef.current as dependencies to ensure that the effect re-runs when any of these values change
	 */

	useEffect(() => {
		const linkRefCurrent = linkRef.current;
		if (isEncoded) {
			linkRefCurrent.addEventListener("click", handleLinkHover);
			linkRefCurrent.addEventListener("mouseover", handleLinkHover);
			linkRefCurrent.addEventListener("blur", handleLinkBlur);
		}
		if (isInternal) {
			linkRefCurrent.addEventListener("click", handleLinkClick);
		}
		return () => {
			if (isEncoded) {
				linkRefCurrent.removeEventListener("click", handleLinkHover);
				linkRefCurrent.removeEventListener("mouseover", handleLinkHover);
				linkRefCurrent.removeEventListener("blur", handleLinkBlur);
			}
			if (isInternal) {
				linkRefCurrent.removeEventListener("click", handleLinkClick);
			}
		};
	}, [isEncoded, isInternal, handleLinkHover, handleLinkBlur, handleLinkClick]);

	return (
		<a
			href={hrefString}
			id={ID}
			aria-label={ariaLabel || label}
			target={isInternal ? "_self" : "_blank"}
			rel="noreferrer"
			className={className}
			data-internal-link={isInternal}
			data-prefetch={prefetch}
			data-scroll-to-link={isScrollTo}
			ref={linkRef}
		>
			{children || label}
		</a>
	);
}

/**
 * Add propTypes to the component
 * - It's a good practice to add propTypes to the component to ensure that the correct props are passed to it.
 * - Use the prop-types package to define the propTypes for the component.
 */

LinkAtom.propTypes = {
	href: PropTypes.string,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	isInternal: PropTypes.bool,
	prefetch: PropTypes.bool,
	isScrollTo: PropTypes.bool,
	isEncoded: PropTypes.bool,
	children: PropTypes.node,
};
