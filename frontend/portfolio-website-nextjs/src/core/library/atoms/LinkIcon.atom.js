import { useId } from "react";
import Icon from "./Icon.atom";
import styles, { base } from "@/styles/atoms/linkIcon.module.scss";

export default function LinkIcon({
	href = "/",
	label = "label text",
	iconName,
	position = "",
}) {
	const ID = useId();

	return (
		<a
			id={ID}
			href={href}
			aria-label={label}
			target="_self"
			rel="noreferrer"
			className={`${base} ${
				position.length > 0 ? styles[`base--${position}`]: ""
			}`}
		>
			<Icon iconName={iconName} />
		</a>
	);
}
