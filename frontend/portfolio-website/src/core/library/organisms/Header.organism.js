import { useEffect, useRef, useState } from "react";
import styles, { base, container, navToggle } from "@/styles/organisms/header.module.scss";
import Logo from "@/core/atoms/Logo.atom";
import BurgerButton from "@/core/library/atoms/BurgerButton.atom";
import SiteNavigation from "./SiteNavigation.organism";
import useSiteProps from "@/core/hooks/useSiteProps";

export default function Header() {
    const headerRef = useRef(null);
    const [isShrink, setIsShrink] = useState(false);
    const [navToggled, setNavToggled] = useState(false);
    const { siteNavLinks } = useSiteProps();

    const headerShrink = () => {
        const el = headerRef.current;
        if (window.scrollY === 0) {
            el.classList.remove(styles["base--shrink"]);
            setIsShrink(false);
        } else {
            el.classList.add(styles["base--shrink"]);
            setIsShrink(true);
        }
    };

    const handleToggle = () => {
        setNavToggled(!navToggled);
        // handleNavToggle();
    };

    const handleScroll = () => {
        headerShrink();
        setNavToggled(false);
    };

    useEffect(() => {
        // do not use an arrow function here, to ensure that the function is the same on each render and thus the event listener is not added multiple times
        // if an arrow function is used, the event listener will be added multiple times, and the cleanup will not remove all of them
        // NO! : document.addEventListener("scroll", () => headerShrink());
        document.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={base} ref={headerRef}>
            <div className={container}>
                <Logo isShrink={isShrink} href={"/"} />
                <div className={navToggle} onClick={handleToggle}>
                    <BurgerButton isToggled={navToggled} />
                </div>
            </div>
            <SiteNavigation links={siteNavLinks} isShrink={isShrink} isOpen={navToggled} />
        </header>
    );
}
