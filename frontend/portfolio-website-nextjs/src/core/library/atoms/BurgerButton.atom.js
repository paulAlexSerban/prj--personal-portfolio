import { useId } from "react";
import PropTypes from "prop-types";
import styles, { base, line } from "@/styles/atoms/burgerButton.module.scss";
import classNames from "classnames";

export default function BurgerButton({
	isToggled,
	ariaLabel = "Open - Close dropdown navigation button",
	ariaHidden = false,
}) {
	const ID = useId();

	const classes = classNames(base, {
		[styles["base--isOpen"]]: isToggled,
		[styles["base--isClosed"]]: !isToggled,
	});

	return (
		<button
			type="button"
			aria-label={ariaLabel}
			aria-hidden={ariaHidden}
			id={ID}
			className={classes}
		>
			<span className={line}>Menu</span>
		</button>
	);
}

BurgerButton.propTypes = {
	isToggled: PropTypes.bool,
	ariaLabel: PropTypes.string,
	ariaHidden: PropTypes.bool,
};
