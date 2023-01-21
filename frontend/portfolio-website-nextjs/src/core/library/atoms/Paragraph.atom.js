import { useId } from "react";
import styles, { base } from "@/styles/atoms/paragraph.module.scss";

export default function Paragraph({ text }) {
    const ID = useId();

    return (
        <p data-next-cmp={ID} className={base}>
            {text}
        </p>
    );
}
