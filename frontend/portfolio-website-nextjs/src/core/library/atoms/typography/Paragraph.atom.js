import { useId } from "react";

export default function Paragraph({ text }) {
    const ID = useId();

    return <p id={ID}>{text}</p>;
}
