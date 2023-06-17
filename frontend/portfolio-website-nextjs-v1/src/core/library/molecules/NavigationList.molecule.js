import { useId } from "react";
import styles, {
	base,
	listItem,
	link,
} from "@/styles/molecules/navigationList.module.scss";
import { Link } from "@/core/atoms/typography/all";
import PropTypes from "prop-types";
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
							isInternal={true}
						/>
					</li>
				);
			})}
		</ul>
	);
}




NavigationList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  navPosition: PropTypes.oneOf(["siteNav", "footerNav"]),
};