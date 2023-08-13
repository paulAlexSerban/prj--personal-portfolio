import { useState, useRef, useEffect } from "react";
import styles, { base, container, navContent } from "@/styles/organisms/siteNavigation.module.scss";
import NavigationList from "@/core/molecules/NavigationList.molecule";

export default function SiteNavigation({ links = [], isOpen }) {
    const [navHeight, setNavHeight] = useState(0);
    const navContentRef = useRef(null);

    useEffect(() => {
        setNavHeight(`${navContentRef.current.childNodes[0].clientHeight + 30}px`);
    }, []);

    return (
        <nav className={base}>
            <div className={container}>
                <div
                    className={`${navContent} ${isOpen ? styles["navContent--isOpen"] : ""}`}
                    ref={navContentRef}
                    style={{ "--nav-list-height": isOpen ? navHeight : 0 }}
                >
                    <NavigationList items={links} />
                </div>
            </div>
        </nav>
    );
}
