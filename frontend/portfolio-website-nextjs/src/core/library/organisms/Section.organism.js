import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
    base,
    header,
    container,
    footer,
} from "@/styles/organisms/section.module.scss";

export default function Section({ children, headingTitle, sectionId }) {
    const ID = useId();

    return (
        <section id={sectionId} className={base}>
            <header className={header}>
                <Heading
                    level="2"
                    mainText={headingTitle}
                    hasSeparator={true}
                />
            </header>
            <div className={container}>{children}</div>
        </section>
    );
}
