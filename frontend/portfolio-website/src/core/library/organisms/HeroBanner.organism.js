import ScrollVisibility from "./hoc/ScrollVisibility";
import React from "react";
import { Paragraph, Heading } from "@/core/atoms/typography";
import styles, { base, container, wrapper } from "@/styles/organisms/heroBanner.module.scss";

/**
 * The HeroBanner component with scroll visibility behavior.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.pageTitle - The page title.
 * @param {string} props.subheading - The subheading text.
 * @param {Array} [props.socialMediaLinks=[]] - The array of social media links.
 * @param {string} props.date - The date.
 * @param {string} props.author - The author.
 * @param {Array} props.tags - The array of tags.
 * @param {string} props.className - The additional CSS class name.
 * @returns {JSX.Element} - The rendered HeroBanner component.
 */
const HeroBannerComponent = React.forwardRef(
    ({ pageTitle, subheading, socialMediaLinks = [], date, author, tags, className }, ref) => {
      const hasSocialMediaLinks = socialMediaLinks.length > 0;
      const hasTags = tags && tags.length > 0;
      const hasContent = hasSocialMediaLinks || date || hasTags;
  
      return (
        <>
          {pageTitle && (
            <header className={className} ref={ref}>
              <div className={container}>
                <div className={wrapper}>
                  <Heading level={1} mainText={pageTitle} subheadingText={subheading} />
                </div>
  
                {hasContent && (
                  <div className={wrapper}>
                    {date || author ? <Paragraph text={`By ${author} ${date ? `on ${date}` : ""}`} /> : ""}
                  </div>
                )}
              </div>
            </header>
          )}
        </>
      );
    }
  );

  HeroBannerComponent.displayName = "HeroBannerComponent";
  
  /**
   * The HeroBanner component with scroll visibility behavior.
   * @component
   * @param {Object} props - The component props.
   * @returns {JSX.Element} - The rendered HeroBanner component with scroll visibility behavior.
   */
  const HeroBanner = (props) => {
    return (
      <ScrollVisibility styles={styles} baseClass={base} scrollOperator="lte" rootMargin="50%">
        <HeroBannerComponent {...props} />
      </ScrollVisibility>
    );
  };
  
  export default HeroBanner;
  
/**
 * The code includes a HeroBannerComponent that renders the hero banner based on the provided props. 
 * It supports properties like pageTitle, subheading, socialMediaLinks, date, author, tags, and 
 * className. The component conditionally renders the header section based on the existence of pageTitle.
 * 
 * The HeroBanner component is a higher-order component (HOC) that wraps the HeroBannerComponent with 
 * scroll visibility behavior using the ScrollVisibility HOC. It sets the styles, baseClass, 
 * scrollOperator, and rootMargin props for the ScrollVisibility component.
 * 
 * The HeroBanner component is exported as the default export of the module.
 */