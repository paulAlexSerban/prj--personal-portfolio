import { useId, useEffect, useRef, useState } from "react";
import styles, { base, container } from "@/styles/organisms/header.module.scss";
import SiteNavigation from "@/core/organisms/SiteNavigation.organism";

export default function Header({ siteNavLinks = [] }) {
    const ID = useId();
    const [navToggled, setNavToggled] = useState(false);

    const headerRef = useRef(null);

    const headerShrink = (el) => {
        if (window.scrollY === 0) {
            el.classList.remove(styles["base--shrink"]);
            el.classList.remove("logoStyles.shrink");
          } else {
            el.classList.add(styles["base--shrink"]);
            el.classList.add("logoStyles.shrink");
          }
    }

    const setupEventListeners = (el) => {
        document.addEventListener("scroll", () => {
            headerShrink(el)
          });
    }

    const handleToggle = () => {
        setNavToggled(!navToggled);
    }

    useEffect(() => {
        setupEventListeners(headerRef.current)
    })

    return (
        <header id={ID} className={base} ref={headerRef}>
            <div className={`${container} ${navToggled ? styles["container--navToggled"] : ''}`}>
                <SiteNavigation links={siteNavLinks} handleNavToggle={handleToggle}/>
            </div>
        </header>
    );
}
