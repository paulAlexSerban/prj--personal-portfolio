
import "@/styles/atoms/heading.module.scss";

export default function Heading({
    level = 2,
    mainText,
    subheading,
    hasSeparator,
}) {
    if (parseInt(level) === 2) {
        return (
            <h2>
                <span>{mainText}</span>
            </h2>
        );
    }
}
