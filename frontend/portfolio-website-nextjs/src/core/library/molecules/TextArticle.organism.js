import { useId } from "react";

import { Paragraph } from "@/core/library/atoms/typography/all";
import { base } from "@/styles/molecules/textArticle.module.scss";

export default function TextArticle({ paragraphs, colWidth = 8 }) {
    const ID = useId();

    return (
        <div className={base}>
            {paragraphs &&
                paragraphs.map((paragraph, index) => {
                    return <Paragraph text={paragraph} key={index} />;
                })}
        </div>
    );
}
