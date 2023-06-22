import { useEffect, useRef, useState } from "react";
import styles, { base, container } from "@/styles/organisms/header.module.scss";
import Logo from "@/core/atoms/Logo.atom";

export default function Header() {
    const headerRef = useRef(null);
    const [isShrink, setIsShrink] = useState(false);

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

    useEffect(() => {
        // do not use an arrow function here, to ensure that the function is the same on each render and thus the event listener is not added multiple times
        // if an arrow function is used, the event listener will be added multiple times, and the cleanup will not remove all of them
        // NO! : document.addEventListener("scroll", () => headerShrink());
        document.addEventListener("scroll", headerShrink);

        // Cleanup
        return () => {
            document.removeEventListener("scroll", headerShrink);
        };
    }, []);

    return (
        <header className={base} ref={headerRef}>
            <div className={container}>
                <Logo isShrink={isShrink} href={"/"}/>
            </div>
        </header>
    );
}
