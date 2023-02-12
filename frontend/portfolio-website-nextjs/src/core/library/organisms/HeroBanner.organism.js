import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
    base,
    header,
    container,
    wrapper,
} from "@/styles/organisms/heroBanner.module.scss";

import SocialMediaList from "../molecules/SocialMediaList.molecule";

export default function HeroBanner({
    pageTitle,
    subheading,
    socialMediaLinks = [],
    date,
    author,
}) {
    const ID = useId();

    const hasSocialMediaLinks = socialMediaLinks.length > 0;
    const hasContent = hasSocialMediaLinks || date;

    return (
        <section id={ID} className={base}>
            {pageTitle && (
                <>
                    <header className={header}>
                        <div className={wrapper}>
                            <Heading
                                level="1"
                                mainText={pageTitle}
                                subheadingText={subheading}
                            />
                        </div>
                    </header>
                    {hasContent && (
                        <div className={container}>
                            <div className={wrapper}>
                                {hasSocialMediaLinks && (
                                    <SocialMediaList items={socialMediaLinks} />
                                )}
                                {date && (
                                    <Paragraph
                                        text={`By ${author} on ${date}`}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}
