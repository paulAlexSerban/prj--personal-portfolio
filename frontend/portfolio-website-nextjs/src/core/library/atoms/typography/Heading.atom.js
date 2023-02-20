import { useId, useMemo } from "react";
import styles from "@/styles/atoms/heading.module.scss";
import PropTypes from "prop-types";

export default function Heading({
	level = 2,
	mainText,
	subheadingText,
	hasSeparator,
}) {
	const headingLevel = parseInt(level);
	const ID = useId();

	const capitalizedMainText = `${mainText
		.charAt(0)
		.toUpperCase()}${mainText.slice(1)}`;

	const innerText = useMemo(() => {
		if (subheadingText) {
			return (
				<span>
					<span className={styles.main}>{capitalizedMainText}</span>
					<span className={styles.subheading}>{subheadingText}</span>
				</span>
			);
		}
		return capitalizedMainText;
	}, [capitalizedMainText, subheadingText]);

	switch (headingLevel) {
		case 1:
			return <h1 id={ID}>{innerText}</h1>;
		case 2:
			return (
				<h2 id={ID} className={hasSeparator ? styles.separator : null}>
					{innerText}
				</h2>
			);
		case 3:
			return (
				<h3 id={ID} className={hasSeparator ? styles.separator : null}>
					{innerText}
				</h3>
			);
		case 4:
			return <h4 id={ID}>{innerText}</h4>;
		case 5:
			return <h5 id={ID}>{innerText}</h5>;
		case 6:
			return <h6 id={ID}>{innerText}</h6>;
		default:
			return null;
	}
}

/**
 * Add propTypes to the component
 * - It's a good practice to add propTypes to the component to ensure that the correct props are passed to it.
 * - Use the prop-types package to define the propTypes for the component.
 */

Heading.propTypes = {
	level: PropTypes.number,
    mainText: PropTypes.string.isRequired,
    subheadingText: PropTypes.string,
    hasSeparator: PropTypes.bool
};
