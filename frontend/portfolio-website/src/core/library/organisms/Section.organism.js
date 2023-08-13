import ScrollVisibility from "../molecules/hoc/ScrollVisibility";
import { Heading } from "@/core/atoms/typography";
import styles, { base, content, header, container } from "@/styles/organisms/section.module.scss";
import { forwardRef } from "react";

/**
 * The Section component with scroll visibility behavior.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.headingTitle - The heading title.
 * @param {string} props.sectionId - The section ID.
 * @param {string} props.subheadingText - The subheading text.
 * @param {string} props.className - The additional CSS class name.
 * @returns {JSX.Element} - The rendered Section component.
 */
const SectionComponent = forwardRef(({ children, headingTitle, sectionId, subheadingText, className }, ref) => {
    return (
        <section id={sectionId} className={className} ref={ref}>
            <div className={content}>
                {headingTitle && (
                    <header className={header}>
                        <Heading
                            level={2}
                            mainText={headingTitle}
                            hasSeparator={true}
                            subheadingText={subheadingText}
                        />
                    </header>
                )}
                {children && <div className={container}>{children}</div>}
            </div>
        </section>
    );
});

SectionComponent.displayName = "SectionComponent";

/**
 * The Section component with scroll visibility behavior.
 * @component
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered Section component with scroll visibility behavior.
 */
const Section = (props) => {
    return (
        <ScrollVisibility styles={styles} baseClass={base} scrollOperator="gte">
            <SectionComponent {...props} />
        </ScrollVisibility>
    );
};

export default Section;

/**
 * The code includes a SectionComponent that renders a section with a heading based on
 * the provided props. It supports properties like headingTitle, sectionId, subheadingText,
 * and className. The component conditionally renders the header section based on the
 * existence of headingTitle.
 *
 * The Section component is a higher-order component (HOC) that wraps the SectionComponent
 * with scroll visibility behavior using the ScrollVisibility HOC. It sets the styles,
 * baseClass, and scrollOperator props for the ScrollVisibility component.
 *
 * The Section component is exported as the default export of the module.
 */
