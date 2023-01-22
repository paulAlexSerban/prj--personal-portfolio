import { useId } from "react";
import { base, container } from "@/styles/organisms/header.module.scss";
import SiteNavigation from "@/core/organisms/SiteNavigation.organism";

export default function Header({}) {
    const ID = useId();

    return (
        <header id={ID} className={base}>
            <div className={container}>
                <SiteNavigation />
            </div>
        </header>
    );
}
