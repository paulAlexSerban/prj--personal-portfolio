import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
    base,
    header,
    container,
    footer,
} from "@/styles/organisms/heroBanner.module.scss";

import SocialMediaList from "../molecules/SocialMediaList.molecule";

export default function HeroBanner({
    pageTitle = "",
    subheading = "",
    socialMediaList = [],
}) {
    const ID = useId();

    return (
        <section id={ID} className={base}>
            <header className={header}>
                <Heading
                    level="1"
                    mainText={pageTitle}
                    subheadingText={subheading}
                />
            </header>
            <div className={container}>
                <SocialMediaList items={socialMediaList} />
            </div>
        </section>
    );
}
