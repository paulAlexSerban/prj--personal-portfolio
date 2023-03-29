import { useMemo } from "react";
import styles from "@/styles/atoms/heading.module.scss";
import PropTypes from "prop-types";

export default function Heading({
	level = 2,
	mainText,
	subheadingText,
	hasSeparator,
	children
}) {
	const headingLevel = parseInt(level);


	const innerText = useMemo(() => {
		if (subheadingText) {
			return (
				<span>
					<span className={styles.main}>{children || mainText}</span>
					<span className={styles.subheading}>{subheadingText}</span>
				</span>
			);
		}
		return children || mainText;
	}, [children , mainText, subheadingText]);

	switch (headingLevel) {
		case 1:
			return <h1>{innerText}</h1>;
		case 2:
			return (
				<h2 className={hasSeparator ? styles.separator : null}>
					{innerText}
				</h2>
			);
		case 3:
			return (
				<h3 className={hasSeparator ? styles.separator : null}>
					{innerText}
				</h3>
			);
		case 4:
			return <h4>{innerText}</h4>;
		case 5:
			return <h5>{innerText}</h5>;
		case 6:
			return <h6>{innerText}</h6>;
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
    mainText: PropTypes.string,
    subheadingText: PropTypes.string,
    hasSeparator: PropTypes.bool
};
