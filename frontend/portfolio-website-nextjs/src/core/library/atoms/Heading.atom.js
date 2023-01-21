import styles, { base, subheading, separator } from "@/styles/atoms/heading.module.scss";

export default function Heading({
    level = 2,
    mainText,
    subheadingText,
    hasSeparator,
}) {
    const headingLevel = parseInt(level);

    if (headingLevel === 1) {
        return (
            <h1 className={`${base} ${styles[`base--${headingLevel}`]}`}>
                <span className={styles.main}>{mainText}</span>
                {subheadingText && (
                    <span className={subheading}>{subheadingText}</span>
                )}
            </h1>
        );
    }
    if (headingLevel === 2) {
        return (
            <h2
                className={`
                ${base} ${styles[`base--${headingLevel}`]} 
                ${hasSeparator ? separator : ""}`
                }>

                <span className={styles.main}>{mainText}</span>
                {subheadingText && (
                    <span className={subheading}>{subheadingText}</span>
                )}
            </h2>
        );
    }
    if (headingLevel === 3) {
        return (
            <h3 
            className={`
            ${base} ${styles[`base--${headingLevel}`]} 
            ${hasSeparator ? separator : ""}`
            }>
                <span className={styles.main}>{mainText}</span>
                {subheadingText && (
                    <span className={subheading}>{subheadingText}</span>
                )}
            </h3>
        );
    }
    if (headingLevel === 4) {
        return (
            <h4 className={`${base} ${styles[`base--${headingLevel}`]}`}>
                <span className={styles.main}>{mainText}</span>
                {subheadingText && (
                    <span className={subheading}>{subheadingText}</span>
                )}
            </h4>
        );
    }
    if (headingLevel === 5) {
        return (
            <h5 className={`${base} ${styles[`base--${headingLevel}`]}`}>
                <span className={styles.main}>{mainText}</span>
            </h5>
        );
    }
    if (headingLevel === 6) {
        return (
            <h6 className={`${base} ${styles[`base--${headingLevel}`]}`}>
                <span className={styles.main}>{mainText}</span>
            </h6>
        );
    }
}
