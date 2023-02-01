import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
    base,
    header,
    container,
    footer,
} from "@/styles/organisms/heroBanner.module.scss";

import SocialMediaList from "../molecules/SocialMediaList.molecule";
import FlexGrid from "@/core/library/layouts/FlexGrid.layout";

export default function HeroBanner({
    pageTitle = "",
    subheading = "",
    socialMediaList = [],
}) {
    const ID = useId();

    return (
        <section id={ID} className={base}>
            <FlexGrid classNames={["grid"]}>
                <FlexGrid gridElement="row">
                    <FlexGrid classNames={["col"]}>
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
                    </FlexGrid>
                </FlexGrid>
            </FlexGrid>
        </section>
    );
}
