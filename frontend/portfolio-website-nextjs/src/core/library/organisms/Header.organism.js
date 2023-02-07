import { useId, useEffect, useRef } from "react";
import styles, { base, container } from "@/styles/organisms/header.module.scss";
import SiteNavigation from "@/core/organisms/SiteNavigation.organism";

export default function Header({ siteNavLinks = [] }) {
    const ID = useId();

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

    useEffect(() => {
        setupEventListeners(headerRef.current)
    })

    return (
        <header id={ID} className={base} ref={headerRef}>
            <div className={container}>
                <SiteNavigation links={siteNavLinks} />
            </div>
        </header>
    );
}
