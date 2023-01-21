import { useId } from "react";

export default function Paragraph({ text }) {
    const ID = useId();

    return <p data-next-cmp={ID}>{text}</p>;
}
