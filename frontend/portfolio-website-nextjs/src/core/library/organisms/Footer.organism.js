import { useId } from "react";
import { base, container } from "@/styles/organisms/footer.module.scss";

export default function Footer({}) {
    const ID = useId();

    return (
        <footer id={ID} className={base}>
            <div className={container}>Footer Container</div>
        </footer>
    );
}
