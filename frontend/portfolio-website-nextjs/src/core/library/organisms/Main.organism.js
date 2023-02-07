import { useId } from "react";
import { base, container } from "@/styles/organisms/main.module.scss";

export default function Main({ children }) {
    const ID = useId();

    return (
        <main id={ID} className={base}>
            <div className={container}>{children}</div>
        </main>
    );
}
