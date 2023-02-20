import { useId } from "react";
import PropTypes from "prop-types";
export default function Paragraph({ text, classNames = [] }) {
	const ID = useId();

	const classes = classNames.join(" ");

	return (
		<p id={ID} className={classes}>
			{text}
		</p>
	);
}

Paragraph.propTypes = {
	text: PropTypes.string.isRequired,
	classNames: PropTypes.array,
};
