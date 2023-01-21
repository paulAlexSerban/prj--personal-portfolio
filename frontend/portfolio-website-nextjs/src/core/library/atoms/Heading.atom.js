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

    const innerText = () => {
        if (subheadingText.length !== 0) {
            return (
                <span>
                    <span className={styles.main}>{mainText}</span>
                    <span className={subheading}>{subheadingText}</span>
                </span>
            );
        } else {
            return mainText;
        }
    };

    if (headingLevel === 1) {
        return (
            <h1 data-next-cmp={ID} className={`${hasSeparator && separator}`}>
                {innerText()}
            </h1>
        );
    }
    if (headingLevel === 2) {
        return (
            <h2 data-next-cmp={ID} className={`${hasSeparator && separator}`}>
                {innerText()}
            </h2>
        );
    }
    if (headingLevel === 3) {
        return (
            <h3 data-next-cmp={ID} className={`${hasSeparator && separator}`}>
                {innerText()}
            </h3>
        );
    }
    if (headingLevel === 4) {
        return <h4 data-next-cmp={ID}>{innerText()}</h4>;
    }
    if (headingLevel === 5) {
        return <h5 data-next-cmp={ID}>{innerText()}</h5>;
    }
    if (headingLevel === 6) {
        return <h6 data-next-cmp={ID}>{innerText()}</h6>;
    }
}
