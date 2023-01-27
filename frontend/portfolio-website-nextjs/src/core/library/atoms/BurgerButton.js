import { useId } from "react";

import styles, { base, line } from "@/styles/atoms/burgerButton.module.scss";

export default function BurgerButton({ isToggled }) {
    const ID = useId();

    return (
        <button
        type="button"
            id={ID}
            className={`${base} ${
                isToggled ? styles["base--isOpen"] : styles["base--isClosed"]
            }`}
        >
            <span className={line}>Menu</span>
        </button>
    );
}
