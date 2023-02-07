import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
    base,
    header,
    container,
    wrapper,
} from "@/styles/organisms/heroBanner.module.scss";

import SocialMediaList from "../molecules/SocialMediaList.molecule";
import FlexGrid from "@/core/library/layouts/FlexGrid.layout";

export default function HeroBanner({
    pageTitle,
    subheading,
    socialMediaLinks,
}) {
    const ID = useId();

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
                    {socialMediaLinks && (
                        <div className={container}>
                            <div className={wrapper}>
                                <SocialMediaList items={socialMediaLinks} />
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}
