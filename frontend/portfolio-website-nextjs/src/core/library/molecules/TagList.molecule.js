import { useId } from "react";
import { base, listItem } from "@/styles/molecules/tagList.module.scss";
import Pill from "@/core/atoms/Pill.atom";
import sanitizeQueryString from "@/core/utils/sanitizeQueryString";
import PropTypes from "prop-types";

export default function TagList({ tags }) {
	const ID = useId();

	const getHref = (tag) => `/tags/${sanitizeQueryString(tag)}`;

	return (
		<>
			{tags && (
				<ul id={ID} className={base}>
					{tags.map((tag, index) => (
						<li className={listItem} key={index}>
							<Pill label={tag} href={getHref(tag)} />
						</li>
					))}
				</ul>
			)}
		</>
	);
}

TagList.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
