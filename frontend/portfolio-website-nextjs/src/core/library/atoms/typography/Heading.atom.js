import { useId } from "react";
import styles, {
    base,
    subheading,
    separator,
} from "@/styles/atoms/heading.module.scss";

export default function Heading({
    level = 2,
    mainText,
    subheadingText = "",
    hasSeparator,
}) {
    const headingLevel = parseInt(level);
    const ID = useId();

    const capitalizedMainText = mainText.charAt(0).toUpperCase() + mainText.slice(1);

    const innerText = () => {
        if (subheadingText.length !== 0) {
            return (
                <span>
                    <span className={styles.main}>{capitalizedMainText}</span>
                    <span className={subheading}>{subheadingText}</span>
                </span>
            );
        } else {
            return capitalizedMainText;
        }
    };

    if (headingLevel === 1) {
        return (
            <h1 id={ID}>
                {innerText()}
            </h1>
        );
    }
    if (headingLevel === 2) {
        return (
            <h2 id={ID} className={`${hasSeparator && separator}`}>
                {innerText()}
            </h2>
        );
    }
    if (headingLevel === 3) {
        return (
            <h3 id={ID} className={`${hasSeparator && separator}`}>
                {innerText()}
            </h3>
        );
    }
    if (headingLevel === 4) {
        return <h4 id={ID}>{innerText()}</h4>;
    }
    if (headingLevel === 5) {
        return <h5 id={ID}>{innerText()}</h5>;
    }
    if (headingLevel === 6) {
        return <h6 id={ID}>{innerText()}</h6>;
    }
}
