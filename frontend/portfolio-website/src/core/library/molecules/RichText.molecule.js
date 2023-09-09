import { base } from "@/styles/molecules/richText.module.scss";

export default function RichText({ children }) {
    return <div className={base}>{children}</div>;
}
