import { useId, useState, useRef, useEffect } from "react";
import styles, {
    base,
    container,
    logoContainer,
    navToggle,
    navContent,
    controls,
} from "@/styles/organisms/siteNavigation.module.scss";

import BurgerButton from "@/core/library/atoms/BurgerButton.atom";
import NavigationList from "@/core/molecules/NavigationList.molecule";

export default function SiteNavigation({ links = [], handleNavToggle }) {
    const ID = useId();
    const [navToggled, setNavToggled] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const navContentRef = useRef(null);

    useEffect(() => {
        setNavHeight(`${navContentRef.current.childNodes[0].clientHeight + 30}px`);
        setupEventListeners();
    }, []);

    const handleToggle = () => {
        setNavToggled(!navToggled);
        handleNavToggle();
    };

    const setupEventListeners = () => {
        document.addEventListener("scroll", () => {
            setNavToggled(false);
        });
    };

    return (
        <nav id={ID} className={base}>
            <div className={container}>
                <div className={controls}>
                    <div className={navToggle} onClick={handleToggle}>
                        <BurgerButton isToggled={navToggled} />
                    </div>
                </div>
                <div
                    className={`${navContent} ${navToggled ? styles["navContent--isOpen"] : ""}`}
                    ref={navContentRef}
                    style={{ "--nav-list-height": navToggled ? navHeight : 0 }}
                >
                    <NavigationList items={links} />
                </div>
            </div>
        </nav>
    );
}
