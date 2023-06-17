import { useId,  } from "react";
import Icon from "./Icon.atom";
import PropTypes from "prop-types";
import styles, { base } from "@/styles/atoms/linkIcon.module.scss";
import { Link } from "@/core/atoms/typography/all.js";
export default function LinkIcon({
	href = "/",
	label = "label text",
	iconName,
	position = "",
	isEncoded = false,
	isInternal
}) {
	const ID = useId();



	return (
		<Link
			id={ID}
			href={href}
			aria-label={label}
			target="_blank"
			isInternal={isInternal}
			isEncoded={isEncoded}
			className={`${base} ${
				position.length > 0 ? styles[`base--${position}`] : ""
			}`}

		>
			<Icon iconName={iconName} />
		</Link>
	);
}

LinkIcon.propTypes  ={
	href: PropTypes.string,
	label: PropTypes.string,
	iconName: PropTypes.string,
	position: PropTypes.string,
	isInternal: PropTypes.bool,
	isEncoded: PropTypes.bool
}