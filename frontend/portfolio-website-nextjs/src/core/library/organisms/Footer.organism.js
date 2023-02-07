import { useId } from "react";
import { base, container, bottom } from "@/styles/organisms/footer.module.scss";
import Link from "@/core/atoms/typography/Link.atom";

export default function Footer({
    ownerEmail = "",
    currentYear = "",
    ownerName = "",
}) {
    const ID = useId();

    const date = new Date();

    return (
        <footer id={ID} className={base}>
            <div className={container}></div>
            <div className={bottom}>
                <span>
                    {date.getFullYear()} &copy; Paul Serban. All rights
                    reserved.
                </span>
                <Link label="www.paulserban.eu" />
            </div>
        </footer>
    );
}
