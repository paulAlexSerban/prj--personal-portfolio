import { useId } from "react";

export default function BurgerButton({ }) {
    const ID = useId();

    return (
        <div id={ID}>
            Burger button
        </div>
    );
}
