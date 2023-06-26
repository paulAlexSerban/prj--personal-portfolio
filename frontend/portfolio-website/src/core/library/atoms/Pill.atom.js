import { useId } from "react";
import { Link } from "@/core/atoms/typography";
import { base } from "@/styles/atoms/pill.module.scss";

export default function Pill({ label, href }) {
	const ID = useId();

	const labelText = `#${label}`;

	return (
		<span id={ID} className={base}>
			<Link
				label={labelText}
				href={href}
				data-internal-link={true}
				isInternal={true}
			/>
		</span>
	);
}
