import { useId } from "react";
import {
    base,
    container,
    navToggle,
    navContent,
} from "@/styles/organisms/siteNavigation.module.scss";

import Logo from "@/core/atoms/Logo.atom";
import BurgerButton from "@/core/atoms/BurgerButton";
import NavigationList from "@/core/molecules/NavigationList.molecule";

const DOMAIN_NAME =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export default function SiteNavigation({ links = [] }) {
    const ID = useId();

    return (
        <nav id={ID} className={base}>
            <div className={container}>
                <Logo />
                <div className={navToggle}>
                    <BurgerButton />
                </div>
                <div className={navContent}>
                    <NavigationList items={links} />
                </div>
            </div>
        </nav>
    );
}
