import { useId } from "react";
import styles, {
	base,
	listItem,
	link,
} from "@/styles/molecules/navigationList.module.scss";
import { Link } from "@/core/atoms/typography/all";

export default function NavigationList({
	items = [],
	navPosition = "siteNav",
}) {
	const ID = useId();

	return (
		<ul id={ID} className={`${base} ${styles[`base--${navPosition}`]}`}>
			{items.map((item, index) => {
				return (
					<li className={listItem} key={index}>
						<Link
							label={item.label.toUpperCase()}
							href={item.href}
							className={link}
						/>
					</li>
				);
			})}
		</ul>
	);
}
