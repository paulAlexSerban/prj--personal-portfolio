import { Paragraph } from "@/core/library/atoms/typography/all";
import { base } from "@/styles/molecules/textArticle.module.scss";

export default function TextArticle({ paragraphs, colWidth = 8 }) {
    return (
        <div className={base} style={{'--columns': colWidth}}>
            {paragraphs &&
                paragraphs.map((paragraph, index) => {
                    return <Paragraph text={paragraph} key={index} />;
                })}
        </div>
    );
}
